/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useBackgroundAnimation = (target: React.MutableRefObject<any>) => {
  useEffect(() => {
    gsap.from(target.current, {
      duration: 0.3,
      backgroundPositionX: 0,
      backgroundPositionY: '-50%',
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: '.App',
        start: 'top top',
        end: 'bottom 30%',
        toggleActions: 'restart complete reverse reset',
      },
    });
  }, [target]);
};

export default useBackgroundAnimation;
