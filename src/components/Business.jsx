import { services } from '../constants/index.js';
import styles, { layout } from '../style';
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we'll handle the all the risk.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We take on the duty of guiding our clients in advancing a well-thought-out strategic plan to identify, control, develop and implement solid loss prevention measures. DRMS supports clients with unique and challenging projects, as well as provide interim staff support. The principal Consultant, Marco Sandoval, brings over 30 years of experience in Risk Management, Insurance, Loss Prevention and safety in both private and public sectors. He is an active member of Risk & Insurance Management Society Inc (RIMS)  as well as the Public Agency Risk Management Association (PARMA). 
        </p>
        <Button styles="mt-10"/>
      </div>

    </section>
  )
}

export default Business