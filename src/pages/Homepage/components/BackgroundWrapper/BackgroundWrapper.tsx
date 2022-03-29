interface BackgroundWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return <div>{children}</div>;
};

export default BackgroundWrapper;
