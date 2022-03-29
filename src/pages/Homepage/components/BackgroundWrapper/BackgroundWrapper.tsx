interface BackgroundWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="bg-[position:-10%_-25%] md:bg-[position:-50%_-50%] bg-background-illustration bg-no-repeat bg-[length:50%_50%] md:bg-[length:75%_75%]">
      {children}
    </div>
  );
};

export default BackgroundWrapper;
