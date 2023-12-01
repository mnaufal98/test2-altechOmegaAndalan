import { Link } from 'react-scroll';

export default function Navbar(props) {
  return (
    <>
      <div className="relative">
        <div className="flex justify-between m-10 text-3xl font-extrabold">
          <div className="flex gap-5 items-center">
            <img className="w-[60px]" alt="logo" src="/Asset 2.PNG" />
            <div className="text-white">AOA</div>
          </div>
          <ul className="flex items-center gap-12">
            <li className="cursor-pointer hover:text-[#6fe1ff]">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#6fe1ff]">
              <Link
                to="pricing"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                PRICING
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#6fe1ff]">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <button onClick={()=> props.func(true)} className="border-2 border-[#6fe1ff] rounded-lg text-[#6fe1ff] text-lg font-bold py-2 px-16 hover:bg-[#6fe1ff] hover:text-white">
                LOGIN
              </button>
            </li>
          </ul>
        </div>
        <div className="absolute top-[-50px] w-[500px] left-0 -z-10">
          <img alt="background-1" src="/Asset 4.PNG" />
        </div>
      </div>
    </>
  );
}
