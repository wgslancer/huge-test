import { navList } from 'src/common/constants/constants';
import AppBar from 'src/components/common/AppBar';
import NavListDesktop from 'src/pages/components/NavList/NavListDesktop';
import NavListMobile from 'src/pages/components/NavList/NavListMobile';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const NavBar = () => {
  const appBarRef = useRef(null);
  useEffect(() => {
    gsap.to(appBarRef.current, {
      opacity: 1,
    });
  }, []);
  return (
    <AppBar ref={appBarRef} className="flex justify-center opacity-0">
      <div className="container h-full flex items-center justify-between mx-4 lg:mx-0">
        <img src="images/logo.svg" alt="" />
        <div>
          <div className="flex">
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
