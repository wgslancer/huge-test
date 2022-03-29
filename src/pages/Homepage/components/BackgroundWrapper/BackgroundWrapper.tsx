interface BackgroundWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div
      style={{
        backgroundImage: "url('images/illustration-background.svg')",
        backgroundRepeat: 'no-repeat',
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
