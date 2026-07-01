import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Terminal, Sparkles, X, ShieldAlert, PartyPopper, Gamepad2, Quote, RefreshCw, Code2, Cpu, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

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
      <div className="relative z-10 flex justify-between items-center bg-slate-900/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-green-500/30 w-full">
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
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Canvas dimensions and grid sizing
    const gridSize = 15;
    const tileCountX = canvas.width / gridSize;
    const tileCountY = canvas.height / gridSize;

    let velocityX = 0;
    let velocityY = 0;
    let snake = [
      { x: 10, y: 10 },
    ];
    let food = { x: 5, y: 5 };
    let currentScore = 0;
    let gameLoop;
    let isGameOver = false;

    const spawnFood = () => {
      food = {
        x: Math.floor(Math.random() * tileCountX),
        y: Math.floor(Math.random() * tileCountY)
      };
    };

    const handleKeyDown = (e) => {
      if (['ArrowUp', 'w', 'W'].includes(e.key) && velocityY !== 1) { velocityX = 0; velocityY = -1; }
      else if (['ArrowDown', 's', 'S'].includes(e.key) && velocityY !== -1) { velocityX = 0; velocityY = 1; }
      else if (['ArrowLeft', 'a', 'A'].includes(e.key) && velocityX !== 1) { velocityX = -1; velocityY = 0; }
      else if (['ArrowRight', 'd', 'D'].includes(e.key) && velocityX !== -1) { velocityX = 1; velocityY = 0; }
    };

    window.addEventListener('keydown', handleKeyDown);

    const update = () => {
      if (isGameOver) return;

      let nextX = snake[0].x + velocityX;
      let nextY = snake[0].y + velocityY;

      // Wrap around walls
      if (nextX < 0) nextX = tileCountX - 1;
      if (nextX >= tileCountX) nextX = 0;
      if (nextY < 0) nextY = tileCountY - 1;
      if (nextY >= tileCountY) nextY = 0;

      // Check collision with self
      for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === nextX && snake[i].y === nextY && (velocityX !== 0 || velocityY !== 0)) {
          isGameOver = true;
          setGameOver(true);
          return;
        }
      }

      snake.unshift({ x: nextX, y: nextY });

      // Check food collision
      if (nextX === food.x && nextY === food.y) {
        currentScore += 10;
        setScore(currentScore);
        spawnFood();
      } else {
        snake.pop(); // Remove tail if not eating
      }

      draw();
    };

    const draw = () => {
      // Clear background
      ctx.fillStyle = '#0f172a'; // slate-900
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)'; // purple-500/10
      for (let i = 0; i <= canvas.width; i += gridSize) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); ctx.stroke();
      }
      for (let i = 0; i <= canvas.height; i += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); ctx.stroke();
      }

      // Draw food
      ctx.fillStyle = '#4ade80'; // green-400
      ctx.beginPath();
      ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, 2 * Math.PI);
      ctx.fill();

      // Draw snake
      snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? '#c084fc' : '#9333ea'; // head and body colors
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
      });
    };

    spawnFood();
    draw(); // Initial draw
    
    // Set default direction if not moving
    setTimeout(() => {
      if (velocityX === 0 && velocityY === 0) {
        velocityX = 1; velocityY = 0;
      }
    }, 1000);

    gameLoop = setInterval(update, 100);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameOver]); // Restart game effect based on gameOver flag if handled properly, but we'll manage via button

  const restartGame = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-slate-950 border border-purple-500/50 p-6 rounded-3xl max-w-md w-full shadow-2xl flex flex-col items-center relative">
        <div className="w-full flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-purple-400 font-bold">
            <Gamepad2 className="w-5 h-5 animate-bounce" /> Cyber Snake
          </div>
          <span className="text-green-400 font-mono font-bold text-lg border border-green-500/30 px-3 py-1 rounded-lg bg-green-500/10">Score: {score}</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-2 bg-white/5 rounded-full hover:bg-red-500/20 transition-colors"><X className="w-5 h-5" /></button>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.3)] border-2 border-purple-500/50 bg-slate-900">
          <canvas ref={canvasRef} width={300} height={300} className="block" />
          
          {gameOver && (
            <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center backdrop-blur-sm z-10 animate-fadeIn">
              <p className="text-red-400 font-bold text-2xl mb-2 tracking-widest uppercase">Game Over</p>
              <p className="text-white mb-6 text-sm opacity-80">Final Score: {score}</p>
              <button
                onClick={restartGame}
                className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-purple-500/50 flex items-center gap-2 uppercase tracking-wide"
              >
                <RefreshCw className="w-4 h-4" /> Play Again
              </button>
            </div>
          )}
        </div>

        <p className="text-gray-400 text-xs mt-6 flex items-center gap-2 font-mono">
          <span className="bg-white/10 px-2 py-1 rounded">W</span>
          <span className="bg-white/10 px-2 py-1 rounded">A</span>
          <span className="bg-white/10 px-2 py-1 rounded">S</span>
          <span className="bg-white/10 px-2 py-1 rounded">D</span>
          <span>to move</span>
        </p>
      </div>
    </div>
  );
};

/* ─── Main Easter Eggs Hub ─── */
const EasterEggs = () => {
  const [typedBuffer, setTypedBuffer] = useState('');
  const [showMatrix, setShowMatrix] = useState(false);
  const [showSnake, setShowSnake] = useState(false);
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
  const terminalEndRef = useRef(null);

  // Auto-scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const triggerToast = (msg, IconComponent = Sparkles) => {
    setToastMessage(msg);
    setToastIcon(<IconComponent className="w-5 h-5 text-amber-300 animate-spin" />);
    setTimeout(() => {
      setToastMessage(null);
      setToastIcon(null);
    }, 4500);
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#a855f7', '#3b82f6', '#10b981']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#a855f7', '#3b82f6', '#10b981']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
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
            triggerConfetti();
            triggerToast('Secret Code Unlocked: Welcome to Mohit\'s Cyber Lab!', PartyPopper);
            return '';
          }
          if (next.endsWith('party')) {
            setPartyMode(true);
            triggerConfetti();
            triggerToast('Party Mode Activated!', PartyPopper);
            setTimeout(() => setPartyMode(false), 8000);
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
        newLogs.push({ type: 'res', text: 'Available secret commands:\n  matrix   - Launch Matrix digital rain overlay\n  snake    - Play playable Cyber Snake game\n  party    - Trigger 8s disco party glow\n  confetti - Launch celebratory confetti burst\n  hack     - Run mainframe penetration simulation\n  flip     - Do a 360-degree barrel roll\n  quote    - Output tech inspirational quote\n  skills   - List Mohit\'s core tech stack\n  resume   - Navigate to career timeline page\n  hire     - Navigate to contact page\n  clear    - Clear terminal screen' });
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
        triggerConfetti();
        setTimeout(() => setPartyMode(false), 8000);
        newLogs.push({ type: 'res', text: '[Party] Disco mode initiated!' });
        break;
      case 'confetti':
        triggerConfetti();
        newLogs.push({ type: 'res', text: '[Celebration] Confetti fired!' });
        break;
      case 'hack':
        newLogs.push({ type: 'sys', text: 'Bypassing firewalls... [██████████] 100%' });
        newLogs.push({ type: 'sys', text: 'Extracting data packets... SUCCESS' });
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
          '"Simplicity is the soul of efficiency." – Austin Freeman',
          '"Before software can be reusable it first has to be usable." – Ralph Johnson'
        ];
        newLogs.push({ type: 'res', text: `[Quote] ${quotes[Math.floor(Math.random() * quotes.length)]}` });
        triggerToast('Insight acquired!', Quote);
        break;
      case 'skills':
        newLogs.push({ type: 'sys', text: 'Fetching skill parameters...' });
        newLogs.push({ type: 'res', text: '✓ ReactJS & Next.js\n✓ Node.js & Express\n✓ .NET Core & C#\n✓ Python & ML\n✓ MongoDB & SQL\n✓ AWS & Docker' });
        break;
      case 'resume':
        newLogs.push({ type: 'sys', text: 'Redirecting to timeline protocol...' });
        setTimeout(() => {
          navigate('/resume');
          setIsTerminalOpen(false);
        }, 800);
        break;
      case 'hire':
      case 'contact':
        newLogs.push({ type: 'sys', text: 'Establishing secure communication channel...' });
        setTimeout(() => {
          navigate('/contact');
          setIsTerminalOpen(false);
        }, 800);
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

      {/* Party Mode Global Flash */}
      {partyMode && (
        <div className="fixed inset-0 z-[110] pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/40 via-blue-500/40 to-green-500/40 animate-pulse transition-opacity duration-200" />
          <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/30 via-red-500/30 to-purple-500/30 animate-pulse delay-75 transition-opacity duration-200" />
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-[120] bg-slate-900 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] text-white font-bold px-6 py-4 rounded-2xl flex items-center gap-4 animate-fadeIn transition-all">
          <div className="bg-slate-800 p-2 rounded-full border border-purple-500/30">
            {toastIcon || <Sparkles className="w-5 h-5 text-amber-300" />}
          </div>
          <span className="font-mono text-sm tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* Floating Secret Terminal Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="group relative flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800 border border-purple-500/30 px-5 py-3 rounded-full shadow-lg shadow-purple-500/20 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-purple-400"
          title="Secret Terminal Console"
        >
          <Terminal className="w-5 h-5 animate-pulse text-green-400" />
          <span className="text-xs font-mono font-bold tracking-wider text-gray-300 group-hover:text-white uppercase hidden md:block">
            Sys_Terminal
          </span>
        </button>
      </div>

      {/* Terminal Modal */}
      {isTerminalOpen && (
        <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#0c0c0c] border border-gray-700/50 w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col h-[600px] ring-1 ring-white/10">
            
            {/* Terminal Header */}
            <div className="bg-[#1e1e1e] px-4 py-3 flex justify-between items-center select-none border-b border-gray-800">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <button onClick={() => setIsTerminalOpen(false)} className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-black/20 px-3 py-1 rounded border border-white/5">
                  <Terminal className="w-3 h-3" /> mohit-bhadra — bash — 80x24
                </div>
              </div>
              <button
                onClick={() => setIsTerminalOpen(false)}
                className="text-gray-500 hover:text-white p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions Bar */}
            <div className="bg-[#181818] px-4 py-2.5 border-b border-gray-800 flex flex-wrap gap-2.5 items-center shadow-inner">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                <Cpu className="w-3 h-3 text-purple-500" /> Exec:
              </span>
              {[
                { label: 'Matrix', cmd: 'matrix', icon: <Code2 className="w-3.5 h-3.5" /> },
                { label: 'Snake', cmd: 'snake', icon: <Gamepad2 className="w-3.5 h-3.5" /> },
                { label: 'Hack', cmd: 'hack', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
                { label: 'Flip', cmd: 'flip', icon: <RefreshCw className="w-3.5 h-3.5" /> },
                { label: 'Party', cmd: 'party', icon: <PartyPopper className="w-3.5 h-3.5" /> },
                { label: 'Quote', cmd: 'quote', icon: <Quote className="w-3.5 h-3.5" /> },
              ].map(btn => (
                <button
                  key={btn.cmd}
                  onClick={() => runCommand(btn.cmd)}
                  className="flex items-center gap-1.5 bg-[#252526] hover:bg-purple-600/20 text-gray-300 hover:text-purple-300 border border-gray-700/50 hover:border-purple-500/50 px-3 py-1.5 rounded text-xs font-mono transition-all"
                >
                  {btn.icon}
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Logs Body */}
            <div className="flex-1 p-5 font-mono text-[13px] leading-relaxed overflow-y-auto bg-[#0c0c0c] text-gray-300 scroll-smooth">
              <div className="space-y-3 pb-4">
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="flex gap-3">
                    {log.type === 'user' && <span className="text-purple-400 shrink-0">➜</span>}
                    {log.type === 'sys' && <span className="text-blue-400 shrink-0">~</span>}
                    {log.type === 'res' && <span className="text-green-400 shrink-0">✓</span>}
                    {log.type === 'err' && <span className="text-red-400 shrink-0">✗</span>}
                    <div className={`whitespace-pre-wrap ${
                      log.type === 'user' ? 'text-gray-100' : 
                      log.type === 'err' ? 'text-red-400' : 
                      log.type === 'res' ? 'text-green-300' : 
                      'text-blue-300'
                    }`}>
                      {log.text}
                    </div>
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={handleTerminalSubmit} className="bg-[#1e1e1e] p-4 flex items-center gap-3 border-t border-gray-800 shadow-[0_-10px_20px_rgba(0,0,0,0.2)]">
              <span className="text-green-400 font-mono font-bold text-sm">mohit@portfolio:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help' to see all commands..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder-gray-600 focus:ring-0"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white px-4 py-2 rounded-md text-xs font-mono font-bold transition-all border border-gray-700"
              >
                Enter
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default EasterEggs;
