import { useTranslation } from 'react-i18next';
import { navList } from 'src/common/constants/constants';
import AppBar from 'src/components/common/AppBar';
import ChangeLanguage from 'src/components/common/ChangeLanguage';
import Nav from 'src/components/common/Nav';

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <AppBar className="flex justify-center">
      <div className="container h-full flex items-center justify-between">
        <img src="images/logo.svg" alt="" />
        <div className="flex">
          <div>
            {navList.map((nav) => (
              <Nav href="https://www.google.com" className="mx-4" key={nav.id}>
                {t(nav.key)}
              </Nav>
            ))}
          </div>
          <div className="mx-4">
            <ChangeLanguage />
          </div>
          <div>
            <img src="icons/search.svg" alt="search-icon" />
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
