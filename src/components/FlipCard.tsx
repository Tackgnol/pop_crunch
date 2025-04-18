import {AnimatePresence, motion} from 'framer-motion';
import {ReactNode} from 'react';

interface FlipCardProps {
    children: ReactNode;
    questionIndex: number;
}

export function FlipCard({children, questionIndex}: FlipCardProps) {

    return (
        <div className="perspective-[1000px] w-full h-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`card-${questionIndex}`}
                    initial={{rotateY: 90}}
                    animate={{rotateY: 0}}
                    exit={{rotateY: -90}}
                    transition={{duration: 0.2, ease: "easeInOut"}}
                    className="w-full h-full backface-hidden"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
