import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Home.module.scss';

const Home = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // 1. Bounce in the logo
    timeline
      .from(logoRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: 'bounce.out',
      })
      // 2. Pause and zoom into the background
      .to(logoRef.current, { scale: 1.2, duration: 0.5, delay: 0.5 })
      .to(containerRef.current, {
        scale: 5,
        duration: 1.5,
        backgroundColor: '#F6F3EE',
        ease: 'power2.inOut',
      })
      // 3. Fade out the logo and show other components
      .to(logoRef.current, { opacity: 0, duration: 0.5 }, '<') // Fade out logo
      .to(backgroundRef.current, { opacity: 1, duration: 0.8 });
  }, []);

  // return (
  //   <div ref={containerRef} className={styles.container}>
  //     <div ref={backgroundRef} className={styles.background}>
  //       {/* Add your other components (image, text, etc.) */}
  //       <h1>Welcome!</h1>
  //       <p>Test lalalall hhere is text</p>
  //     </div>
  //     <img
  //       ref={logoRef}
  //       src="../public/icons/logo.svg" // Replace with the correct path to your logo
  //       alt="Logo"
  //       style={{ zIndex: 10 }}
  //     />
  //   </div>
  // )

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <h1>Welkom bij de Frobelclub!</h1>
        <p>Test lalala</p>
      </div>

      <div className={styles.logocontainer}>
        <img ref={logoRef} className={styles.logo} src="/icons/logo.svg"></img>
        <img className={styles.brushstroke} src="/icons/brushstroke.svg"></img>
      </div>
    </div>
  )
}

export default Home;
