import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";

function SpecialMessage({ onNext, onBack }) {
  return (
    <section className="letter-screen">
      <motion.div
        className="letter-card special-card"
        initial={{ opacity: 0, y: 25, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="letter-top-icon special-heart">
          <Heart size={25} fill="currentColor" />
        </div>

        <p className="eyebrow">
          <Sparkles size={14} />
          A LITTLE MESSAGE FOR YOU
          <Sparkles size={14} />
        </p>

        <h1 className="letter-title">
          You deserve <span>happiness.</span>
        </h1>

        <div className="letter-divider">
          <span>♡</span>
        </div>

        <div className="letter-message special-message">
          <p>
            Ragani, I hope you always find reasons to smile,
            even on the simplest days.
          </p>

          <p>
            May you keep growing, achieving your dreams, and
            creating beautiful memories with the people who
            make you happy.
          </p>

          <p>
            Never stop being yourself. The world needs more
            kindness, laughter, and genuine smiles.
          </p>
        </div>

        <div className="special-wish">
          <Sparkles size={17} />
          <span>May this year bring you beautiful surprises.</span>
          <Sparkles size={17} />
        </div>

        <p className="letter-signature">
          Keep smiling, Ragani <span>♡</span>
        </p>

        <div className="letter-actions">
          <button className="letter-back-button" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>

          <button className="start-button letter-next-button" onClick={onNext}>
            <span>One Last Surprise</span>
            <ArrowRight size={17} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default SpecialMessage;