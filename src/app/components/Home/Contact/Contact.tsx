import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* contat form */}
        <div>
          <ContactForm />
        </div>
        {/* Contact info */}
        <div className=" xl:mx-aut0 lg:mx-auto">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
