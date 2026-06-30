import React, { useEffect, useState } from "react";

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
      val = Math.min(val + Math.random() * 15 + 5, 100);
      setProgress(val);
      if (val >= 100) clearInterval(id);
    }, 150);
    return () => clearInterval(id);
  }, [show]);

  return (
    <div className="relative">
      {/* Main content */}
      <div className={show ? "opacity-0 scale-95 blur-sm pointer-events-none h-screen overflow-hidden" : ""}>
        {children}
      </div>

      {/* Splash overlay */}
      {show && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] text-green-500 font-mono flex flex-col p-6 sm:p-12 overflow-hidden selection:bg-green-500/30"
        >
          {/* Terminal content */}
          <div className="max-w-3xl mx-auto w-full flex flex-col justify-center h-full relative z-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-4xl font-bold mb-2 tracking-tight flex items-center gap-3">
                <span className="text-red-500">[FATAL_EXCEPTION]</span> System Boot
              </h1>
              <p className="text-green-400/80 text-sm sm:text-base">
                kernel_panic: connection forcibly opened by host &lt;{host}&gt;
              </p>
            </div>

            <div className="space-y-2 text-sm sm:text-base mb-8 opacity-80">
              <p>{">"} INITIALIZING HANDSHAKE...</p>
              <p>{">"} BYPASSING FIREWALL... <span className="text-blue-400">[OK]</span></p>
              <p>{">"} RESOLVING DNS FOR {host}... <span className="text-blue-400">[OK]</span></p>
              <p>{">"} INJECTING PORTFOLIO DATA... <span className="text-blue-400">[OK]</span></p>
              <p className="text-yellow-500 animate-pulse">{">"} {errorCode}</p>
            </div>

            {/* Glitched Progress bar */}
            <div className="w-full max-w-md mb-8">
              <div className="flex justify-between text-xs mb-2 opacity-60">
                <span>MOUNTING FILESYSTEM</span>
                <span>{Math.floor(progress)}%</span>
              </div>
              <div className="w-full h-1 bg-green-900/30 overflow-hidden">
                <div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-green-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
              </div>
            </div>

            {/* Start button / override */}
            <div>
              <button
                onClick={() => setShow(false)}
                className="group relative inline-flex items-center justify-center border border-green-500/50 bg-green-500/10 hover:bg-green-500/20 px-6 py-2 text-green-400 text-sm uppercase tracking-widest transition-all duration-300"
              >
                <span className="animate-pulse mr-2 group-hover:hidden">_</span>
                <span className="hidden group-hover:inline mr-2">{">"}</span>
                Execute_Override
              </button>
            </div>
          </div>
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.5) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FakeErrorSplash;
