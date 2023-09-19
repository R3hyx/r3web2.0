import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useOnScrollAppear = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
          
      useEffect(() => {
        if(inView){
          animation.start({
            opacity: 1, 
            scale: 1,

            transition: { 
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01] 
            }
        })
        }
        if(!inView){
          animation.start({
            opacity: 0, 
            scale: 0.5,
        })
        }
      }, [inView] );

      return { ref, animation }
}

export default useOnScrollAppear;


// const { ref:ref3, animation:animation3 } = useOnScrollAppear()

// <div ref={ref3} className="">

// <motion.div
//   animate={animation3}
// >
//    <R3Button textButton={textButton}/>
// </motion.div>
// </div>