import { Outlet } from "react-router-dom";
import NavBar from "../../Common/NavBar/NavBar";
import Footer from "../../Common/Footer/Footer";
import { useEffect, useState } from "react";

const Main = () => {

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true)


        setTimeout(() => {
            setLoading(false)
        }, 1900)
    }, [])





    return (
        <div className="relative   lg:flex-row items-center justify-center min-h-screen bg-[#1F1F24]"> 
            {
                loading ?

                    <>
                        {/* Background Shape */}
                        <div className="absolute flex justify-end items-center ml-16 lg:ml-[650px] mt-40">
                            <img src={"https://i.postimg.cc/LsMP55Yk/Rasel-Spin.png"} alt="Background Spin" className='object-cover h-full w-72 lg:w-full animate-spin-fast opacity-50' />
                        </div>
                    </>


                    :


                    <>
                        <NavBar></NavBar>

                        <Outlet></Outlet>

                        <Footer></Footer>

                    </>

            }

        </div>
    );
};

export default Main;