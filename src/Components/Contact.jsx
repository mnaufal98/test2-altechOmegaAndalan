import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
  } from 'react-icons/fa';

export default function Contact() {
    return (
        <>
        <div id="contact" className="mt-[50px] relative">
        <img
          className="w-full h-[400px]"
          alt="contactus"
          src="https://media.suara.com/pictures/653x366/2022/08/17/41897-ilustrasi-orang-dewasapexelscom.webp"
        />
        <p className="md:text-8xl text-7xl font-bold absolute top-0 md:top-[150px] md:left-[500px] text-white tracking-wide">
          CONTACT
        </p>
      </div>
      <div className="text-center text-5xl font-bold mt-20">
        Call us right now!
      </div>
      <div className="text-center text-xl text-slate-700 mt-16">
        Start Building Your Success From Now
      </div>
      <div className="flex flex-col md:flex-row m-10">
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="text-3xl mt-5">First Name*</div>
            <input
              placeholder="First Name"
              type="text"
              className="mt-2 border border-slate-400 h-[50px] text-2xl placeholder:text-2xl"
            ></input>
            <div className="text-3xl mt-5">Last Name*</div>
            <input
              placeholder="Last Name"
              type="text"
              className="mt-2 border border-slate-400 h-[50px] text-2xl placeholder:text-2xl"
            ></input>
            <div className="text-3xl mt-5">Company Email*</div>
            <input
              placeholder="Company Email"
              type="text"
              className="mt-2 border border-slate-400 h-[50px] text-2xl placeholder:text-2xl"
            ></input>
            <div className="text-3xl mt-5">Company Name*</div>
            <input
              placeholder="Company Name"
              type="text"
              className="mt-2 border border-slate-400 h-[50px] text-2xl placeholder:text-2xl"
            ></input>
            <div className="text-3xl mt-5">Phone Number*</div>
            <input
              placeholder="Company Number"
              type="text"
              className="mt-2 border border-slate-400 h-[50px] text-2xl placeholder:text-2xl"
            ></input>
            <div className="text-3xl mt-5">Question*</div>
            <textarea
              placeholder="Enter your message "
              className="border border-slate-400 mt-5 text-2xl placeholder:text-2xl"
              rows="4"
              cols="50"
            ></textarea>
            <p className="text-slate-500">
              * We will handle your personal data as described in our Privacy
              Policy, to answer your question and provide information about our
              products and services.
            </p>
            <button className="text-2xl border-2 border-[#6fe1ff] rounded-lg bg-[#6fe1ff] text-white text-lg font-bold py-2 px-16 shadow-sm rounded-xl mt-10">
              Submit
            </button>
          </div>
        </div>
        <div className="flex-1 md:ml-14 ">
          <div className="text-4xl mt-5">AOA Indonesia</div>
          <div className="text-2xl my-14">Phone: +62 812 9766 6527</div>
          <div className="text-2xl">
            <b>Address:</b>
            <br />
            AOA Indonesia
            <br />
            50th Floor, Menara Jakarta
            <br />
            Jalan MH Thamrin No. 1<br />
            Jakarta 10310
            <br />
            Indonesia
          </div>
          <div className="text-4xl my-14">Follow Us</div>
          <div className="flex gap-5">
            <FaLinkedin size={50} className="bg-[#6fe1ff] p-3" />
            <FaTwitter size={50} className="bg-[#6fe1ff] p-3" />
            <FaFacebook size={50} className="bg-[#6fe1ff] p-3" />
            <FaInstagram size={50} className="bg-[#6fe1ff] p-3" />
            <FaYoutube size={50} className="bg-[#6fe1ff] p-3" />
          </div>
        </div>
      </div>
        </>
    )
}