import { useState } from "react";
import mainLogo from '../assets/mainLogo.png';
import mainLogo4 from '../assets/mainLogo4.png';
import styles, { layout } from '../style';
import { inquiries } from '../constants/index.js';

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
       e.preventDefault();
       setButtonText('Sending...');
       let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
       });
       setButtonText("Send"); 
       let result = await response.json();
       setFormDetails(formInitialDetails);
       if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully!'});
       } else {
        setStatus({ success: false, message: "Something went wrong, please try again."});
       }
    };

    const InquiryCard = ({ icon, title, content, link, index }) => (
        <div className={`flex flex-row p-6 rounded-[20px] ${index !== inquiries.length -1 ? "mb-6" : "mb-0"} inquiry-card`}>
          <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimYellow`}>
            <img src={icon} alt="icon" className="w-[60%] h-[60%] object-contain" />
          </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              {title}
            </h4>
            {index === 0 ? (
              <a className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1" href={link} target="_blank" rel="noopener noreferrer linkedInLink">
                {content}
              </a>
            ) : (
              <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
            )}
          </div>
        </div>
      )


    return (
<section id="contact" className={layout.section}>
    <div className={`flex-1 flex justify-center items-start md:ml-0 ml-0 md:mt-0 mt-10 relative flex-col`}>
        <img src={mainLogo4} className="contactLogo z-[0]"/>
        <p className="mb-8 mt-5 mr-10 lg:mb-8 font-poppins font-light text-start text-gray-500 dark:text-gray-400 sm:text-xl">Explore how we can collaborate to safeguard your business against potential threats. Connect with the Principal Consultant and recieve a response in 1 business day.</p>
         <div className={`flex-1 flex justify-between items-start sm:mb-10 md:ml-0 ml-0 md:mt-0 mt-0 relative flex-col`}>
    {inquiries.map((inquiry, index) => (
          <InquiryCard key={inquiries.id} {...inquiry} index={index}/>
        ))}
    </div>   
    </div>

  <div className="flex-1 flex flex-col">

      <h2 className="mb-4 text-4xl font-poppins font-extrabold text-center text-white">Ready to get started?</h2>
      <p className="mb-8 lg:mb-8 font-poppins font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Leave an inquiry below</p>
      <form onSubmit={handleSubmit} action="#" className="space-y-7">
            <div>
              <input type="text" id="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} className="block p-3 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required />
          </div> 
          <div>              
              <input type="text" id="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} className="block p-3 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required />
          </div> 
          <div>              
              <input type="email" id="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} className="shadow-sm bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " required />
          </div>
          <div>              
              <input type="text" id="company" value={formDetails.company} placeholder="Your Company" onChange={(e) => onFormUpdate('company', e.target.value)} className="block p-3 w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" required />
          </div>
          <div className="sm:col-span-2">              
              <textarea id="message" rows="6" value={formDetails.message} placeholder="Leave your inquiry here..." onChange={(e) => onFormUpdate('message', e.target.value)} className="block p-2.5 w-full text-sm text-white bg-transparent rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" ></textarea>
          </div>
          <button type="submit" className={`py-4 px-6 bg-gold-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>{buttonText}</button>
          {
            status.message &&
            <div className="mb-8 lg:mb-8 font-poppins font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl status">
                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
            </div>
          }
      </form>
  </div>

</section>
    )
}

export default Contact
