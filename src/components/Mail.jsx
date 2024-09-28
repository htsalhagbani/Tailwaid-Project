export default function Mail(){
    return (
        <div className="md:w-[70vw] mt-40 mx-auto my-8 p-8 border-[0.6vw] border-[lightgray] bg-white flex flex-col md:flex-row items-center">
       <div className="w-full md:w-[30vw] mb-4 md:mb-0  relative"> 
               <img
        src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg"
        alt="Join Mailing List"
        className="w-full h-auto rounded transform -translate-y-[12vh] translate-x-[1vw]" 
          />
            </div>
        <div className="w-full md:w-1/2 md:pl-12 ">
            <h2 className="text-2xl md:text-6xl font-semibold text-gray-700">Join Mailing List</h2>
            <p className="text-gray-600 my-4 md:text-xl">
                Sign up and get all the latest, ad-free reviews, recipes and news sent to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-center">
                <input
                    type="email"
                    placeholder="Email address"
                    required
                    className="w-full sm:w-auto flex-grow p-4 border border-gray  mb-4 sm:mb-0 sm:mr-4"
                />
                <button className="px-12 py-4 bg-white text-[#C88A6D] border border-[#C88A6D] hover:bg-[#C88A6D] transition-colors hover:text-white">
                    Subscribe
                </button>
            </form>
        </div>
    </div>
    )
}