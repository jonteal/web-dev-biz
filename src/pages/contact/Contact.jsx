import { useRef, useState } from "react";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
// import emailjs from "emailjs-com";

import "./contact.css";
import FadeInSection from "../../components/fadeInSection/FadeInSection";
import Button from "../../components/buttons/button/Button";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  // handleSubmit using emailjs
  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_my20arp",
    //     "template_j7zva5b",
    //     formRef.current,
    //     "user_gA8QSmOG7ld5EfHWWmsof"
    //   )

    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setDone(true);
    //       formRef.current.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <div>
      {/* <div className="flex flex-col items-center">
        <h1 className="text-zinc-900 text-opacity-50 font-bold contact-header font-serif">
          Get in touch
        </h1>
        <hr className="line-break" />
      </div> */}
      <FadeInSection>
        <div
          className="contact contact-page__main-container"
          id="contact-me-section"
        >
          <div className="contact-bg"></div>
          <div className="contact-wrapper">
            <div className="contact-left">
              <h1 className="text-4xl mt-10 mb-4 text-teal-500">Contact us</h1>
              <h2 className="contact-title text-slate-100 font-bold text-6xl">
                We'd love to hear from you!
              </h2>

              {/* Contact information */}
              <div className="contact-info">
                <div className="contact-info-item flex flex-row items-center text-slate-100 text-2xl">
                  <FaPhoneAlt className="mr-2" />
                  +1 (479) 601-3157
                </div>
                <div className="contact-info-item flex flex-row items-center text-slate-100 text-2xl">
                  <FaMailBulk className="mr-2" />
                  jonjackson.webdesign@gmail.com
                </div>
                <div className="contact-info-item flex flex-row items-center text-slate-100 text-2xl">
                  <FaMapMarkerAlt className="mr-2" />
                  Lowell, AR
                </div>
              </div>
            </div>
            <div className="contact-right">
              {/* Form to reach out via email */}
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between">
                  <input
                    className="border mb-3 mr-3 pl-2"
                    tabIndex={"0"}
                    type="text"
                    placeholder="Name"
                    name="user_name"
                  />
                  <input
                    className="border mb-3 pl-2"
                    tabIndex={"0"}
                    type="text"
                    placeholder="Email"
                    name="user_email"
                  />
                </div>
                <textarea
                  className="border pl-2 pt-2 mb-3"
                  tabIndex={"0"}
                  rows="5"
                  placeholder="Message"
                  name="message"
                />
                <Button>Send</Button>
                {/* <button className="button px-5 py-2 mt-2">Send</button> */}
                {done && "Thank you for your message!"}
              </form>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Contact;
