import { Modal } from 'flowbite-react';

export default function LoginModal(props) {
  return (
    <>
      <Modal
        dismissible
        show={props.show}
        onClose={() => {
          props.funcShow(false);
        }}
      >
        <Modal.Header>
          <div className="text-xl">LOGIN</div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex gap-5 items-center bg-[#1fc1f9] rounded-[100%]">
            <img
              className="w-[60px] bg-[#1fc1f9] rounded-[100%] p-1"
              alt="logo"
              src="/Asset 2.PNG"
            />
            <div className="flex text-3xl font-extrabold justify-center w-full mr-16">
              <div className="text-white ">AOA</div>
            </div>
          </div>
          <input
            placeholder="Email"
            type="text"
            className="mt-10 border-x-0 border-t-0 text-2xl w-full placeholder:text-2xl"
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="mt-10 border-x-0 border-t-0 text-2xl w-full placeholder:text-2xl"
          ></input>
          <button className="border-2 border-[#6fe1ff] mt-10 w-full rounded-lg text-[#6fe1ff] text-lg font-bold py-2 px-16 hover:bg-[#6fe1ff] hover:text-white">
            LOGIN
          </button>
          <button className="border-2 border-[#6fe1ff] mt-5 w-full rounded-lg text-[#6fe1ff] text-lg font-bold py-2 px-16 hover:bg-[#6fe1ff] hover:text-white">
            GET STARTED
          </button>
          <div className="mt-10 text-sm text-slate-500 hover:text-black hover:underline cursor-pointer">
            Forgot Password
          </div>
          <div className="mt-2 text-sm text-slate-500 hover:text-black hover:underline cursor-pointer">
            Frequently Asked Questions
          </div>
          <div className="mt-2 text-sm text-slate-500 hover:text-black hover:underline cursor-pointer">
            Maintenance Schedule
          </div>
          <div className="mt-2 text-sm text-slate-500 hover:text-black hover:underline cursor-pointer">
            Security & You
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
