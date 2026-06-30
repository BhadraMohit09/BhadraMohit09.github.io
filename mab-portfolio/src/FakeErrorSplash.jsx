import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FakeErrorSplash = ({
  children,
  delay = 0,
  domain,
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
      window.scrollTo(0, scrollY);
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
        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${
          show ? "opacity-0 scale-95 blur-md pointer-events-none h-screen overflow-hidden" : "opacity-100 scale-100 blur-0"
        }`}
      >
        {children}
      </div>

      {/* Splash overlay */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            role="alert"
            aria-live="assertive"
            className="fixed inset-0 z-[9999] bg-white text-gray-800 flex flex-col"
          >
            {/* TopBar */}
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

            {/* Body */}
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="max-w-2xl w-full flex flex-col md:flex-row items-start gap-4">
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

                <div>
                  <h1 className="text-[22px] font-normal text-[#202124] leading-snug mb-3">
                    This site <span className="font-semibold">actually can</span> be reached
                  </h1>

                  <p className="mt-1 text-[#5f6368] text-[15px]">
                    <span className="font-semibold">{host}</span> unexpectedly{" "}
                    <span className="font-semibold">opened</span> the connection.
                  </p>

                  {/* Suggestions */}
                  <div className="mt-4">
                    <p className="text-[#5f6368] text-[15px]">Try:</p>
                    <ul className="mt-1 space-y-1 text-[15px] ml-5 list-disc text-[#5f6368]">
                      <li>Checking the connection</li>
                      <li><span className="text-[#1a73e8] hover:underline cursor-pointer">Checking the proxy and the firewall</span></li>
                      <li><span className="text-[#1a73e8] hover:underline cursor-pointer">Running Windows Network Diagnostics</span></li>
                      <li>Restarting your router</li>
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
                    className="mt-6 inline-flex items-center justify-center rounded bg-[#1a73e8] px-4 py-2 text-white text-sm font-medium transition hover:bg-[#1557b0] hover:shadow-md"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
            
            {/* Removed Footer */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FakeErrorSplash;
