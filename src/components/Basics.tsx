import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Basics: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <motion.button className="border-2 border-gray-500 p-2 my-2 rounded-xl"
                onClick={() => setIsVisible(!isVisible)}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.05, type: "spring", stiffness: 500, mass: 1 }}
                whileTap={{ scale: 0.9, rotate: 0 }}
            >
                Toggle
            </motion.button>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className='w-[100px] h-[100px] rounded-xl font-extralight text-3xl bg-red-500'
                        variants={{
                            hidden: { x: 0, y: 0 },
                            visible: { x: 10, y: 10 },
                            exit: { x: 0, y: 0 }
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 2,
                            type: 'spring',
                        }}
                        exit="exit"
                    >
                    </motion.div>
                )}
                  {children}
            </AnimatePresence>
          
        </div>
    );
}

export default Basics;
