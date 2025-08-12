import React from "react";

const Contact = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl text-green-500 font-bold mb-4">Contact Me</h1>
        <p className="text-base text-gray-300">
          Ready to bring your ideas to reality? Let's create something amazing
          together
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto mt-14 px-3 md:px-8 lg:px-0">

        {/* contact email and number */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-green-500 text-2xl font-semibold mb-3">Get in Touch</h1>
          <p className="text-sm text-gray-300 mb-5">
            Feel free to reach out! Whether you have a question or just want to
            drop a message, I’ll do my best to get back to you.
          </p>
          <p className="text-sm text-gray-300"><span className="text-base font-semibold">Email</span> : atikur947382@gmail.com</p>
          <p className="text-sm text-gray-300"><span className="text-base font-semibold">WhatsApp</span> : +8801780947382</p>
        </div>

        {/* contact form */}
        <div className="w-full lg:w-1/2">
          <form>
            <fieldset className="fieldset">
              <div className="flex gap-6 mb-3">
                <div className="flex flex-col w-full">
                  <label className="label text-lg">Your Name</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Your Name"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <label className="label text-lg">Your Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="label text-lg">Message</label>
                <textarea
                  className="textarea w-full"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>

              <button className="py-2 rounded-lg cursor-pointer text-base font-semibold border border-green-500 text-green-500 hover:bg-green-500 hover:text-white mt-4">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
