import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { FaBeer, FaFacebook, FaInstagram, FaWifi, FaYoutube } from 'react-icons/fa'
export default function Hero (){

    return (
        <div className="mt-[4em] px-6  flex flex-col-reverse md:flex-row items-center justify-center relative ">
            <div className="absolute inset-0  md:right-0 " />
            <div className="relative md:w-[33vw] p-6 z-10 md:pt-40  ">
            <div className="flex items-center my-4">
            <div className="border-t border-[#C99484] w-[3vw] "></div>
            <span className="mx-4 text-[#C99484]">Welcome</span>
        </div>
                <h1 className=" text-2xl md:text-6xl font-bold text-gray-800 mb-2">
                    I’m Dianna Adams
                </h1>
                <h3 className=" text-md md:text-4xl font-semibold text-[black] mb-4">
                    Food Critic / Influencer / Blogger
                </h3>
                <p className="text-gray-600 mb-6 text-md md:text-xl">
                    Massa urna magnis dignissim id euismod porttitor vitae etiam viverra
                    nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus
                    pharetra, ac porttitor orci.
                </p>
                <p
                   
                    className="inline-block bg-transparent border text-sm md:text-xl border-[#be7c68] text-[#be7c68] font-bold uppercase px-4 py-2 md:px-6 md:py-3 rounded hover:bg-[#be7c68] hover:text-white"
                >
                    Join Insider
                </p>
                <div className="flex mt-10  md:mt-[10vw] space-x-8 md:space-x-24">
                    <div className="text-center">
                        <FaYoutube className="text-[#be7c68] text-4xl md:text-5xl mx-auto mb-2" />
                        <h3 className="font-semibold text-lg text-[black] md:text-4xl">1.2M+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider md:text-lg text-[gray]">Subscribers</p>
                    </div>
                    <div className="text-center">
                        <FaInstagram className="text-[#be7c68]  text-4xl md:text-5xl mx-auto mb-2" />
                        <h3 className="font-semibold text-lg  text-[black] md:text-4xl">1.8M+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider md:text-lg text-[gray]">Followers</p>
                    </div>
                    <div className="text-center">
                        <FaWifi className="text-[#be7c68]  text-4xl md:text-5xl mx-auto mb-2" />
                        <h3 className="font-semibold text-lg text-[black] md:text-4xl">800K+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider  md:text-lg text-[gray]">Readers</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[40vw] p-8 z-10 ">
                <img
                    src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
                    alt="Dianna Adams"
                    className="shadow-lg"
                    width={'90%'}
                    height={552}
                />
            </div>
        </div>
    )
}