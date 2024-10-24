import { Link } from "react-router-dom";
import MuziraIcon from './../../assets/icon';
import { useState } from "react";


const LogIn = () => {

    const [formDetails, setFormDetails] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        profileName:"",
        day: "",
        month: "",
        year: "",

    })

    const handleSubmit = (e) => {
      e.preventDefault()
      setFormDetails({ ...formDetails });
      console.log(formDetails);
      
    }

    return ( 
       <div className="bg-gradient-to-b from-[#383838] to-[#bfbfc7] flex  gap-2 sm:justify-center  " style={{fontFamily: 'Roboto'}}>
       <div className="logo hidden lg:ml-40 sm:hidden lg:block mt-12 text-white ">
            <h1 className="inline-flex">MUZIR<MuziraIcon /></h1>
        </div>
        <form className="mx-auto" onSubmit={(e) => handleSubmit(e) }>
        <div className="sm:w-auto w-[400px] p-6  form-input flex flex-col bg-[#0F0B0B]">
        <div className="input-1  ml-4 mb-4 sm:ml-1 sm:mb-5">
                <h1 className=" text-white text-lg sm:mt-4">
                    Login to Muzira
                  </h1>
                    
            </div>
         <div className="bg-[#0F0B0B] flex flex-col gap-16 items-center text-white " style={{fontFamily: 'Roboto'}}>
            <div className="input-1  bg-[#0F0B0B]">
                <input 
                className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-30 ring-1 ring-white bg-transparent" 
                type="email"
                name="email" 
                id="" placeholder="ashimolowo@gmail.com"
                value={formDetails.email}
                onChange={ e => setFormDetails({...formDetails, email: e.target.value  })} 
                />
            </div>
            <div className="input-2">
                <input 
                className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-30 ring-1 ring-white bg-transparent" 
                type="password"
                name="password"
                id="password"
                placeholder="e.g shaybah04@Terra" 
                value={formDetails.password}
                onChange={ e => setFormDetails({...formDetails, password: e.target.value  })} 
                />
                <Link  className="text-right text-sm text-purple-700"><p className="mt-3">Forgot Password?</p></Link>
            </div>
            <div className="input-3 -mt-5">
                <button className="w-80 h-9 sm:h-10 sm:w-96 ring-transparent bg-purple-500 rounded-sm">LOGIN</button>
            </div>
            <div className="input-4">
                <p className="flex text-white"><span className="text-purple-500"><hr  className="w-32 sm:w-40 mt-4 border-purple-500"/> </span> <span className="mx-4 text-lg">  or  </span><hr className="w-32 sm:w-40 mt-4 border-purple-500"/> </p>
            </div>
            <div className="input-5">
                <input className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-30 ring-1 ring-purple-500 bg-transparent" type="email" name="email" id="" placeholder=" Continue With Google" />
            </div>

            <div className="signup pb-8 sm:p-0">
                <p className="text-xs">Don't have an account? <Link to='/' className="font-bold">Sign up</Link> </p>
            </div>
        </div>
        </div>
        </form>
      
       </div>
     );
}
 
export default LogIn;

                