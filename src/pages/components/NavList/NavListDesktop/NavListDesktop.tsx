import { useTranslation } from 'react-i18next';
import { NavType } from 'src/common/types/types';
import ChangeLanguage from 'src/components/common/ChangeLanguage';
import Nav from 'src/components/common/Nav';

interface NavListDesktopProps {
  navList: NavType[];
}

const NavListDesktop = ({ navList }: NavListDesktopProps) => {
  const { t } = useTranslation();
  return (
    <div className="hidden lg:flex">
      {navList.map((nav) => (
        <Nav href="https://www.google.com" className="mx-4" key={nav.id}>
          {t(nav.key)}
        </Nav>
      ))}
      <div className="mx-4">
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default NavListDesktop;
