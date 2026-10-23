import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";

function BirthdayLetter({ onNext, onBack }) {
return ( <section className="letter-screen">
<motion.div
className="letter-card"
initial={{ opacity: 0, y: 30, scale: 0.96 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
transition={{ duration: 0.7 }}
> <div className="letter-top-icon"> <Heart size={25} fill="currentColor" /> </div>

```
    <p className="eyebrow">
      <Sparkles size={13} />
      A LETTER FOR YOU
      <Sparkles size={13} />
    </p>

    <h1 className="letter-title">
      Dear <span>Ragani,</span>
    </h1>

    <div className="letter-divider">
      <span>♡</span>
    </div>

    <div className="letter-message">
      <p>
        Some days are a little more special than others, and today is
        one of them.
      </p>

      <p>
        I hope your birthday brings you genuine smiles, peaceful moments,
        lovely surprises, and memories that make you happy whenever you
        think about them.
      </p>

      <p>
        Keep being yourself, keep chasing the things that make you happy,
        and never forget how much a little kindness and a smile can mean.
      </p>
    </div>

    <p className="letter-signature">
      Wishing you the happiest birthday <span>♡</span>
    </p>

    <div className="letter-actions">
      <button className="letter-back-button" onClick={onBack}>
        <ArrowLeft size={16} />
        <span>Back</span>
      </button>

      <button className="start-button letter-next-button" onClick={onNext}>
        <span>Next Surprise</span>
        <ArrowRight size={17} />
      </button>
    </div>
  </motion.div>
</section>


);
}

export default BirthdayLetter;
