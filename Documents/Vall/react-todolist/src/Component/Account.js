import { useState } from "react";
import lokasi from "../asset/gambarProfile.png"

export default function Account() {
    const [isLogin, setIsLogin] = useState(false)

    function handleLogin(res) {
        if(res == "login") {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }

    }


    return (
        <div className="border-b w-full border-green-500 text-light border">

            <div className="containerAccount w-full" >
                <div className="w-full  flex items-center justify-evenly pr-4   mb-0 border-green-500 " >
                    <img 
                        className="w-[40%] preTablet:w-[25vw] rounded-tl-3xl rounded-br-3xl h-[20vh]  my-4 mx-4 lg:h-[30vh] xl:h-[50vh]" 
                        src={lokasi}
                        alt="my profile"
                    />
                    
                    <div className="identitas">
                        {isLogin ? 
                            <p  className="bg-inherit border-none border-red-500 outline-none text-2xl mb-[2vh]">   
                                Hasbi Husaini
                             </p>    
                            :
                            <input type="text" className="mb-[2vh] rounded-full text-center" placeholder="your id..." />
                        }
                        
                        

                        <div className="tombol w-full ">
                            {isLogin ?
                                <button className="font-bold text-dark bg-red-500 w-full rounded-full" onClick={() => handleLogin('login')}> 
                                    Logout
                                </button>
                                :
                                <button className=" bg-green-500 text-dark w-full rounded-full" onClick={() => handleLogin('logout')}>
                                Login
                                </button>
                            }        
                        </div>       

                    </div>
                </div>
            </div>
            
        </div>
    )
}