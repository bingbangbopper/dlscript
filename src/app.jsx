import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHotkeys } from "react-hotkeys-hook";
import { getReactProps } from "./helpers";
import {
  startDownloadToast,
  updateDownloadProgress,
  completeDownload,
} from "./CustomToast";

const UPLOAD_URL = "https://image-upload-worker.11037.workers.dev/upload";
const UPLOAD_TOKEN = "Bearer 4IGUDUJO4WSQQQJFXUUZHJJFAXJ4FZLA";

const TWITTER_EPOCH = 1288834974657n;

/**
 * @typedef {Object} DownloadMetadata
 * @property {string} filename
 * @property {string} source_url
 * @property {number} published_date
 * @property {number} retrieved_date
 */

function snowflakeToTimestamp(snowflake) {
  return Number((BigInt(snowflake) >> 22n) + TWITTER_EPOCH);
}

function upload(blob, filename, customMetadata) {
  const form = new FormData();
  form.append("image", blob, filename);
  form.append("customMetadata", JSON.stringify(customMetadata));
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method: "POST",
      url: UPLOAD_URL,
      headers: { Authorization: UPLOAD_TOKEN },
      data: form,
      onload: (res) => resolve(JSON.parse(res.responseText)),
      onerror: reject,
    });
  });
}

function toastError(toastId, message = "Download failed") {
  if (toastId !== null) {
    toast.update(toastId, {
      render: message,
      type: "error",
      pauseOnFocusLoss: false,
      autoClose: 3000,
      hideProgressBar: true,
      progress: undefined,
    });
  } else {
    toast.error(message, {
      pauseOnFocusLoss: false,
      autoClose: 3000,
      hideProgressBar: true,
    });
  }
}

async function downloadFile(url, filename, snowflake = null) {
  let toastId = null;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      toast.error("Download failed");
      return;
    }

    const mimeType = response.headers.get("Content-Type");
    const extension = mimeType.split("/")[1].replace("jpeg", "jpg");
    const total = parseInt(response.headers.get("Content-Length"), 10) || null;
    const fullName = `${filename}.${extension}`;

    const reader = response.body.getReader();
    let received = 0;
    const chunks = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.length;

      if (total) {
        const progress = (received * 100) / total;
        if (toastId === null) {
          toastId = startDownloadToast(fullName);
        } else {
          updateDownloadProgress(toastId, fullName, progress);
        }
      }
    }

    const blob = new Blob(chunks, { type: mimeType });

    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = fullName;
    a.click();
    window.URL.revokeObjectURL(a.href);

    /** @type {DownloadMetadata} */
    const metadata = {
      filename: fullName,
      source_url: url,
      published_date: snowflake ? snowflakeToTimestamp(snowflake) : 0,
      retrieved_date: Date.now(),
    };
    const result = await upload(blob, fullName, metadata);
    console.log(result);

    completeDownload(toastId, fullName);
  } catch (error) {
    console.error(error);
    toastError(toastId);
  }
}

async function executeWithDelay(tasks, delay) {
  for (const task of tasks) {
    await task();
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

function triggerAutoEngage() {
  const likeButton = document.querySelector(
    `article:hover button[data-testid="like"]`,
  );
  const retweetButton = document.querySelector(
    `article:hover button[data-testid="retweet"]`,
  );
  if (!likeButton || !retweetButton) return;
  executeWithDelay(
    [
      () => likeButton.click(),
      () => retweetButton.click(),
      () =>
        document
          .querySelector("[data-testid=Dropdown] [data-testid=retweetConfirm]")
          ?.click(),
    ],
    200,
  );
}

function getBestVariant(variants) {
  let best = { bitrate: -Infinity, src: "", url: "" };
  for (const v of variants) {
    if (v.bitrate > best.bitrate) best = v;
  }
  return best;
}

function downloadHoveredVideo(doc) {
  const hoveredVideo = doc.querySelector(
    "[data-testid=tweetPhoto]:hover:has([data-testid=videoPlayer])",
  );
  if (!hoveredVideo) return false;

  const props = getReactProps(hoveredVideo)?.children?.props;
  if (!props) return true;

  const {
    source: { downloadLink, variants },
    authorScreenName,
    tweetId,
  } = props;
  const best = variants ? getBestVariant(variants) : {};
  const url = downloadLink || best.url || best.src;

  if (url) downloadFile(url, `${authorScreenName} ${tweetId}`, tweetId);
  return true;
}

function downloadHoveredImage(doc) {
  const hoveredImg = doc.querySelector("img:hover");
  if (!hoveredImg) return;

  const picUrl = hoveredImg.src;
  const base = picUrl.split("?")[0];
  const query = picUrl.includes("format=png")
    ? "?format=png&name=4096x4096"
    : "?format=jpg&name=4096x4096";

  const href = doc.querySelector("a:hover")?.href || window.location.href;
  navigator.clipboard.writeText(href);

  const [, , , screenname, , snowflake, , index] = href.split("/");
  downloadFile(base + query, `${screenname} ${snowflake} ${index}`, snowflake);
}

function handleDownload(autoEngage) {
  const doc = unsafeWindow.document;
  if (autoEngage) triggerAutoEngage();
  if (!downloadHoveredVideo(doc)) downloadHoveredImage(doc);
}

export function App() {
  const [autoEngage, setAutoEngage] = useState(() => {
    const saved = localStorage.getItem("twit_auto_engage");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("twit_auto_engage", JSON.stringify(autoEngage));
  }, [autoEngage]);

  useHotkeys("shift+d", (event) => {
    event.preventDefault();
    handleDownload(autoEngage);
  });

  return (
    <>
      <ToastContainer position="top-center" />
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          padding: "10px 14px",
          borderRadius: "8px",
          zIndex: 9999,
          fontFamily: "sans-serif",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backdropFilter: "blur(4px)",
        }}
      >
        <input
          type="checkbox"
          id="autoEngageSwitch"
          checked={autoEngage}
          onChange={(e) => setAutoEngage(e.target.checked)}
          style={{ cursor: "pointer" }}
        />
        <label
          htmlFor="autoEngageSwitch"
          style={{ cursor: "pointer", userSelect: "none" }}
        >
          Auto Like & RT
        </label>
      </div>
    </>
  );
}
