import IconNav from 'src/components/common/Nav/IconNav/IconNav';

const LandingSection = () => {
  return (
    <div className="min-h-screen flex justify-center md:p-0">
      <div className="container flex flex-col items-center md:ml-80 mt-40 p-4">
        <article className="prose prose-h1:font-normal">
          <h1 className="text-xl md:text-4xl">Progressive Solutions</h1>
          <h1 className="text-xl md:text-4xl">Competitive Performance</h1>
          <h1 className="text-xl md:text-4xl">Global Citizen with Asian DNA</h1>
          <p className='text-grey'>We’re one of Asia’s largest asset managers</p>
          <div className="not-prose">
            <IconNav
              className="text-nikko-teal"
              href="https://www.google.com/"
              icon={
                <img src="icons/circle-arrow-right.svg" alt="circle arrow" />
              }
            >
              Learn more about who we are
            </IconNav>
          </div>
        </article>
      </div>
    </div>
  );
};

export default LandingSection;
