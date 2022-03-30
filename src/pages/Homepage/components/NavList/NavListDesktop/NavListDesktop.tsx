import { useTranslation } from 'react-i18next';
import { NavType } from 'src/common/types/types';
import ChangeLanguage from 'src/components/common/ChangeLanguage';
import HoverUnderlineNav from 'src/components/common/Nav/HoverUnderlineNav/HoverUnderlineNav';

interface NavListDesktopProps {
  navList: NavType[];
}

const NavListDesktop = ({ navList }: NavListDesktopProps) => {
  const { t } = useTranslation();
  return (
    <div className="hidden lg:flex">
      {navList.map((nav) => (
        <HoverUnderlineNav
          href="https://www.google.com"
          className="mx-2 md:mx-0 md:mr-6"
          key={nav.id}
        >
          {t(nav.key)}
        </HoverUnderlineNav>
      ))}
      <div className="mx-2 md:mx-4">
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default NavListDesktop;
