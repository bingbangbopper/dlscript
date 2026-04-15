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

function handleDownload() {
  const doc = unsafeWindow.document;
  const hoveredVideo = doc.querySelector(
    "[data-testid=tweetPhoto]:hover:has([data-testid=videoPlayer])",
  );
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
  useHotkeys("shift+d", (event) => {
    event.preventDefault();
    handleDownload();
  });
  return (
    <>
      <ToastContainer position="top-center" />
    </>
  );
}
