import { motion } from "framer-motion";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

function Welcome({ onNext }) {
return ( <section className="welcome-screen"> <div className="ambient-glow glow-one" /> <div className="ambient-glow glow-two" />

```
  <div className="star star-one">✦</div>
  <div className="star star-two">✧</div>
  <div className="star star-three">✦</div>
  <div className="star star-four">✧</div>

  <motion.div
    className="welcome-content"
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="top-heart"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <Heart size={19} fill="currentColor" />
    </motion.div>

    <p className="eyebrow">
      <Sparkles size={13} />
      A LITTLE SURPRISE FOR YOU
      <Sparkles size={13} />
    </p>

    <h1 className="welcome-heading">
      Hey, <span>Ragani</span>
    </h1>

    <p className="welcome-subtitle">
      Someone made something special
      <br />
      just to make you smile.
    </p>

    <motion.div
      className="envelope"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity }}
    >
      <div className="envelope-back">
        <div className="letter-paper">
          <Heart size={23} fill="currentColor" />
          <span>A little note</span>
        </div>
      </div>

      <div className="envelope-body" />
      <div className="envelope-flap" />

      <div className="envelope-seal">
        <Heart size={19} fill="currentColor" />
      </div>
    </motion.div>

    <p className="envelope-caption">
      Made with a little extra care ♡
    </p>

    <motion.button
      className="start-button"
      onClick={onNext}
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.03 }}
    >
      <span>Open Your Surprise</span>
      <ArrowRight size={18} />
    </motion.button>

    <p className="bottom-note">
      A tiny moment, just for you ✨
    </p>
  </motion.div>
</section>


);
}

export default Welcome;
