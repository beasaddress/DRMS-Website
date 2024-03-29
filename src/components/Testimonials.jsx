import { feedback } from "../constants/index.js";
import styles from "../style";
import FeedbackCard from "./FeedbackCard.jsx";

const Testimonials = () => (
    <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full white__gradient"/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden"/> saying about us</h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} testi text-left max-w-[450px`}>
          Discover success stories from our clients, sharing their experiences in securing strategic risk management services from DRMS.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )


export default Testimonials