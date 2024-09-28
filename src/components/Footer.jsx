import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { FaBeer, FaFacebook, FaInstagram, FaWifi, FaYoutube } from 'react-icons/fa'
export default function FooterL (){
    return (
        <footer className=" w-full py-24  ">
            <div className=" mx-auto flex flex-col lg:flex-row justify-around items-center  ">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <img
                        src="https://websitedemos.net/food-blogger-02/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
                        alt="Logo"
                        className="h-12"
                    />
                </div>
                <nav className="flex space-x-6 text-gray-700 text-sm md:text-xl">
                    <a href="#" className="hover:text-blue-800">
                        Home
                    </a>
                    <a href="#" className="hover:text-blue-800">
                        About
                    </a>
                    <a href="#" className="hover:text-blue-800">
                        Reviews
                    </a>
                    <a href="#" className="hover:text-blue-800">
                        Videos
                    </a>
                    <a href="#" className="hover:text-blue-800">
                        Contact
                    </a>
                </nav>
                <div className="flex space-x-4 mt-4 lg:mt-0">
                    <a href="#" aria-label="Youtube" className="text-gray-700 ">
                        <FaYoutube size={30} className="text-[#BE7C68]" />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-gray-700 ">
                        <FaInstagram size={30} className="text-[#BE7C68]" />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-gray-700 ">
                        <FaFacebook size={30} className="text-[#BE7C68]"  />
                    </a>
                </div>
            </div>
            <div className="mx-auto flex flex-col md:flex-row justify-around md:gap-[25vw] items-center text-gray-500 text-xs md:text-lg mt-4 bg-lightblue">
    <p>© 2024 Food Blogger & Influencer</p>
    <p>Powered by Food Blogger & Influencer</p>
</div>
        </footer>
    )
}