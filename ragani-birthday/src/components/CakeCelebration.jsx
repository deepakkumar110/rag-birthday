
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Sparkles,
  RotateCcw,
  Cake,
} from "lucide-react";

import "./CakeCelebration.css";

const PIECES = [
  { x: -85, y: -42, rotate: -12 },
  { x: 85, y: -42, rotate: 12 },
  { x: -85, y: 42, rotate: 12 },
  { x: 85, y: 42, rotate: -12 },
];

const BALLOONS = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  side: index % 2 === 0 ? "left" : "right",
  left: 5 + ((index * 17) % 85),
  delay: (index % 6) * 0.7,
  duration: 5 + (index % 4),
  emoji: index % 3 === 0 ? "💗" : "🎈",
}));

function CakeCelebration({ onBack, onRestart }) {
  const [stage, setStage] = useState("ready");
  const timers = useRef([]);

  const clearTimers = () => {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current = [];
  };

  useEffect(() => {
    return () => {
      timers.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const schedule = (callback, delay) => {
    const timer = setTimeout(callback, delay);
    timers.current.push(timer);
  };

  const handleCutCake = () => {
    if (stage !== "ready") return;

    clearTimers();

    // 1. Candles begin to extinguish.
    setStage("blowing");

    // 2. Cutting lines appear.
    schedule(() => {
      setStage("cutting");
    }, 1400);

    // 3. Four quarters separate.
    schedule(() => {
      setStage("separating");
    }, 2600);

    // 4. Cake pieces come back together.
    schedule(() => {
      setStage("rejoining");
    }, 4200);

    // 5. Cake is whole again, but candles remain off.
    schedule(() => {
      setStage("finished");
    }, 5600);
  };

  const resetCake = () => {
    clearTimers();

    // Return to the whole cake with candles lit again.
    setStage("ready");
  };

  const restartWebsite = () => {
    clearTimers();
    onRestart();
  };

  const isSeparated = stage === "separating";
  const isFinished = stage === "finished";
  const candlesAreOff = stage !== "ready";

  return (
    <section className="cake-screen">
      <div className="cake-glow cake-glow-one" />
      <div className="cake-glow cake-glow-two" />

      {/* Balloons float around the cake, outside the message card. */}
      <div className="cake-balloon-layer" aria-hidden="true">
        {BALLOONS.map((balloon) => (
          <motion.div
            key={balloon.id}
            className={`cake-flying-balloon cake-balloon-${balloon.side}`}
            initial={{
              y: "110vh",
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              y: ["110vh", "-15vh"],
              x: [0, 12, -10, 8, 0],
              rotate: [-8, 7, -5, 8, 0],
              opacity: [0, 0.85, 0.85, 0],
              scale: [0.7, 1, 1, 0.85],
            }}
            transition={{
              duration: balloon.duration,
              delay: balloon.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${balloon.left}%`,
            }}
          >
            {balloon.emoji}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cake-card"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="cake-content">
          <div className="cake-heading">
            <Sparkles size={20} />
            <p>THE GRAND FINALE</p>
            <Sparkles size={20} />
          </div>

          <h1 className="cake-title">
            Let's Celebrate,
            <span>Ragani! 🎂</span>
          </h1>

          <p className="cake-description">
            Make a wish and get ready for your birthday celebration.
          </p>

          {/* Cake animation */}
          <div className="cake-illustration">
            {/* Candles disappear when the blowing animation finishes. */}
            <AnimatePresence>
              {!candlesAreOff && (
                <motion.div
                  className="cake-candles"
                  initial={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    y: -12,
                    transition: { duration: 1.1 },
                  }}
                >
                  {[0, 1, 2].map((candle) => (
                    <div className="cake-candle" key={candle}>
                      <motion.div
                        className="cake-flame"
                        animate={{
                          scale: [1, 1.15, 0.85, 1],
                          opacity: [1, 0.8, 1],
                        }}
                        transition={{
                          duration: 0.65,
                          repeat: Infinity,
                          delay: candle * 0.15,
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Plate remains under the cake. */}
            <div className="cake-plate" />

            {/* Four clipped quarters form one complete cake. */}
            <div className="cake-pieces">
              {PIECES.map((piece, index) => (
                <motion.div
                  key={index}
                  className={`cake-piece cake-piece-${index + 1}`}
                  animate={
                    isSeparated
                      ? {
                          x: piece.x,
                          y: piece.y,
                          rotate: piece.rotate,
                          scale: 0.96,
                        }
                      : {
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: isSeparated ? 1.05 : 1.2,
                    delay: isSeparated ? index * 0.08 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="cake-piece-top">
                    <div className="cake-piece-hearts">
                      <span>♥</span>
                      <span>♥</span>
                    </div>
                  </div>

                  <div className="cake-piece-middle">
                    <span>✦ ♥ ✦</span>
                  </div>

                  <div className="cake-piece-bottom">
                    <span>♥ ✦ ♥</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cutting lines disappear when pieces start rejoining. */}
            <AnimatePresence>
              {stage === "cutting" && (
                <motion.div
                  className="cake-cutting-lines"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.span
                    className="cake-cut-line cake-cut-line-vertical"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5 }}
                  />

                  <motion.span
                    className="cake-cut-line cake-cut-line-horizontal"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Celebration sparkles appear after separation. */}
            <AnimatePresence>
              {(isSeparated || stage === "rejoining" || isFinished) && (
                <motion.div
                  className="cake-cut-sparkles"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 0.9],
                    scale: [0.5, 1.15, 1],
                  }}
                  transition={{ duration: 1.1 }}
                >
                  ✨ 💗 ✨ 🌸
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main action buttons */}
          {stage === "ready" && (
            <div className="cake-actions">
              <motion.button
                className="cake-cut-button"
                onClick={handleCutCake}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Cake size={20} />
                Cut the Cake
                <Heart size={18} fill="currentColor" />
              </motion.button>

              <button
                className="cake-return-button"
                onClick={onBack}
              >
                <ArrowLeft size={16} />
                Back to Surprise
              </button>
            </div>
          )}

          {/* Animation status */}
          {stage !== "ready" && !isFinished && (
            <motion.p
              key={stage}
              className="cake-cutting-status"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {stage === "blowing" && "Make a wish... 🕯️"}
              {stage === "cutting" && "Cutting the cake... 🎂"}
              {stage === "separating" && "Surprise! 💗"}
              {stage === "rejoining" && "A little birthday magic... ✨"}
            </motion.p>
          )}

          {/* Final message appears after the cake has rejoined. */}
          <AnimatePresence>
            {isFinished && (
              <motion.div
                className="cake-final-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <motion.div
                  className="cake-final-heart-wrap"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <Heart
                    size={32}
                    fill="currentColor"
                    className="cake-final-heart"
                  />
                </motion.div>

                <h2>Happy Birthday, Ragani! ❤️</h2>

                <p>
                  May your days be filled with happiness, your heart
                  with beautiful memories, and your future with endless
                  possibilities.
                </p>

                <p className="cake-final-wish">
                  Keep smiling and keep shining! ✨
                </p>

                <div className="cake-final-actions">
                  <button
                    className="cake-back-button"
                    onClick={resetCake}
                  >
                    <ArrowLeft size={16} />
                    Again
                  </button>

                  <button
                    className="cake-restart-button"
                    onClick={restartWebsite}
                  >
                    <RotateCcw size={16} />
                    Start Again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default CakeCelebration;

