import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useOnScrollAnimation = () => {
    const { ref, inView } = useInView({
        threshold: 0.2
      });
      const animation = useAnimation();
    
      useEffect(() => {
        if(inView){
          animation.start({
            x: 0,
            transition: { 
              type: 'spring',
              duration: 1, 
              delay: 0.1,
              bounce: 0.3 
            }
        })
        }
        if(!inView){
          animation.start({
            x: '-100vw',
        })
        }
      }, [inView] );

      return { ref, animation }
}

export default useOnScrollAnimation;