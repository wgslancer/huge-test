import { useTranslation } from 'react-i18next';
import { NavType } from 'src/common/types/types';
import ChangeLanguage from 'src/components/common/ChangeLanguage';
import HoverUnderlineNav from 'src/components/common/Nav/HoverUnderlineNav/HoverUnderlineNav';

interface NavListMobileProps {
  navList: NavType[];
}

const NavListMobile = ({ navList }: NavListMobileProps) => {
  const { t } = useTranslation();

  return (
    <div className="group relative lg:hidden">
      <div className="animate-appear bg-white p-2 group-hover:flex hidden absolute top-4 right-0 flex-col w-28">
        {navList.map((nav) => (
          <HoverUnderlineNav
            className="my-2 break-normal"
            href="https://www.google.com"
            key={nav.id}
          >
            {t(nav.key)}
          </HoverUnderlineNav>
        ))}
        <ChangeLanguage />
      </div>
      <img src="icons/dehaze.svg" alt="dehaze" />
    </div>
  );
};

export default NavListMobile;
