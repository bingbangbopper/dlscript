import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHotkeys } from "react-hotkeys-hook";
import { getReactProps, findInReactFiberTree } from "./helpers";
import {
  startDownloadToast,
  updateDownloadProgress,
  completeDownload,
} from "./CustomToast";

async function downloadFile(url, filename) {
  let toastId = null;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      toast.error("Download failed");
      return;
    }

    const contentLength = response.headers.get("Content-Length");
    // get mime type
    const mimeType = response.headers.get("Content-Type");
    // choose file extension from mime type
    const extension = mimeType.split("/")[1].replace("jpeg", "jpg");
    const total = contentLength ? parseInt(contentLength, 10) : null;

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
          toastId = startDownloadToast(`${filename}.${extension}`);
        } else {
          updateDownloadProgress(toastId, `${filename}.${extension}`, progress);
        }
      }
    }

    const blob = new Blob(chunks, { type: mimeType });
    const downloadUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = filename + "." + extension;
    a.click();

    window.URL.revokeObjectURL(downloadUrl);

    function upload(blob, filename) {
      const form = new FormData();
      form.append("image", blob, filename);

      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "POST",
          url: "https://image-upload-worker.11037.workers.dev/upload",

          headers: {
            Authorization: "Bearer YOUR_UPLOAD_SECRET",
          },

          // send multipart form directly
          data: form,

          onload: (res) => {
            resolve(JSON.parse(res.responseText));
          },

          onerror: reject,
        });
      });
    }
    const result = await upload(blob);
    console.log(result);

    completeDownload(toastId, `${filename}.${extension}`);
  } catch (error) {
    if (toastId !== null) {
      toast.update(toastId, {
        render: "Download failed",
        type: "error",
        pauseOnFocusLoss: false,
        autoClose: 3000,
        hideProgressBar: true,
        progress: undefined,
      });
    } else {
      toast.error("Download failed", {
        pauseOnFocusLoss: false,
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  }
}

async function executeWithDelay(tasks, delay) {
  for (const task of tasks) {
    await task();
    // Wait for the specified delay before the next iteration
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}

function handleDownload(autoEngage) {
  const doc = unsafeWindow.document;
  const hoveredVideo = doc.querySelector(
    "[data-testid=tweetPhoto]:hover:has([data-testid=videoPlayer])",
  );

  // Only execute the like/retweet behavior if autoEngage is true
  if (autoEngage) {
    const likebutton = document.querySelector(
      `article:hover button[data-testid="like"]`,
    );
    const retweetbutton = document.querySelector(
      `article:hover button[data-testid="retweet"]`,
    );

    if (likebutton && retweetbutton) {
      executeWithDelay(
        [
          () => likebutton.click(),
          () => retweetbutton.click(),
          () =>
            document
              .querySelector(
                "[data-testid=Dropdown] [data-testid=retweetConfirm]",
              )
              ?.click(),
        ],
        200,
      );
    }
  }

  if (hoveredVideo) {
    const vidProps = getReactProps(hoveredVideo);
    const props = vidProps?.children?.props;
    if (!props) return;
    const {
      source: { downloadLink, variants },
      authorScreenName,
      tweetId,
    } = props;
    let bestVariant = {
      bitrate: -11037,
      src: "",
      url: "",
      type: "",
    };
    if (variants) {
      for (const v2 of variants) {
        try {
          if (v2.bitrate > bestVariant.bitrate) {
            bestVariant = v2;
          }
        } catch (e2) {
          console.error("Access denied on variant:", v2);
          throw e2;
        }
      }
    }
    const vidUrl = downloadLink || bestVariant?.url || bestVariant?.src;
    if (vidUrl) {
      downloadFile(vidUrl, `${authorScreenName} ${tweetId}`);
    }
  } else {
    const hoveredImg = doc.querySelector("img:hover");
    const hoveredLink = doc.querySelector("a:hover");
    if (!hoveredImg) return;
    const picUrl = hoveredImg.src;
    const newUrl =
      picUrl.split("?")[0] +
      (picUrl.includes("format=png")
        ? "?format=png&name=4096x4096"
        : "?format=jpg&name=4096x4096");
    const href = hoveredLink?.href || window.location.href;
    navigator.clipboard.writeText(href);
    const [, , , screenname, , snowflake, , index] = href.split("/");
    downloadFile(newUrl, `${screenname} ${snowflake} ${index}`);
  }
}

export function App() {
  // Load initial state from local storage, default to true if it doesn't exist yet
  const [autoEngage, setAutoEngage] = useState(() => {
    const saved = localStorage.getItem("twit_auto_engage");
    return saved !== null ? JSON.parse(saved) : true;
  });

  // Save to local storage whenever the state changes
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
      {/* Corner Switch UI */}
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
