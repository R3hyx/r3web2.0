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
                duration: 2.0,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01] 
            }
        })
        }
        if(!inView){
          animation.start({
            opacity: 0, 
            scale: 0.2,
        })
        }
      }, [inView] );

      return { ref, animation }
}

export default useOnScrollAppear;