import { NavLink, Outlet } from "react-router";
import banner from '../../../src/assets/banner.jpg';

const Banner = () => {
    return (
       
        <div>
             <div className="h-[650px] md:h-[750px]">
           <div className="bg-[#9538E2] max-w-[1540px] mx-auto rounded-3xl relative bottom-16 pt-10">

            <h1 className="text-center text-4xl md:text-6xl text-white font-bold mt-10">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="text-center text-xl text-white mt-4">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="flex justify-center">
            <NavLink to='/dashboard'>
            <button className="bg-white rounded-full px-4 py-1 mt-5 mb-35 font-bold text-purple-700">SHOP NOW</button>
            </NavLink>
            </div>
    
        </div> 

        <div className="relative bottom-45">
                <img className="mx-auto w-3xl max-h-[400px] rounded-2xl" src={banner} alt="" />
            </div>
            
        </div>
        {/* HomeExplore will render here */}
        <Outlet />
        </div>
    );
};

export default Banner;