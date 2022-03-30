import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { featureList } from 'src/common/constants/constants';
import { TranslateKey } from 'src/common/types/types';
import { currencyFormat, numberSeparator } from 'src/common/utils/utils';
import IconNav from 'src/components/common/Nav/IconNav/IconNav';
import useAppearAnimation from 'src/hooks/useAppearAnimation/useAppearAnimation';
import Chart from '../../Chart';

const FeatureSection = () => {
  const [title, setTitle] = useState<string>('feature-section.title');
  const contentRef = useRef(null);
  const { t } = useTranslation();
  useAppearAnimation(contentRef);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setTitle(featureList[activeIndex].titleKey);
  }, [activeIndex]);

  const handleOnChangeActiveIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-full flex justify-center py-8">
      <div className="container grid xs:grid-rows-6 justify-center md:grid-cols-12 place-self-center">
        <article className="xs:row-span-1 py-8 md:hidden md:py-0 prose prose-h1:font-normal">
          <h1>{t(title as TranslateKey)}</h1>
        </article>
        <article className="xs:row-span-1 md:col-span-5 flex md:flex-col md:justify-center md:items-center prose prose-h1:text-nikko-teal prose-h1:font-medium md:text-4xl">
          {featureList.map((feature, index) => {
            return (
              <h1
                className={`mr-4 md:mr-0 cursor-pointer hover:opacity-50 ${
                  index === activeIndex ? '' : 'opacity-30'
                }`}
                key={feature.key}
                onClick={() => handleOnChangeActiveIndex(index)}
              >
                {feature.key}
              </h1>
            );
          })}
        </article>
        <div ref={contentRef} className="xs:row-span-4 md:col-span-7">
          <h1 className="text-5xl mb-4 hidden md:block">
            {t(title as TranslateKey)}
          </h1>
          <h3 className="text-nikko-teal mb-6">{t('feature-section.name')}</h3>
          <div>
            <span className="mr-4">NAV (per 100 shares)</span>
            <span className="text-gray-400">
              {currencyFormat(featureList[activeIndex].nav, 'JPY')}
            </span>
          </div>
          <div>
            <span className="mr-4">Net Assets</span>
            <span className="text-gray-400">
              {numberSeparator(featureList[activeIndex].netAssets)} million
            </span>
          </div>
          <div>
            <span className="mr-4">Day Change</span>
            <span className="text-gray-400">
              {currencyFormat(featureList[activeIndex].dayChange, 'JPY')}
            </span>
          </div>
          <div>
            <span className="mr-4">Issued</span>
            <span className="text-gray-400">
              {numberSeparator(featureList[activeIndex].issued)} shares
            </span>
          </div>
          <div className="flex flex-col">
            <Chart />
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
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
