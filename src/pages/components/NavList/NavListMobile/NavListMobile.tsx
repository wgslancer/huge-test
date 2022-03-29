import { useTranslation } from 'react-i18next';
import { NavType } from 'src/common/types/types';
import ChangeLanguage from 'src/components/common/ChangeLanguage';
import Nav from 'src/components/common/Nav';

interface NavListMobileProps {
  navList: NavType[];
}

const NavListMobile = ({ navList }: NavListMobileProps) => {
  const { t } = useTranslation();

  return (
    <div className="group relative lg:hidden">
      <div className="animate-appear group-hover:flex hidden absolute top-4 right-0 flex-col">
        {navList.map((nav) => (
          <Nav className="my-2" href="https://www.google.com" key={nav.id}>
            {t(nav.key)}
          </Nav>
        ))}
        <div className="mx-4">
          <ChangeLanguage />
        </div>
      </div>
      <img src="icons/dehaze.svg" alt="dehaze" />
    </div>
  );
};

export default NavListMobile;
