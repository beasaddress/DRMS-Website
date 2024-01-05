import React from 'react';
import styles from './style';
import { Navbar, Business, Clients, CTA, Stats, Footer, Testimonials, Contact, Hero } from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />  
          <Testimonials /> 
          <Clients /> 
          <CTA />
          <Contact />
          <Footer /> 
        </div>
      </div>


    </div>
  );


export default App;