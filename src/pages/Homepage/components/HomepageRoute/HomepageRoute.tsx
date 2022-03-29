import BackgroundWrapper from 'src/pages/Homepage/components/BackgroundWrapper';
import LandingSection from 'src/pages/Homepage/components/LandingSection';
import NavBar from 'src/pages/Homepage/components/NavBar';

const HomepageRoute = () => {
  return (
    <div>
      <NavBar />
      <BackgroundWrapper>
        <LandingSection />
      </BackgroundWrapper>
    </div>
  );
};

export default HomepageRoute;
