
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Heart,
  Sparkles,
  RotateCcw,
  Cake,
} from "lucide-react";

function CakeCelebration({ onBack, onRestart }) {
  const [isCut, setIsCut] = useState(false);

  const balloons = Array.from({ length: 14 }, (_, index) => ({
    id: index,
    side: index % 2 === 0 ? "left" : "right",
    delay: (index % 7) * 0.25,
    duration: 4 + (index % 4),
    x: (index % 4) * 35,
  }));

  return (
    <section className="cake-screen">
      <div className="cake-glow cake-glow-one" />
      <div className="cake-glow cake-glow-two" />

      {/* Balloons rise only from left and right sides */}
      <div className="cake-balloon-layer">
        {isCut &&
          balloons.map((balloon) => (
            <motion.div
              key={balloon.id}
              className={`cake-flying-balloon ${balloon.side}`}
              initial={{
                y: "110vh",
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                y: "-20vh",
                opacity: [0, 1, 1, 0],
                scale: [0.7, 1, 1, 0.8],
              }}
              transition={{
                duration: balloon.duration,
                delay: balloon.delay,
                ease: "easeOut",
              }}
              style={{
                left:
                  balloon.side === "left"
                    ? `${3 + (balloon.id % 4) * 5}%`
                    : "auto",
                right:
                  balloon.side === "right"
                    ? `${3 + (balloon.id % 4) * 5}%`
                    : "auto",
              }}
            >
              🎈
            </motion.div>
          ))}
      </div>

      <motion.div
        className="cake-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="cake-heading">
          <Sparkles size={20} />
          <p>THE GRAND FINALE</p>
          <Sparkles size={20} />
        </div>

        <h1 className="cake-title">
          Let's Celebrate,
          <span> Ragani! 🎂</span>
        </h1>

        <p className="cake-description">
          Make a wish and get ready for your birthday celebration.
        </p>

        {/* Cake illustration */}
        <div className={`cake-illustration ${isCut ? "cake-is-cut" : ""}`}>
          <div className="cake-candles">
            {[0, 1, 2].map((candle) => (
              <div className="cake-candle" key={candle}>
                <motion.div
                  className="cake-flame"
                  animate={{
                    scale: [1, 1.15, 0.9, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: candle * 0.15,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="cake-top">
            <div className="cake-frosting">
              <span>♥</span>
              <span>♥</span>
              <span>♥</span>
              <span>♥</span>
            </div>
          </div>

          <div className="cake-middle">
            <div className="cake-middle-decoration">
              ✦　♥　✦　♥　✦
            </div>
          </div>

          <div className="cake-bottom">
            <div className="cake-bottom-decoration">
              ♥　✦　♥　✦　♥
            </div>
          </div>

          <div className="cake-plate" />

          {/* Three vertical lines divide the cake into four sections */}
          <AnimatePresence>
            {isCut && (
              <motion.div
                className="cake-vertical-slices"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="cake-vertical-cut cut-one" />
                <span className="cake-vertical-cut cut-two" />
                <span className="cake-vertical-cut cut-three" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isCut ? (
          <>
            <motion.button
              className="cake-cut-button"
              onClick={() => setIsCut(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
          </>
        ) : (
          <motion.div
            className="cake-final-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart
                size={30}
                fill="currentColor"
                className="cake-final-heart"
              />
            </motion.div>

            <h2>Happy Birthday, Ragani! ❤️</h2>

            <p>
              May your days be filled with happiness, your heart with
              beautiful memories, and your future with endless possibilities.
            </p>

            <p className="cake-final-wish">
              Keep smiling and keep shining! ✨
            </p>

            <div className="cake-final-actions">
              <button
                className="cake-back-button"
                onClick={() => setIsCut(false)}
              >
                <ArrowLeft size={16} />
                Again
              </button>

              {/* Start Again appears only on the last page */}
              <button
                className="cake-restart-button"
                onClick={onRestart}
              >
                <RotateCcw size={16} />
                Start Again
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default CakeCelebration;

