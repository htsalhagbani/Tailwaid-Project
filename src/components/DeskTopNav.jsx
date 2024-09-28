import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
export default function DeskTopNav (){

    return (
        <header className="hidden  md:flex justify-around items-center md:py-9 md:gap-[20vw]">
            <div className="flex items-center space-x-8 ">
            <p  className="text-9xl font-bold text-[#be7c68]">
                <img
                    alt="Food Blogger & Influencer"
                    className="w-32 h-auto lg:w-25 lg:h-auto" // Adjust the width here for larger size
                    src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
                    height={34}
                    width={64}
                />
            </p>


                <nav className="flex space-x-4">
                    <p
                        key="home"
                        className="text-sm md:text-lg font-extrabold font-mono text-[#BE7C68] hover:text-[#191970] uppercase"
                        
                    >
                        Home
                    </p>
                    {['About', 'Reviews', 'Videos', 'Contact'].map((item) => (
                        <p
                            key={item}
                            className=" text-sm md:text-lg  font-bold font-mono text-[#131516] hover:text-[#191970] uppercase"
                            
                        >
                            {item}
                        </p>
                    ))}
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex gap-2 space-x-2">
                <p className="text-white hover:text-[#0274be] text-2xl">
                    <FaYoutube />
                </p>
                    <p className="text-white hover:text-[#0274be] text-2xl">
                        <FaInstagram />
                    </p>
                    <p className="text-white hover:text-[#0274be] text-2xl">
                        <FaFacebook />
                    </p>
                </div>
                <p
                    className="text-white border border-white py-2 px-4 md:px-10 md:text-xl  hover:bg-white hover:text-[#191970] transition"
                >
                    Let's Talk
                </p>
            </div>
        </header>
    )
}