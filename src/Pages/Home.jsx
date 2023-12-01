import { useState } from 'react';
import Navbar from '../Components/Navbar';
import PricingCard from '../Components/pricingCard';
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import LoginModal from '../Components/loginModal';

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Navbar func={setOpen } />
      <div className="flex justify-end mr-[250px] mt-[130px]">
        <p className="w-[690px] text-xl text-center leading-loose text-slate-600 font-medium">
        Each app simplifies a process and empowers more people.
Imagine the impact when everyone gets the right tool for the job, with perfect integration.
        </p>
      </div>
      <div className="mt-[130px] ml-16">
        <p className="text-2xl italic font-medium text-slate-700">
          " All your business on one platform.
Simple, efficient, yet affordable! "
        </p>
      </div>
      <div className="relative">
        <img
          className="ml-20 mt-[100px] w-[350px]"
          alt="gambar"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTo-ndaFRERDQuxK0wRRBClKq5wD01WTUCFT7OZQ0WbcPunZfS8"
        />
        <div className="absolute bottom-[-50px] right-0 w-[700px] -z-10">
          <img alt="background-2" src="/Asset 3.PNG" />
        </div>
      </div>
      <div id='about' className="mt-[80px] relative">
        <img
          className="w-full h-[400px]"
          alt="aboutus"
          src="https://lesprivatbandunghamasah.co.id/wp-content/uploads/2018/02/toronto_slide_1-1.jpg"
        />
        <p className="text-8xl font-bold absolute top-[150px] left-[500px] text-white tracking-wide">
          ABOUT US
        </p>
      </div>
      <div className="text-center mt-20 text-2xl font-extrabold text-slate-500">
        THE PEOPLE , OUR COMMUNITY
      </div>
      <div className="mx-10 text-center mt-10 text-2xl font-semibold text-slate-500 leading-relaxed">
        We are a technology service provider company located in Jakarta, with 4
        branch offices in Indonesia, Singapore, Hong Kong and America. We have
        high determination, commitment and understanding in providing technology
        services that can help your business reach the optimal stage and provide
        a strong basis for decision making.
      </div>
      <div className="flex mt-20 bg-[#0c5394]">
        <div className="flex-1">
          <img
            className="w-[700px]"
            alt="aboutus2"
            src="https://offers.mas-software.com/hubfs/MASERP-mockup.png"
          />
        </div>
        <div className="flex-1 text-white p-10">
          <div className="text-4xl font-extrabold">
            Why do you need to use our ERP software?
          </div>
          <div className="text-2xl mt-10 leading-relaxed">
            ERP software is business software that can be used in various types
            of industries from manufacturing, distributors, retail, petroleum,
            mining, medical, and others. Benefits your business can get:
          </div>
          <div>
            <ul className="list-disc text-2xl mt-10 leading-relaxed">
              <li>
                Data is integrated between departments and centralized in one
                system. Can be used by production, warehouse, sales,
                procurement, accounting, finance, tax departments, etc.
              </li>
              <li>
                Automation of work processes so that there is no need for
                repeated double input of data, reducing human error.
              </li>
              <li>
                Real-time data visibility and data transparency so you and your
                team can make quicker and more precise decisions.
              </li>
              <li>
                ERP software saves costs because it only needs one system for
                all departments in the company.
              </li>
              <li>
                Increases data security because it has access rights and
                approval rights settings.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id='pricing' className="mt-10 relative">
        <img
          className="w-full h-[200px]"
          alt="background-1"
          src="/Asset 4.PNG"
        />
        <p className="text-8xl font-bold absolute top-[50px] left-[500px] text-white tracking-wide">
          PRICING
        </p>
      </div>
      <div className="flex justify-between m-10 gap-5">
        <PricingCard />
      </div>
      <div className="text-2xl text-center leading-relaxed">
        <div>
          All our plans include <b>unlimited support, hosting</b> and{' '}
          <b>maintenance</b>.<br />
          With no hidden costs, no limit on features or data: enjoy real
          transparency!
        </div>
        <div className="mt-5">
          (*) The discount is valid for 12 months, for initial users ordered.
          <br />
          (**) Cost for Aoa.sh hosting not included.
        </div>
      </div>
      <div className="flex justify-center">
        <button className="text-2xl border py-5 px-10 bg-[#f3f4f6] text-[#0c5394] font-bold shadow-sm rounded-xl mt-10">
          Schedule a demo
        </button>
      </div>
      <div id='contact' className="mt-[50px] relative">
        <img
          className="w-full h-[400px]"
          alt="contactus"
          src="https://media.suara.com/pictures/653x366/2022/08/17/41897-ilustrasi-orang-dewasapexelscom.webp"
        />
        <p className="text-8xl font-bold absolute top-[150px] left-[500px] text-white tracking-wide">
          CONTACT
        </p>
      </div>
      <div className="text-center text-5xl font-bold mt-20">
        Call us right now!
      </div>
      <div className="text-center text-xl text-slate-700 mt-16">
        Start Building Your Success From Now
      </div>
      <div className="flex m-10">
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
        <div className="flex-1 ml-14 ">
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
      <div className='text-xl text-center bg-[#0c5394] py-5'>
      Copyright © 2022 AOA Indonesia. All Rights Reserved.
      </div>
      <LoginModal show={open} funcShow={setOpen } />
    </>
  );
}