import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

function Welcome({ onNext }) {
  return (
    <section className="welcome-screen">
      <div className="welcome-glow glow-one" />
      <div className="welcome-glow glow-two" />

      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="welcome-top-label">
          <Sparkles size={15} />
          <span>A LITTLE SOMETHING FOR YOU</span>
          <Sparkles size={15} />
        </div>

        <div className="welcome-layout">
          {/* Photo Placeholder: Photo baad mein add karna */}
          <motion.div
            className="welcome-photo-area"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="welcome-photo-frame">
              <div className="welcome-photo-placeholder">
                <Heart size={42} />
                <p>Ragani's Photo</p>
                <span>Her beautiful memories belong here ✨</span>
              </div>
            </div>

            <motion.div
              className="welcome-floating-heart"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Heart size={25} fill="currentColor" />
            </motion.div>

            <div className="welcome-photo-caption">
              A little moment, a little magic ✨
            </div>
          </motion.div>

          {/* Welcome Message: Birthday wish yahan nahi hogi */}
          <div className="welcome-content">
            <motion.div
              className="welcome-heart"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={30} />
            </motion.div>

            <p className="welcome-eyebrow">A SPECIAL SURPRISE</p>

            <h1>
              Hey,
              <span> Ragani! 💗</span>
            </h1>

            <p className="welcome-description">
              Someone has prepared a little surprise for you.
              A few beautiful moments and something special
              are waiting on the other side.
            </p>

            <p className="welcome-subtext">
              Ready to discover what's inside?
            </p>

            <motion.button
              className="welcome-button"
              onClick={onNext}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Enter Your Surprise
              <ArrowRight size={19} />
            </motion.button>

            <div className="welcome-footer">
              <Heart size={13} fill="currentColor" />
              <span>A little surprise, made just for you</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Welcome;

