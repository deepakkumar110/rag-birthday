import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Gift,
  Heart,
  Sparkles,
  RotateCcw,
} from "lucide-react";

function SecretSurprise({ onBack, onRestart }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="secret-screen">
      <motion.div
        className="secret-card"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow secret-eyebrow">
          <Sparkles size={14} />
          MADE WITH A LITTLE EXTRA CARE
          <Sparkles size={14} />
        </p>

        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              className="secret-closed"
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
            >
              <motion.div
                className="secret-gift"
                animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="gift-glow"></div>

                <div className="gift-box">
                  <div className="gift-lid"></div>
                  <div className="gift-ribbon-vertical"></div>
                  <div className="gift-ribbon-horizontal"></div>
                  <div className="gift-bow">🎀</div>
                </div>

                <span className="gift-sparkle sparkle-a">✦</span>
                <span className="gift-sparkle sparkle-b">✧</span>
                <span className="gift-sparkle sparkle-c">♡</span>
              </motion.div>

              <h1 className="secret-title">
                A little gift, <span>just for you.</span>
              </h1>

              <p className="secret-description">
                Every birthday deserves one last little surprise.
                Ready to open yours?
              </p>

              <button
                className="start-button secret-open-button"
                onClick={() => setIsOpened(true)}
              >
                <Gift size={18} />
                <span>Open Your Surprise</span>
                <Sparkles size={16} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="secret-revealed"
              key="revealed"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="secret-heart-icon"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={34} fill="currentColor" />
              </motion.div>

              <p className="eyebrow">A WISH FROM THE HEART</p>

              <h1 className="secret-title">
                Happy Birthday, <span>Ragani!</span>
              </h1>

              <div className="secret-divider">
                <span>✦</span>
              </div>

              <p className="secret-final-message">
                I hope this little surprise brought a smile to your face.
                May your days be filled with happiness, your dreams find
                their way to reality, and your year bring you countless
                beautiful moments.
              </p>

              <p className="secret-final-wish">
                Keep smiling and keep shining. You deserve a wonderful year! ✨
              </p>

              <div className="secret-hearts">
                ♡ &nbsp; ✨ &nbsp; ♡ &nbsp; ✨ &nbsp; ♡
              </div>

              <p className="secret-signature">
                Made especially for your birthday <span>♡</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="secret-actions">
          <button className="letter-back-button" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button className="secret-restart-button" onClick={onRestart}>
            <RotateCcw size={15} />
            <span>Start Again</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default SecretSurprise;