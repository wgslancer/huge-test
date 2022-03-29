import { classNames } from 'src/common/utils/utils';
import Nav, { NavProps } from 'src/components/common/Nav/Nav';

interface IconNavProps extends NavProps {
  icon: React.ReactChild;
}

const IconNav = ({ children, icon, className, ...props }: IconNavProps) => {
  return (
    <Nav {...props} className={classNames(className, 'flex items-center')}>
      {children}
      {icon}
    </Nav>
  );
};

export default IconNav;
