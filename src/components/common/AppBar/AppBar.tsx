import { classNames } from 'src/common/utils/utils';

interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  sticky?: boolean;
}

const AppBar = ({ children, className, sticky, ...props }: AppBarProps) => {
  const stickyAppBar = sticky ? 'sticky top-0' : '';
  return (
    <div {...props} className={classNames('h-16', stickyAppBar, className)}>
      {children}
    </div>
  );
};

export default AppBar;
