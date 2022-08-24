import Button from "../btn";
import logo from "../asset/jb.png"

function Signin(){
    return(
        <>
        <div classname="flex bg-black"  >
            <div classname="bg-gray-400 w-96" ></div>
            <div classname="text-center rounded border-2" >
                <div classname="" ><img src={logo} alt="jb"/></div>
                <div classname="" >
                    <p>Glad to have you back!</p>
                   <div classname="" > <p>Email Address</p>
                    <input type="email" placeholder="www.email@example.com"/></div>
                    <div classname="" > <p>Password</p>
                    <input type="password" placeholder="min of 6 characters "/></div>
                </div>
                <div classname="" >
                    <Button/>
                </div>
                <div classname="" >
                    <p>Have no account? <a href="#" alt="" ></a>Create account</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Signin;