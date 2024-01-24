
import { services } from '../constants/index.js';
import styles, { layout } from '../style';
import Button from './Button';

const ServiceCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== services.length -1 ? "mb-6" : "mb-0"} service-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimYellow`}>
      <img src={icon} alt="icon" className="w-[60%] h-[60%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="services" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we'll manage your risk.</h2>
        <p className={`${styles.paragraph} text-justify max-w-[470px] mt-5`}>
            DRMS supports clients with unique and challenging projects, as well as provide interim        staff support. We take on the duty of guiding our clients in advancing a well-thought-out       strategic plan to identify, control, develop and implement solid loss prevention measures. <br /> <br />     The Principal Consultant, Marco Sandoval, brings over 40 years of experience in Risk      Management, Insurance, Loss Prevention and Safety in both private and public sectors. On       top of being an active member of Risk & Insurance Management Society Inc (RIMS) and Public        Agency Risk Management Association (PARMA), The Principal Consultant also participates as       an <span className="text-gradient font-semibold"><a href="https://www.prismrisk.gov/services/risk-management/enterprise-risk-consultants/Enterprise-Risk-Consultants-Guide/#page=14" target="_blank">Enterprise Risk Consultant at Public Risk Innovation, Solutions,       and Management (PRISM).</a></span>      
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((service, index) => (
          <ServiceCard key={services.id} {...service} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business