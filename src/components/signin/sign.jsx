import Button from "../btn";
import logo from "../asset/jb.png";

function Sign() {
  return (
    <>
      <div className="flex shadow-xl justify-center rounded p-20 ">
        <div className="bg-gray h-[600px] w-48"></div>
        <div className=" px-20 shadow-xl  pb-20">
          <div className="px-28 py-10 ">
            <img src={logo} alt="jb" />
          </div>
          <div className="rounded shadow-xl p-10 ">
            <p className="text-center py-5">Glad to have you back!</p>
            <div className="pb-5">
              <p>Email Address</p>
              <input type="email" placeholder="www.email@example.com" size="40" className="rounded border-1 outline-1" />
            </div>
            <div className="">
              <p>Password</p>
              <input type="password" placeholder="min of 6 characters" size="40" className="rounded border-1 outline-1" />
            </div>
            <div className="pt-5 text-center text-white">
              <Button text="Sign In" className="bg-blue-400 rounded px-32 py-2" />
            </div>
            <div>
                <p className="text-sm text-center">No account yet? <a href="#" className="text-blue-400">Create account</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
