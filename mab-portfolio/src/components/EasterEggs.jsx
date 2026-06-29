import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Sparkles, X, Play, ShieldAlert, PartyPopper, CheckCircle, HelpCircle } from 'lucide-react';

/* ─── Matrix Rain Overlay Component ─── */
const MatrixRain = ({ onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01MOHITBHADRAREACTNODENETAIFULLSTACKZENNOVATECHCYBER';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 22, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff66';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 animate-fadeIn flex flex-col justify-between p-6 pointer-events-auto">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="relative z-10 flex justify-between items-center bg-slate-900/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-green-500/30">
        <div className="flex items-center gap-3 text-green-400 font-mono text-sm md:text-base">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-ping" />
          <span>MATRIX MODE ACTIVATED: Digital Rain Protocol [MOHIT_OS v3.1]</span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded-xl transition-all"
        >
          <X className="w-4 h-4" /> Exit Matrix
        </button>
      </div>
    </div>
  );
};

/* ─── Confetti Explosion Overlay Component ─── */
const ConfettiExplosion = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const particles = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 0.5}s`,
    bg: ['#a855f7', '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#ec4899'][Math.floor(Math.random() * 6)],
    size: Math.floor(Math.random() * 12) + 6,
  }));

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute -top-10 rounded-sm animate-fall"
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size * 1.5}px`,
            backgroundColor: p.bg,
            animationDuration: `${Math.random() * 2 + 2.5}s`,
            animationDelay: p.animationDelay,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(105vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

/* ─── Main Easter Eggs Hub ─── */
const EasterEggs = () => {
  const [typedBuffer, setTypedBuffer] = useState('');
  const [showMatrix, setShowMatrix] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [partyMode, setPartyMode] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: '⚡ Welcome to Mohit Developer Terminal [v1.0.4]' },
    { type: 'sys', text: 'Type "help" to see secret commands and easter egg codes.' },
  ]);

  const navigate = useNavigate();

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  /* Listen for keyboard cheat codes */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key.length === 1 && e.key.match(/[a-zA-Z]/)) {
        setTypedBuffer((prev) => {
          const next = (prev + e.key.toLowerCase()).slice(-15);
          
          if (next.endsWith('matrix')) {
            setShowMatrix(true);
            triggerToast('🟩 Matrix Easter Egg Unlocked!');
            return '';
          }
          if (next.endsWith('mohit') || next.endsWith('easter')) {
            setShowConfetti(true);
            triggerToast('🎉 Secret Code Unlocked: Welcome to Mohit\'s Cyber Lab!');
            return '';
          }
          if (next.endsWith('party')) {
            setPartyMode(true);
            setShowConfetti(true);
            triggerToast('🪩 Party Mode Activated!');
            setTimeout(() => setPartyMode(false), 5000);
            return '';
          }
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { type: 'user', text: `> ${cmd}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({ type: 'res', text: 'Available commands:\n  matrix   - Launch Matrix digital rain overlay\n  party    - Trigger 5s party disco glow\n  confetti - Launch celebratory confetti burst\n  skills   - List Mohit\'s core tech stack\n  resume   - Navigate to career timeline page\n  hire     - Navigate to contact page\n  clear    - Clear terminal screen' });
        break;
      case 'matrix':
        setShowMatrix(true);
        newLogs.push({ type: 'res', text: 'Launching Matrix rain protocol...' });
        setIsTerminalOpen(false);
        break;
      case 'party':
        setPartyMode(true);
        setShowConfetti(true);
        setTimeout(() => setPartyMode(false), 5000);
        newLogs.push({ type: 'res', text: '🪩 Party disco mode initiated!' });
        break;
      case 'confetti':
        setShowConfetti(true);
        newLogs.push({ type: 'res', text: '🎉 Confetti fired!' });
        break;
      case 'skills':
        newLogs.push({ type: 'res', text: 'Core Stack: ReactJS, Node.js, Express, .NET Core / C#, Python ML, MongoDB, Docker, AWS.' });
        break;
      case 'resume':
        navigate('/resume');
        setIsTerminalOpen(false);
        break;
      case 'hire':
      case 'contact':
        navigate('/contact');
        setIsTerminalOpen(false);
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push({ type: 'err', text: `Command not recognized: "${cmd}". Type "help" for valid commands.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <>
      {/* Active Overlays */}
      {showMatrix && <MatrixRain onClose={() => setShowMatrix(false)} />}
      {showConfetti && <ConfettiExplosion onClose={() => setShowConfetti(false)} />}

      {/* Party Mode Global Flash */}
      {partyMode && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-pulse mix-blend-overlay" />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce border border-white/20">
          <PartyPopper className="w-5 h-5 text-amber-300" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Secret Terminal Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="group relative flex items-center gap-2 bg-slate-900/90 hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500/30 px-4 py-2.5 rounded-full shadow-lg shadow-purple-500/20 backdrop-blur-md transition-all duration-300 hover:scale-105"
          title="Type 'matrix', 'mohit', or click for Secret Terminal"
        >
          <Terminal className="w-4 h-4 animate-pulse text-green-400 group-hover:text-white" />
          <span className="text-xs font-bold tracking-wider uppercase">🕹️ Secret Easter Eggs</span>
        </button>
      </div>

      {/* Terminal Modal */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-950 border border-purple-500/40 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
            
            {/* Terminal Header */}
            <div className="bg-slate-900 px-4 py-3 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-gray-300 ml-2 font-bold">mohit@portfolio: ~ (Interactive Console)</span>
              </div>
              <button
                onClick={() => setIsTerminalOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Logs Body */}
            <div className="flex-1 p-4 font-mono text-sm overflow-y-auto space-y-2 bg-slate-950/90 text-gray-300">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={`whitespace-pre-wrap ${log.type === 'user' ? 'text-purple-400 font-bold' : log.type === 'err' ? 'text-red-400' : log.type === 'res' ? 'text-green-300' : 'text-blue-300'}`}>
                  {log.text}
                </div>
              ))}
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={handleTerminalSubmit} className="border-t border-white/10 bg-slate-900 p-3 flex items-center gap-2">
              <span className="text-green-400 font-mono font-bold">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help', 'matrix', 'skills', 'resume', 'hire'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder-gray-500"
                autoFocus
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all"
              >
                Run
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default EasterEggs;
