import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Sparkles, X, ShieldAlert, PartyPopper, Gamepad2, Quote, RefreshCw, Code2, Cpu, CheckCircle } from 'lucide-react';

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
        <div className="flex items-center gap-3 text-green-400 font-mono text-sm md:text-base font-bold">
          <span className="w-3 h-3 rounded-full bg-green-400 animate-ping" />
          <span>MATRIX MODE ACTIVATED: Digital Rain Protocol [MOHIT_OS v3.2]</span>
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

/* ─── Retro Cyber Snake Game Component ─── */
const SnakeGame = ({ onClose }) => {
  const [snake, setSnake] = useState([[10, 10], [10, 11]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState('UP');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (['ArrowUp', 'w', 'W'].includes(e.key) && direction !== 'DOWN') setDirection('UP');
      if (['ArrowDown', 's', 'S'].includes(e.key) && direction !== 'UP') setDirection('DOWN');
      if (['ArrowLeft', 'a', 'A'].includes(e.key) && direction !== 'RIGHT') setDirection('LEFT');
      if (['ArrowRight', 'd', 'D'].includes(e.key) && direction !== 'LEFT') setDirection('RIGHT');
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = [...prev[0]];
        if (direction === 'UP') head[1] -= 1;
        if (direction === 'DOWN') head[1] += 1;
        if (direction === 'LEFT') head[0] -= 1;
        if (direction === 'RIGHT') head[0] += 1;

        if (head[0] < 0 || head[0] >= 20 || head[1] < 0 || head[1] >= 20 || prev.some(seg => seg[0] === head[0] && seg[1] === head[1])) {
          setGameOver(true);
          return prev;
        }

        const newSnake = [head, ...prev];
        if (head[0] === food[0] && head[1] === food[1]) {
          setScore(s => s + 10);
          setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [direction, food, gameOver]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-950 border border-purple-500/50 p-6 rounded-3xl max-w-md w-full shadow-2xl flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-purple-400 font-bold">
            <Gamepad2 className="w-5 h-5 animate-bounce" /> Cyber Snake
          </div>
          <span className="text-green-400 font-mono font-bold">Score: {score}</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
        </div>

        <div className="w-[300px] h-[300px] bg-slate-900 border-2 border-purple-500/30 relative grid grid-cols-20 grid-rows-20 rounded-xl overflow-hidden shadow-inner">
          {Array.from({ length: 400 }).map((_, i) => {
            const x = i % 20;
            const y = Math.floor(i / 20);
            const isSnake = snake.some(s => s[0] === x && s[1] === y);
            const isHead = snake[0][0] === x && snake[0][1] === y;
            const isFood = food[0] === x && food[1] === y;
            return (
              <div
                key={i}
                className={`w-full h-full ${
                  isHead ? 'bg-purple-400 rounded-sm' : isSnake ? 'bg-purple-600/80' : isFood ? 'bg-green-400 rounded-full animate-ping' : ''
                }`}
              />
            );
          })}
        </div>

        {gameOver && (
          <div className="mt-4 text-center">
            <p className="text-red-400 font-bold mb-2">Game Over! Final Score: {score}</p>
            <button
              onClick={() => { setSnake([[10, 10], [10, 11]]); setScore(0); setGameOver(false); }}
              className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1.5 rounded-xl text-sm font-bold transition-all"
            >
              Play Again
            </button>
          </div>
        )}
        <p className="text-gray-500 text-xs mt-4">Use Arrow keys or W/A/S/D to move</p>
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
  const [showSnake, setShowSnake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [partyMode, setPartyMode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [toastIcon, setToastIcon] = useState(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: '[System] Welcome to Mohit Developer Terminal v3.2.0' },
    { type: 'sys', text: 'Type "help" or click quick action buttons below to explore hidden Easter Eggs!' },
  ]);

  const navigate = useNavigate();

  const triggerToast = (msg, IconComponent = Sparkles) => {
    setToastMessage(msg);
    setToastIcon(<IconComponent className="w-5 h-5 text-amber-300 animate-spin" />);
    setTimeout(() => {
      setToastMessage(null);
      setToastIcon(null);
    }, 4500);
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
            triggerToast('Matrix Easter Egg Unlocked!', Code2);
            return '';
          }
          if (next.endsWith('snake')) {
            setShowSnake(true);
            triggerToast('Retro Snake Game Unlocked!', Gamepad2);
            return '';
          }
          if (next.endsWith('mohit') || next.endsWith('easter')) {
            setShowConfetti(true);
            triggerToast('Secret Code Unlocked: Welcome to Mohit\'s Cyber Lab!', PartyPopper);
            return '';
          }
          if (next.endsWith('party')) {
            setPartyMode(true);
            setShowConfetti(true);
            triggerToast('Party Mode Activated!', PartyPopper);
            setTimeout(() => setPartyMode(false), 5000);
            return '';
          }
          if (next.endsWith('flip')) {
            setIsFlipped(true);
            triggerToast('Do a barrel roll!', RefreshCw);
            setTimeout(() => setIsFlipped(false), 1500);
            return '';
          }
          return next;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const runCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { type: 'user', text: `> ${cmd}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({ type: 'res', text: 'Available secret commands:\n  matrix   - Launch Matrix digital rain overlay\n  snake    - Play playable Cyber Snake game\n  party    - Trigger 5s disco party glow\n  confetti - Launch celebratory confetti burst\n  hack     - Run mainframe penetration simulation\n  flip     - Do a 360-degree barrel roll\n  quote    - Output tech inspirational quote\n  skills   - List Mohit\'s core tech stack\n  resume   - Navigate to career timeline page\n  hire     - Navigate to contact page\n  clear    - Clear terminal screen' });
        break;
      case 'matrix':
        setShowMatrix(true);
        newLogs.push({ type: 'res', text: 'Launching Matrix rain protocol...' });
        setIsTerminalOpen(false);
        break;
      case 'snake':
        setShowSnake(true);
        newLogs.push({ type: 'res', text: 'Loading Cyber Snake...' });
        setIsTerminalOpen(false);
        break;
      case 'party':
        setPartyMode(true);
        setShowConfetti(true);
        setTimeout(() => setPartyMode(false), 5000);
        newLogs.push({ type: 'res', text: '[Party] Disco mode initiated!' });
        break;
      case 'confetti':
        setShowConfetti(true);
        newLogs.push({ type: 'res', text: '[Celebration] Confetti fired!' });
        break;
      case 'hack':
        newLogs.push({ type: 'sys', text: 'Bypassing firewalls... [██████████] 100%' });
        newLogs.push({ type: 'res', text: '[ACCESS GRANTED] Mohit Bhadra is the optimal hire for your engineering team!' });
        break;
      case 'flip':
      case 'barrelroll':
        setIsFlipped(true);
        setTimeout(() => setIsFlipped(false), 1500);
        newLogs.push({ type: 'res', text: '[Rotation] Barrel roll initiated!' });
        break;
      case 'quote':
        const quotes = [
          '"First, solve the problem. Then, write the code." – John Johnson',
          '"Code is like humor. When you have to explain it, it’s bad." – Cory House',
          '"Simplicity is the soul of efficiency." – Austin Freeman'
        ];
        newLogs.push({ type: 'res', text: `[Quote] ${quotes[Math.floor(Math.random() * quotes.length)]}` });
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

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    runCommand(terminalInput);
  };

  return (
    <div className={isFlipped ? 'animate-barrel-roll' : ''}>
      {/* Active Overlays */}
      {showMatrix && <MatrixRain onClose={() => setShowMatrix(false)} />}
      {showSnake && <SnakeGame onClose={() => setShowSnake(false)} />}
      {showConfetti && <ConfettiExplosion onClose={() => setShowConfetti(false)} />}

      {/* Party Mode Global Flash */}
      {partyMode && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-pulse mix-blend-overlay" />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce border border-white/20">
          {toastIcon || <Sparkles className="w-5 h-5 text-amber-300" />}
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Secret Terminal Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="group relative flex items-center gap-2 bg-slate-900/90 hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500/30 px-4 py-2.5 rounded-full shadow-lg shadow-purple-500/20 backdrop-blur-md transition-all duration-300 hover:scale-105"
          title="Secret Terminal Console"
        >
          <Terminal className="w-4 h-4 animate-pulse text-green-400 group-hover:text-white" />
          <span className="text-xs font-bold tracking-wider uppercase">Secret Easter Eggs</span>
        </button>
      </div>

      {/* Terminal Modal */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-slate-950 border border-purple-500/40 w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
            
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

            {/* Quick Actions Bar */}
            <div className="bg-slate-900/60 px-4 py-2 border-b border-white/5 flex flex-wrap gap-2 items-center">
              <span className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-purple-400" /> Quick Hacks:
              </span>
              {[
                { label: 'Matrix', cmd: 'matrix', icon: <Code2 className="w-3 h-3" /> },
                { label: 'Snake', cmd: 'snake', icon: <Gamepad2 className="w-3 h-3" /> },
                { label: 'Hack', cmd: 'hack', icon: <ShieldAlert className="w-3 h-3" /> },
                { label: 'Flip', cmd: 'flip', icon: <RefreshCw className="w-3 h-3" /> },
                { label: 'Party', cmd: 'party', icon: <PartyPopper className="w-3 h-3" /> },
                { label: 'Quote', cmd: 'quote', icon: <Quote className="w-3 h-3" /> },
              ].map(btn => (
                <button
                  key={btn.cmd}
                  onClick={() => runCommand(btn.cmd)}
                  className="flex items-center gap-1.5 bg-purple-950/60 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 px-2.5 py-1 rounded-lg text-xs font-bold transition-all"
                >
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
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
                placeholder="Type 'help', 'snake', 'hack', 'matrix', 'flip'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder-gray-500"
                autoFocus
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1.5 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                Run
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default EasterEggs;
