import { Link } from "react-router-dom";
import MuziraIcon from './../../assets/icon';
import { useState } from "react";

const SignUP = () => {

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
                     Sign in to Muzira
                   </h1>
                     
             </div>
          <div className="bg-[#0F0B0B] flex flex-col gap-3 items-center text-white " style={{fontFamily: 'Roboto'}}>
             <div className="input-1">
                 <input 
                 className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-50  ring-1 ring-purple-500 bg-transparent"
                  type="email" 
                  name="email"
                   id=""
                 placeholder=" Continue With Google"
                 
                 />
             </div>

             <div className="input-2 inline-flex">
                <span className="text-purple-500"><hr  className="w-32 sm:w-40 mt-4 border-purple-500"/> </span> <span className="mx-4 text-lg to-white">  or  </span><hr className="w-32 sm:w-40 mt-4 border-purple-500"/><span></span>
             </div>
            
             <div className="input-3  bg-[#0F0B0B]">
                 <input 
                 className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-50  ring-1 ring-white bg-transparent" 
                 type="email"
                 value={formDetails.email}
                 id=""
                 placeholder="Email Address"
                 onChange={ e => setFormDetails({...formDetails, email: e.target.value  })} 
                 />
             </div>

             <div className="input-4  bg-[#0F0B0B]">
                 <input 
                 className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-50  ring-1 ring-white bg-transparent"
                 type="password"
                 value={formDetails.password}
                 id="" 
                 placeholder="Create Password"
                 onChange={ e => setFormDetails({...formDetails, password: e.target.value  })} 
                 />
             </div>

             <div className="input-5  bg-[#0F0B0B]">
                 <input 
                 className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-50  ring-1 ring-white bg-transparent"
                 type="password"
                 value={formDetails.confirmPassword}
                 id="confirm-password" 
                 placeholder="Confirm Password"
                 onChange={ e => setFormDetails({...formDetails, confirmPassword: e.target.value  })} 
                 />
             </div>

             <div className="input-6">
                 <input 
                 className="w-80 h-9 sm:h-10 sm:w-96 text-left pl-3 opacity-50 ring-1 ring-white bg-transparent" 
                 type="text" 
                 value={formDetails.profileName}
                 id="profile-name" 
                 placeholder="Enter Profile Name"
                 onChange={ e => setFormDetails({...formDetails, profileName: e.target.value  })} 
                 />
             </div>

            <div className="input-7 flex flex-col lg:-ml-10 -ml-8 gap-2">
                <div>
                <p>what is your date of birth</p>
                </div>
                <div  className="flex gap-4">
                <input 
                className="w-20 h-7 text-left pl-3 opacity-50 border-white border-2 rounded-md bg-transparent appearance-none" 
                type="number" 
                name="day" 
                id=""
                min='1'
                max='31'
                value={formDetails.day}
                placeholder="Date"
                onChange={ e => setFormDetails({...formDetails, day: e.target.value  })}
                 />
                <input 
                className="w-20 h-7 text-left pl-3 opacity-50 border-white border-2 rounded-md bg-transparent appearance-none" 
                type="number" 
                name="month" 
                id="" min='1' 
                max='12' 
                placeholder="month" 
                value={formDetails.month}
                onChange={ e => setFormDetails({...formDetails, month: e.target.value  })}
                />
                <input
                 className="w-20 h-7 text-left pl-3 opacity-50 border-white border-2 rounded-md bg-transparent appearance-none" 
                 type="number" 
                 name="year" 
                 id="" min='1960' max='2015' 
                 placeholder="Year"
                 value={formDetails.year}
                 onChange={ e => setFormDetails({...formDetails, year: e.target.value  })}
                 />
                
           
                </div>
            </div>
             
             <div className="input-">
                 <button className="w-80 h-9 sm:h-10 sm:w-96 ring-transparent bg-purple-500 ring-2">SIGN UP</button>
             </div>
            
 
             <div className="signup pb-8 sm:p-0">
                 <p className="text-xs">Have an account? <Link className="font-bold" to='/'>Log In</Link> </p>
             </div>
         </div>
         </div>
         </form>
       
        </div>
     );
}
 
export default SignUP;