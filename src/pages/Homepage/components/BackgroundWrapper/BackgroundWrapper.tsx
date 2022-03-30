import { useRef } from 'react';
import useBackgroundAnimation from 'src/hooks/useBackgroundAnimation/useBackgroundAnimation';

interface BackgroundWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  const backgroundRef = useRef(null);

  useBackgroundAnimation(backgroundRef);
  return (
    <div
      ref={backgroundRef}
      className="bg-[position:0%_0%] md:bg-[position:-100%_100%] bg-no-repeat bg-[length:50%_50%] md:bg-[length:75%_75%] flex flex-col items-center bg-fixed"
      style={{ backgroundImage: "url('images/illustration-background.svg')" }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
