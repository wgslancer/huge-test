import { navList } from 'src/common/constants/constants';
import AppBar from 'src/components/common/AppBar';
import NavListDesktop from 'src/pages/Homepage/components/NavList/NavListDesktop';
import NavListMobile from 'src/pages/Homepage/components/NavList/NavListMobile';
import { useRef } from 'react';
import useAppearAnimation from 'src/hooks/useAppearAnimation/useAppearAnimation';

const NavBar = () => {
  const appBarRef = useRef(null);
  useAppearAnimation(appBarRef);
  return (
    <AppBar ref={appBarRef} className="flex justify-center opacity-0">
      <div className="container h-full grid grid-cols-12 items-center p-4 md:p-0">
        <img className="col-span-5" src="images/logo.svg" alt="logo" />
        <div className="col-span-7 justify-self-end md:justify-self-start">
          <div className="flex md:first:">
            <NavListDesktop navList={navList} />
            <div className="mr-4 lg:mr-0">
              <img src="icons/search.svg" alt="search-icon" />
            </div>
            <NavListMobile navList={navList} />
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default NavBar;
