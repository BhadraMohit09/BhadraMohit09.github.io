import React, { useEffect, useState, memo } from "react";

// Memoized SadFileIcon
const SadFileIcon = memo(() => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    aria-hidden="true"
    className="shrink-0"
  >
    <g fill="none" stroke="#6b7280" strokeWidth="2">
      <path d="M30 2H14a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10z" />
      <path d="M30 2v10h10" />
      <circle cx="19" cy="22" r="1.5" fill="#6b7280" stroke="none" />
      <circle cx="29" cy="22" r="1.5" fill="#6b7280" stroke="none" />
      <path d="M18 31c2.2-2 9.8-2 12 0" strokeLinecap="round" />
    </g>
  </svg>
));

// TopBar
const TopBar = ({ host }) => (
  <div className="h-10 border-b border-gray-200 flex items-center px-3 gap-2 bg-gray-50">
    <div className="flex gap-2">
      <span className="h-3 w-3 rounded-full bg-red-500" />
      <span className="h-3 w-3 rounded-full bg-yellow-500" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
    </div>
    <div className="flex-1 flex justify-center">
      <div className="w-full max-w-md border border-gray-300 rounded-md px-2 py-0.5 text-xs text-gray-500 truncate">
        https://{host}/
      </div>
    </div>
  </div>
);

// Footer
const Footer = ({ host }) => (
  <div className="border-t border-gray-200 p-2 text-xs text-gray-500 text-center">
    © 2025 MBTech
  </div>
);

const FakeErrorSplash = ({
  children,
  delay = 0,
  domain,
  showTopBar = true,
  errorCode = "SUCC_CONNECTION_OPENED",
}) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const host =
    domain || (typeof window !== "undefined" ? window.location.host : "yourdomain.vercel.app");

  // Lock scroll and prevent jump
  useEffect(() => {
    if (show) {
      setScrollY(window.scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY); // restore scroll
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [show, scrollY]);

  // Auto-hide splash after delay
  useEffect(() => {
    if (delay > 0) {
      const t = setTimeout(() => setShow(false), delay);
      return () => clearTimeout(t);
    }
  }, [delay]);

  // Smooth progress bar
  useEffect(() => {
    if (!show) return;
    let val = 0;
    const id = setInterval(() => {
      val = Math.min(val + Math.random() * 10 + 5, 100);
      setProgress(val);
      if (val >= 100) clearInterval(id);
    }, 200);
    return () => clearInterval(id);
  }, [show]);

  return (
    <div className="relative">
      {/* Main content */}
      <div
        className={`transition-all duration-500 ${
          show ? "opacity-0 scale-95 blur-sm pointer-events-none" : "opacity-100 scale-100 blur-0"
        }`}
      >
        {children}
      </div>

      {/* Splash overlay */}
      {show && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 z-[9999] bg-white text-gray-800 flex flex-col"
        >
          {showTopBar && <TopBar host={host} />}

          {/* Body */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full flex flex-col md:flex-row items-start gap-4">
              <SadFileIcon />

              <div>
                <h1 className="text-base font-medium leading-snug">
                  This site <span className="font-semibold">actually can</span> be reached
                </h1>

                <p className="mt-1 text-gray-600 text-sm">
                  <span className="font-mono">{host}</span> unexpectedly{" "}
                  <span className="font-semibold">opened</span> the connection.
                </p>

                {/* Suggestions */}
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">Try:</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    <li className="text-gray-400">• Checking the connection</li>
                    <li className="text-blue-600">• Checking the proxy and the firewall</li>
                    <li className="text-blue-600">• Running Windows Network Diagnostics</li>
                    <li className="text-gray-400">• Restarting your router</li>
                  </ul>
                </div>

                {/* Error code */}
                <p className="mt-4 text-gray-400 font-semibold text-xs tracking-wide">{errorCode}</p>

                {/* Progress bar */}
                <div className="mt-2 w-full h-2 bg-gray-200 rounded overflow-hidden">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-blue-600 transition-all duration-300"
                  />
                </div>

                {/* Start button */}
                <button
                  onClick={() => setShow(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white text-sm font-medium shadow-sm transition hover:bg-blue-700"
                >
                  Start
                </button>
              </div>
            </div>
          </div>

          <Footer host={host} />
        </div>
      )}
    </div>
  );
};

export default FakeErrorSplash;
