
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Gift,
  Heart,
  Sparkles,
} from "lucide-react";

const surprises = [
  {
    image: "/images/ragani1.jpg",
    title: "A Beautiful Smile ❤️",
    message:
      "May your smile always shine bright and bring happiness wherever you go.",
  },
  {
    image: "/images/ragani2.jpg",
    title: "A Special Day ✨",
    message:
      "May your birthday bring beautiful memories, endless happiness, and countless reasons to smile.",
  },
  {
    image: "/images/ragani3.jpg",
    title: "Keep Shining 🌸",
    message:
      "Never stop being yourself. Keep growing, keep smiling, and keep chasing your dreams.",
  },
  {
    image: "/images/ragani4.jpg",
    title: "A Wish From the Heart 💖",
    message:
      "May the coming year of your life be filled with peace, success, happiness, and wonderful surprises.",
  },
];

function SecretSurprise({ onBack, onNext }) {
  const [isOpened, setIsOpened] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const isLastPhoto = currentPhoto === surprises.length - 1;
  const surprise = surprises[currentPhoto];

  return (
    <section className="secret-screen">
      <div className="secret-glow secret-glow-one" />
      <div className="secret-glow secret-glow-two" />

      <motion.div
        className="secret-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {!isOpened ? (
          <div className="secret-gift-intro">
            <motion.div
              className="secret-gift-icon"
              animate={{
                y: [0, -12, 0],
                rotate: [0, -4, 4, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Gift size={76} strokeWidth={1.4} />
            </motion.div>

            <Sparkles className="secret-sparkle" size={28} />

            <p className="secret-eyebrow">
              SOMETHING SPECIAL FOR YOU
            </p>

            <h1>
              A Little Surprise,
              <span> Ragani 💗</span>
            </h1>

            <p className="secret-description">
              A few little wishes and beautiful surprises are waiting just for you.
            </p>

            <motion.button
              className="secret-button"
              onClick={() => setIsOpened(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Gift size={19} />
              Open Your Surprise
            </motion.button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              className="secret-photo-content"
              key={currentPhoto}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              transition={{ duration: 0.45 }}
            >
              <div className="secret-photo-heading">
                <Heart size={18} fill="currentColor" />
                <span>A LITTLE WISH FOR YOU</span>
                <Heart size={18} fill="currentColor" />
              </div>

              <div className="secret-photo-frame">
                <img
                  src={surprise.image}
                  alt={`Ragani memory ${currentPhoto + 1}`}
                  className="secret-photo"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />

                <div
                  className="secret-photo-placeholder"
                  style={{ display: "none" }}
                >
                  <Heart size={42} />
                  <p>Add Ragani's Photo</p>
                  <small>
                    public/images/ragani{currentPhoto + 1}.jpg
                  </small>
                </div>
              </div>

              <p className="secret-photo-count">
                MEMORY {currentPhoto + 1} OF {surprises.length}
              </p>

              <h2>{surprise.title}</h2>

              <p className="secret-photo-message">
                {surprise.message}
              </p>

              <div className="secret-progress">
                {surprises.map((_, index) => (
                  <span
                    key={index}
                    className={
                      index === currentPhoto
                        ? "secret-progress-dot active"
                        : "secret-progress-dot"
                    }
                  />
                ))}
              </div>

              {!isLastPhoto ? (
                <motion.button
                  className="secret-button"
                  onClick={() =>
                    setCurrentPhoto((previous) => previous + 1)
                  }
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Next Surprise
                  <ArrowRight size={19} />
                </motion.button>
              ) : (
                <motion.div
                  className="secret-final-wish"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Sparkles size={24} />

                  <h2>Happy Birthday, Ragani! 🎂</h2>

                  <p>
                    May your life always be filled with beautiful moments,
                    happiness, and dreams that come true. Keep smiling and
                    shining, today and always! ❤️
                  </p>

                  <motion.button
                    className="secret-button"
                    onClick={onNext}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Let's Cut the Cake
                    <ArrowRight size={19} />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Secret page par sirf Back button hai */}
        <div className="secret-bottom-actions">
          <button
            className="secret-back-button"
            onClick={onBack}
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default SecretSurprise;

