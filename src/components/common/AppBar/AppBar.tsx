import { ForwardedRef, forwardRef } from 'react';
import { classNames } from 'src/common/utils/utils';

interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  sticky?: boolean;
}

const AppBar = forwardRef(
  (
    { children, className, sticky, ...props }: AppBarProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const stickyAppBar = sticky ? 'sticky top-0' : '';
    return (
      <div
        ref={ref}
        {...props}
        className={classNames('h-16', stickyAppBar, className)}
      >
        {children}
      </div>
    );
  }
);

export default AppBar;
