import React, { useEffect } from 'react';
import classNames from 'classnames';
import lottie from 'lottie-web';

import Field, { hasDataInFields } from '../../Field';
import SectionContainer from '../SectionContainer';
import css from './SectionHero.module.css';
import animationData from './airplane-animation.json';
import HeroLeftImg from './hero-left-img.png';

const SectionHero = props => {
  const {
    sectionId,
    className,
    rootClassName,
    defaultClasses,
    title,
    description,
    appearance,
    callToAction,
    options,
  } = props;

  const fieldComponents = options?.fieldComponents;
  const fieldOptions = { fieldComponents };

  const hasHeaderFields = hasDataInFields([title, description, callToAction], fieldOptions);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById('lottie-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => anim.destroy();
  }, []);

  return (
    <SectionContainer
      id={sectionId}
      className={className}
      rootClassName={classNames(rootClassName || css.root)}
      appearance={appearance}
      options={fieldOptions}
    >
      {hasHeaderFields && (
        <div className={css.heroWrapper}>
          {/* LEFT: Lottie + Title + Description + CTA */}
          <div className={css.heroLeft}>
            {/* <div id="lottie-animation" className={css.lottieContainer}></div> */}
            <div className={css.typingWrapper}>
              <h1 className={css.titleText}>
                Where Storytellers <br></br><span className={css.highlight}>Elevate</span> Their Voice
              </h1>
            </div>
           <Field
    data={description}                    // keeps the content from Sharetribe
    className={css.heroLeftDescription}   // applies styling only here
    options={fieldOptions}
  />

            <Field data={callToAction} className={defaultClasses.ctaButton} options={fieldOptions} />
          </div>

          {/* RIGHT: Hero Background Image */}
         <div className={css.heroRight}>
           <div id="lottie-animation" className={css.lottieAnimation}></div>
  <img
    src={HeroLeftImg}
    alt="Hero"
    className={css.heroImage} // apply styles via CSS
  />
</div>
        </div>
      )}
    </SectionContainer>
  );
};

export default SectionHero;
