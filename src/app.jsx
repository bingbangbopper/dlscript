import { ToastContainer, toast } from "react-toastify";
import { useHotkeys } from "react-hotkeys-hook";
import { getReactProps, findInReactFiberTree } from "./helpers";

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
        const progress = received / total;

        if (toastId === null) {
          toastId = toast(`Downloading ${filename}.${extension}...`, {
            progress,
            pauseOnFocusLoss: false,
            autoClose: false,
            closeOnClick: false,
            draggable: false,
          });
        } else {
          toast.update(toastId, {
            progress,
          });
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

    toast.done(toastId);
    toast.update(toastId, {
      render: `${filename}.${extension} downloaded successfully`,
      pauseOnFocusLoss: false,
      type: "success",
      autoClose: 3000,
      hideProgressBar: true,
      progress: undefined,
    });
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
  const dialogModal = doc.querySelector(
    '[aria-labelledby="modal-header"][role="dialog"]',
  );
  const carouselModal = doc.querySelector(
    '[aria-labelledby="modal-header"] [aria-roledescription="carousel"]',
  );
  const currentItem =
    carouselModal?.__reactProps$v555v9s7vi?.children[0].props.children[0].props
      .currentItem;

  if (hoveredVideo) {
    const vidProps = getReactProps(hoveredVideo);
    const props = vidProps?.children?.props;
    if (!props) return;

    const {
      source: { downloadLink, variants },
      authorScreenName,
      tweetId,
    } = props;

    // Find the highest bitrate video variant
    const bestVariant = variants
      ?.filter((v) => v.bitrate)
      .reduce((max, v) => (v.bitrate > max.bitrate ? v : max));

    const vidUrl = downloadLink || bestVariant?.url;

    if (vidUrl) {
      downloadFile(vidUrl, `${authorScreenName} ${tweetId}`);
    }
  } else if (carouselModal) {
    const props = getReactProps(carouselModal);
    const { currentItem, children } = props.children[0].props.children[0].props;
    const mediaDetail = children[currentItem].props.mediaDetail;
    if (!mediaDetail) return;

    const { expanded_url, media_url_https } = mediaDetail;
    const match = expanded_url?.match(
      /([^\/]+)\/status\/([^\/]+)\/photo\/([^\/]+)/,
    );

    if (match) {
      const [, screenname, snowflake, index] = match;
      downloadFile(media_url_https, `${screenname} ${snowflake} ${index}`);
    }
  } else if (dialogModal) {
    const mediaDetail = findInReactFiberTree(dialogModal, "mediaDetail");
    if (!mediaDetail) return;

    const { expanded_url, media_url_https } = mediaDetail;
    const match = expanded_url?.match(
      /([^\/]+)\/status\/([^\/]+)\/photo\/([^\/]+)/,
    );

    if (match) {
      const [, screenname, snowflake, index] = match;
      downloadFile(media_url_https, `${screenname} ${snowflake} ${index}`);
    }
  } else {
    const hoveredImg = doc.querySelector("img:hover");
    const hoveredLink = doc.querySelector("a:hover");

    if (!hoveredImg || !hoveredLink) return;

    // Get image url and upgrade resolution to 4096x4096
    const picUrl = hoveredImg.src;
    const newUrl = picUrl.replace(/(name=)[^&]*/, "$14096x4096");
    const href = hoveredLink.href;

    navigator.clipboard.writeText(href);

    // Extract details from URL (e.g., https://x.com/screenname/status/snowflake/photo/1)
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
