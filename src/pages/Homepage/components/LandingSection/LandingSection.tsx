import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import IconNav from 'src/components/common/Nav/IconNav/IconNav';
import useAppearAnimation from 'src/hooks/useAppearAnimation/useAppearAnimation';

const LandingSection = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();
  useAppearAnimation(sectionRef);
  return (
    <div ref={sectionRef} className="min-h-screen flex justify-center md:p-0">
      <div className="container flex flex-col items-center md:ml-80 mt-40 p-4">
        <article className="prose prose-h1:font-normal">
          <h1 className="text-xl md:text-4xl">
            {t('landing-section.progressive-solutions')}
          </h1>
          <h1 className="text-xl md:text-4xl">
            {t('landing-section.competitive-performance')}
          </h1>
          <h1 className="text-xl md:text-4xl">
            {t('landing-section.global-citizen')}
          </h1>
          <p className="text-grey">{t('landing-section.we-are-one')}</p>
          <div className="not-prose">
            <IconNav
              className="text-nikko-teal"
              href="https://www.google.com/"
              icon={
                <img
                  className="ml-4"
                  src="icons/circle-arrow-right.svg"
                  alt="circle arrow"
                />
              }
            >
              {t('landing-section.learn-more')}
            </IconNav>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LandingSection;
