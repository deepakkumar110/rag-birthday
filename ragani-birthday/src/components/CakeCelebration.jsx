import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

function CakeCelebration({ onNext, onBack }) {
  const [wishMade, setWishMade] = useState(false);

  return (
    <section className="cake-screen">
      <motion.div
        className="cake-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow cake-eyebrow">
          <Sparkles size={14} />
          A LITTLE BIRTHDAY MAGIC
          <Sparkles size={14} />
        </p>

        <h1 className="cake-title">
          Make a <span>Wish!</span>
        </h1>

        <p className="cake-description">
          Close your eyes, make a wish, and let the magic begin.
        </p>

        <div className={`cake-illustration ${wishMade ? "cake-celebrated" : ""}`}>
          <div className="cake-glow"></div>

          <div className="cake-candles">
            <div className="candle">
              {!wishMade && <span className="flame"></span>}
              <span className="candle-stick"></span>
            </div>

            <div className="candle candle-middle">
              {!wishMade && <span className="flame"></span>}
              <span className="candle-stick"></span>
            </div>

            <div className="candle">
              {!wishMade && <span className="flame"></span>}
              <span className="candle-stick"></span>
            </div>
          </div>

          <div className="cake-top">
            <span className="cake-sprinkle sprinkle-one"></span>
            <span className="cake-sprinkle sprinkle-two"></span>
            <span className="cake-sprinkle sprinkle-three"></span>
            <span className="cake-sprinkle sprinkle-four"></span>
          </div>

          <div className="cake-middle">
            <span className="cake-cream cream-one"></span>
            <span className="cake-cream cream-two"></span>
            <span className="cake-cream cream-three"></span>
          </div>

          <div className="cake-bottom">
            <span className="cake-berry berry-one">♥</span>
            <span className="cake-berry berry-two">♥</span>
            <span className="cake-berry berry-three">♥</span>
          </div>

          <div className="cake-plate"></div>
        </div>

        <AnimatePresence mode="wait">
          {wishMade ? (
            <motion.div
              className="wish-message"
              key="wish"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <h2>Wish sent to the universe! ✨</h2>
              <p>May your special day bring you a thousand reasons to smile.</p>
            </motion.div>
          ) : (
            <motion.p
              className="wish-hint"
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Ready? Tap the button below!
            </motion.p>
          )}
        </AnimatePresence>

        <div className="cake-actions">
          <button className="letter-back-button" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          {!wishMade ? (
            <button
              className="start-button wish-button"
              onClick={() => setWishMade(true)}
            >
              <span>Make a Wish</span>
              <Sparkles size={17} />
            </button>
          ) : (
            <button className="start-button wish-button" onClick={onNext}>
              <span>Next Surprise</span>
              <ArrowRight size={17} />
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default CakeCelebration;