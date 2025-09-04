import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] p-4 sm:p-10 rounded-lg">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2rem] font-bold">
        Let's work together
      </h1>
      <p className="text-gray-300 mt-2">
        I'm always open to exciting collaborations and new opportunities. Let's
        connect and create impactful solutions together.
      </p>
      {/* input field */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col  md:flex-row  gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="First name "
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opecity-15 outline-none w-full"
          />

          <input
            type="text"
            placeholder="last name "
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opecity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col  md:flex-row  gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="email address "
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opecity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="phone number "
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opecity-15 outline-none w-full"
          />
        </div>
        <div>
          <select
            defaultValue=""
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="" disabled className="text-gray-600">
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>

        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
            <a href="mailto:yourname@email.com?subject=Contact%20from%20Portfolio&body=Hi%20there,">
              Send Message
            </a>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
