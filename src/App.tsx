import { useEffect } from "react";
import BasicsC from "./components/Basics";
import { motion, useAnimate, stagger } from "framer-motion";

const App = () => {
  const [ref, animate]= useAnimate();

  useEffect(()=> {
    animate(ref.current, { opacity: 1, marginTop: "10px" })
    return () => {
      animate(ref.current, { opacity: 0, marginTop: "0px" })
    }
  },[])
  return (
    <div>
      <BasicsC>
        <motion.h1
          variants={{
            hidden: { opacity: 0, marginTop: "0px" },
            visible: { opacity: 1, marginTop: "10px" },
          }}
          initial={{ opacity: 0, marginTop: "0px" }}
          animate="visible"
          exit={{ opacity: 0, marginTop: "0px" }}
          transition={{ duration: 2, type: "spring" }}
        >
          This is Basics
        </motion.h1>

        {/* Staggering motion on lists or with multiple elements */}
        <motion.ul ref={ref} variants={{
          visible: { transition: { staggerChildren: 0.5 } },
        }}
          initial="hidden"
          animate="visible"
        >
          {[1, 2, 3].map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, color: "red" },
                visible: { opacity: 1, color: "red" },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione!
            </motion.li>
          ))}
        </motion.ul>

      </BasicsC>
    </div>
  );
};

export default App;
