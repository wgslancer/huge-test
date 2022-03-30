import BackgroundWrapper from 'src/pages/Homepage/components/BackgroundWrapper';
import LandingSection from 'src/pages/Homepage/components/Section/LandingSection';
import NavBar from 'src/pages/Homepage/components/NavBar';
import IntroduceSection from 'src/pages/Homepage/components/Section/IntroduceSection';

const HomepageRoute = () => {
  return (
    <div>
      <NavBar />
      <BackgroundWrapper>
        <LandingSection />
        <IntroduceSection />
      </BackgroundWrapper>
    </div>
  );
};

export default HomepageRoute;
