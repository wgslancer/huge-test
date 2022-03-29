/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from 'gsap';
import { useEffect } from 'react';

gsap.registerEffect({
  name: 'appear',
  effect(targets: any) {
    return gsap.fromTo(
      targets,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  },
});

const useAppearAnimation = (target: React.MutableRefObject<any>) => {
  useEffect(() => {
    if (gsap.effects.appear) {
      gsap.effects.appear(target.current);
    }
  }, [target]);
};

export default useAppearAnimation;
