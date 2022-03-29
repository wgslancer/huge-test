import { classNames } from 'src/common/utils/utils';
import Nav, { NavProps } from 'src/components/common/Nav/Nav';

interface HoverUnderlineNavProps extends NavProps {}

const HoverUnderlineNav = ({ className, ...props }: HoverUnderlineNavProps) => {
  return (
    <Nav
      {...props}
      className={classNames('hover:underline underline-offset-4', className)}
    />
  );
};

export default HoverUnderlineNav;
