import { motion, AnimatePresence } from 'framer-motion';

interface ScoreDisplayProps {
  score: number;
}

export const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  return (
    <div className="text-center bangers-regular text-blue-600 mt-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={score}
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{
            duration: 0.3,
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          className="text-5xl"
        >
          {score}
        </motion.div>
      </AnimatePresence>
      <div className="text-xl">SCORE</div>
    </div>
  );
};
