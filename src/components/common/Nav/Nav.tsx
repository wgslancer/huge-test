interface NavProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Nav = ({ children, ...props }: NavProps) => {
  return <a {...props}>{children}</a>;
};

export default Nav;
