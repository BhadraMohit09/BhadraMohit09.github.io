import React, { useEffect, useState } from "react";

// 🔹 SadFileIcon (fake broken file icon, styled like Chrome's error page)
const SadFileIcon = () => (
  <svg
    width="64"
    height="64"
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
);

const FakeErrorSplash = ({
  children,
  delay = 0, // if > 0, auto hides splash after delay (ms)
  domain, // defaults to current host
  showTopBar = true, // fake browser top bar
  errorCode = "SUCC_CONNECTION_OPENED", // fake error code
}) => {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0); // fake loading progress

  const host =
    domain ||
    (typeof window !== "undefined"
      ? window.location.host
      : "yourdomain.vercel.app");

  // 🔹 Auto-hide with delay (if provided)
  useEffect(() => {
    if (delay > 0) {
      const t = setTimeout(() => setShow(false), delay);
      return () => clearTimeout(t);
    }
  }, [delay]);

  // 🔹 Fake progress bar effect
  useEffect(() => {
    if (!show) return;
    let val = 0;
    const id = setInterval(() => {
      val = Math.min(val + Math.random() * 20, 100);
      setProgress(Math.floor(val));
      if (val >= 100) clearInterval(id);
    }, 500);
    return () => clearInterval(id);
  }, [show]);

  return (
    <div className="relative">
      {/* Main app (hidden until splash ends) */}
      <div
        className={`transition-opacity duration-500 ${
          show ? "opacity-0 pointer-events-none" : "opacity-100"
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
          {/* Fake top bar like a browser */}
          {showTopBar && (
            <div className="h-12 border-b border-gray-200 flex items-center px-4 gap-3 bg-gray-50">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-full max-w-2xl border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-500 truncate">
                  https://{host}/
                </div>
              </div>
            </div>
          )}

          {/* Body */}
          <div className="flex-1 flex items-center justify-center px-6">
            <div className="max-w-3xl w-full">
              <div className="flex items-start gap-6">
                <SadFileIcon />

                <div>
                  <h1 className="text-2xl md:text-[28px] leading-snug">
                    This site{" "}
                    <span className="font-semibold">actually can</span> be
                    reached
                  </h1>

                  <p className="mt-2 text-gray-600">
                    <span className="font-mono">{host}</span> unexpectedly{" "}
                    <span className="font-semibold">opened</span> the
                    connection.
                  </p>

                  {/* Fake suggestions */}
                  <div className="mt-6">
                    <p className="text-gray-500">Try:</p>
                    <ul className="mt-2 space-y-2">
                      <li className="text-gray-400">
                        • Checking the connection
                      </li>
                      <li className="text-blue-600">
                        • Checking the proxy and the firewall
                      </li>
                      <li className="text-blue-600">
                        • Running Windows Network Diagnostics
                      </li>
                      <li className="text-gray-400">• Restarting your router</li>
                    </ul>
                  </div>

                  {/* Error code */}
                  <p className="mt-6 text-gray-400 font-semibold tracking-wide">
                    {errorCode}
                  </p>

                  {/* Fake progress bar */}
                  <div className="mt-4 w-full h-2 bg-gray-200 rounded overflow-hidden">
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-blue-600 transition-all duration-300"
                    />
                  </div>

                  {/* Start button */}
                  <button
                    onClick={() => setShow(false)}
                    className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium shadow-sm transition hover:bg-blue-700"
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fake footer (like browser) */}
          <div className="border-t border-gray-200 p-3 text-xs text-gray-500 text-center">
            © 2025 {host} · Fake Splash Error Simulation
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeErrorSplash;
