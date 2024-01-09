import training from '../assets/training.png';
import styles, { layout } from '../style';


const CTA = () => (
    <section className={layout.section}>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient"/>                  
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full      blue__gradient"/>
      <div className={layout.sectionInfo}>
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-gradient xs:leading-[76.8px] leading-[66.8px] w-full">Communication, Consensus, & Accountability</h2> 
        <div className="flex-1 flex flex-col md:flex-row items-center">
          <div className={`${layout.sectionImg} flex-col `}>
            <img src={training} />  
          </div>              
        <p className={`${styles.paragraph} ${styles.marginY} w-[60%] mt-5 `}> DRMS holds that the path of success is achieved by a <span className="text-gradient font-semibold">trifecta</span> of communication, consensus, and accountability. <br /> <br /> Because of this, training is absolutely key to the success of all risk management and loss prevention programs. Depending on the unique challenges faced by each client, DRMS offers customized staff instruction for the purpose of Risk Education. With over four decades of experience, DRMS is fully capable of developing any risk management course or cirriculum according to each clients' needs. </p>     
        </div>       
      </div>
    </section>
)

export default CTA