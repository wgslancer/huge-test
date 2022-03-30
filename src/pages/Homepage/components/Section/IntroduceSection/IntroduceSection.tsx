import { useTranslation } from 'react-i18next';
import IconNav from 'src/components/common/Nav/IconNav/IconNav';

const IntroduceSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center bg-nikko-teal">
      <div className="container grid xs:grid-rows-4 md:grid-cols-12">
        <img
          className="xs:row-span-2 md:col-span-5 py-8 md:py-0 place-self-center"
          src="images/illustration-introduce.svg"
          alt="illustration-introduce"
        />
        <article className="xs:row-span-2 md:col-span-7 prose prose-h1:text-white prose-h1:font-normal text-white p-8 md:px-0">
          <p>{t('introduce-section.team-of-unique-combination')}</p>
          <h1>{t('introduce-section.global-intelligence')}</h1>
          <p>{t('introduce-section.main-content')}</p>
          <div className="not-prose">
            <IconNav
              className=""
              href="https://www.google.com/"
              icon={
                <img
                  className="ml-4"
                  src="icons/circle-arrow-right-white.svg"
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

export default IntroduceSection;
