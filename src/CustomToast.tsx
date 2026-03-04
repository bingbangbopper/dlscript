import { ToastContainer, ToastContentProps, toast, Id } from 'react-toastify';
import {
  Download,
  CheckCircle2,
  X
} from 'lucide-react';

// ─── Shared Data Type ────────────────────────────────────────────────

type DownloadData = {
  filename: string;
  /** 0–100 */
  progress: number;
};

// ─── Styles ──────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '8px',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  iconWrapper: {
    flexShrink: 0,
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.10)',
    display: 'grid',
    placeItems: 'center',
  },
  iconDownload: {
    width: '18px',
    height: '18px',
    color: '#60a5fa', // blue-400
  },
  iconCheck: {
    width: '18px',
    height: '18px',
    color: '#34d399', // emerald-400
  },
  textGroup: {
    minWidth: 0,
    flex: 1,
    paddingRight: '4px',
  },
  filename: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#ffffff',
    margin: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  subtitle: {
    fontSize: '12px',
    color: '#a1a1aa', // zinc-400
    margin: '4px 0 0 0',
  },
  closeButton: {
    padding: '4px',
    borderRadius: '4px',
    color: '#71717a', // zinc-500
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.15s ease',
    marginTop: '2px',
  },
  progressTrack: {
    width: '100%',
    height: '3px',
    background: 'rgba(255, 255, 255, 0.10)',
    borderRadius: '9999px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(to right, #3b82f6, #22d3ee)', // blue-500 → cyan-400
    borderRadius: '9999px',
    transition: 'width 0.3s ease-out',
  },
  dismissButton: {
    alignSelf: 'flex-end',
    fontSize: '11px',
    fontWeight: 500,
    padding: '4px 8px',
    borderRadius: '6px',
    background: 'rgba(255, 255, 255, 0.05)',
    color: '#a1a1aa', // zinc-400
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    lineHeight: 1,
    marginTop: '2px',
  },
};

// ─── Helper: truncate middle of long filenames ───────────────────────

function truncateMiddle(name: string, max = 32) {
  if (name.length <= max) return name;
  const ext =
    name.lastIndexOf('.') !== -1 ? name.slice(name.lastIndexOf('.')) : '';
  const stem = name.slice(0, name.length - ext.length);
  const keep = max - ext.length - 3;
  return (
    stem.slice(0, Math.ceil(keep / 2)) +
    '…' +
    stem.slice(-Math.floor(keep / 2)) +
    ext
  );
}

// ─── Component ───────────────────────────────────────────────────────

export function DownloadDark({
  closeToast,
  data,
}: ToastContentProps<DownloadData>) {
  const done = data.progress >= 100;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.iconWrapper}>
          {done ? (
            <CheckCircle2 style={styles.iconCheck} />
          ) : (
            <Download
              style={{
                ...styles.iconDownload,
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            />
          )}
        </div>

        <div style={styles.textGroup}>
          <p style={styles.filename}>{truncateMiddle(data.filename)}</p>
          <p style={styles.subtitle}>
            {done ? 'Saved to Downloads' : `${Math.floor(data.progress)}% complete`}
          </p>
        </div>

        {!done && (
          <button
            onClick={closeToast}
            style={styles.closeButton}
            onMouseEnter={e =>
              ((e.currentTarget as HTMLButtonElement).style.color = '#d4d4d8')
            }
            onMouseLeave={e =>
              ((e.currentTarget as HTMLButtonElement).style.color = '#71717a')
            }
          >
            <X style={{ width: '16px', height: '16px' }} />
          </button>
        )}
      </div>

      {/* progress bar */}
      {!done && (
        <div style={styles.progressTrack}>
          <div
            style={{
              ...styles.progressBar,
              width: `${data.progress}%`,
            }}
          />
        </div>
      )}

      {/* compact dismiss button on complete */}
      {done && (
        <button
          onClick={closeToast}
          style={styles.dismissButton}
          onMouseEnter={e => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.color = '#e4e4e7';
            btn.style.background = 'rgba(255,255,255,0.10)';
          }}
          onMouseLeave={e => {
            const btn = e.currentTarget as HTMLButtonElement;
            btn.style.color = '#a1a1aa';
            btn.style.background = 'rgba(255,255,255,0.05)';
          }}
          onMouseDown={e =>
            ((e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.97)')
          }
          onMouseUp={e =>
            ((e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)')
          }
        >
          Dismiss
        </button>
      )}
    </div>
  );
}

// ─── Usage Example ───────────────────────────────────────────────────

export function startDownloadToast(filename: string): Id {
  // 1️⃣ Create the toast
  const id = toast(DownloadDark, {
    data: { filename, progress: 0 },
    style: { background: '#18181b', color: '#ffffff' }, // zinc-900
    autoClose: false,
    closeButton: false,
    hideProgressBar: true,
  });

  return id;
}

export function updateDownloadProgress(
  id: Id,
  filename: string,
  progress: number
) {
  // 2️⃣ Update progress
  toast.update(id, {
    data: { filename, progress },
  });
}

export function completeDownload(id: Id, filename: string) {
  // 3️⃣ Mark complete, auto‑dismiss after 4s
  toast.update(id, {
    data: { filename, progress: 100 },
    autoClose: 4000,
  });
}