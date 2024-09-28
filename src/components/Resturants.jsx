import Nav from './Nav'
import Featured from './Featured'
import Mail from "./Mail"
import Videos from "./Videos"
import Hero from "./Hero"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import DeskTopNav from "./DeskTopNav"
import Card from './Card'
import Card2 from './Card2'

export default function Wrap() {
  return (
    <div id="page">
      <div  className="bg-no-repeat bg-[url('../public/food-blogger-hero-bg-grad.svg')] bg-contain bg-[70vw]  ">
        <Nav />
        <DeskTopNav />
        <Hero />
      </div>
      <div id="content" className="site-content">
      
             <div className="flex max-w-full  py-0  lg:flex lg:flex-col ">
          <div className="w-full mx-0 my-[4em] p-0 lg:m-0 lg:px-0 lg:py-[1.5em] Smyubx" id="primary">
            <main className="block " id="main">
              <article id="post-17" className="post-17 page type-page status-publish ast-article-single">
                <header className=" mt-[4em] mb-[1.2em] mx-auto pl-0 pr-5 " />
                <div className=" after:table after:clear-both after:content-[''] ">
                  <div className="mb-0 " data-elementor-id={17} data-elementor-type="wp-page">
                  
                    <Featured></Featured>

                    {/* Latest Review !!!! */}
                    <div className="md:w-[70vw] mx-auto py-16 px-4 ">
                      <div className="flex justify-between items-center mb-8">
                          <h2 className="text-3xl md:text-6xl font-bold text-gray-800">Latest Reviews</h2>
                          <button className="bg-transparent border-2 border-[#BE7C68] text-[#BE7C68] font-bold px-4 py-2 md:px-9 md:py-4 uppercase text-sm hover:text-white hover:bg-[#BE7C68]  transition">
                              View All
                          </button>
                      </div>
                      <div className="grid md:grid-cols-3 gap-8">
                    <Card image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg' title='Grilled Flank Steak with Chimichurri' description='Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque.'/>
                    <Card image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg' title='Mushroom Penne with Walnut Pesto' description='Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus.'/>
                    <Card image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg' title='Garlic Butter White Wine Shrimp Linguine' description='Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis.'/>

                      </div>
                      </div>
                      {/* End ------ */}


                   
                    {/* Best in resturant  */}
                  <div className="bg-[#F3EFEE] w-full md:w-[70vw] mx-auto py-16 px-4">
                  <h2 className="text-3xl md:text-6xl font-bold text-center text-gray-700 mb-8">Best in Class Restaurant</h2>
                  <p className="text-center text-gray-500 mb-12 max-w-5xl mx-auto md:text-xl text-lg">
                      Massa urna magnis dignissim id euismod porttitor vitae etiam viverra nunc at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra ac porttitor orci.
                  </p>
                  <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
                  <Card2 image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg' name="Bern's Steak House" description='Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet.'/>
                  <Card2 image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg' name='Eewak Korean Restaurant' description='Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui.'/>
                  <Card2 image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg' name='The Ramban Vegan House' description='Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo.'/>
                  <Card2 image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg' name='Maniest Bake & Cake' description='Diam lacus nunc est commodo nunc, velit et amet eu vitae sem.'/>
                  <Card2 image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg' name='Crush Los Angeles' description='Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique.'/>
                  <Card2 image='https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg' name='The Mike Winery' description='Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis.'/>

                    </div>
                    </div>
                   {/*------- end ---- */}
                 


                    <Mail></Mail>
                    <Videos/>
                   
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>


      </div>

      {/* footer section  */}
      <div className=" bg-[#be7c68] text-white">
        <div className="w-full h-[600px] flex items-center justify-center">
          <div className="text-center px-12  flex justify-center flex-col items-center">
            <h2 className="font-semibold text-3xl py-12 mb-5 md:text-7xl ">
              Invite me to your restaurant.
              <br />
              Get exposure of millions food lovers.
            </h2>
            <p className="text-[#f6ecea] md:w-[40vw] text-lg md:text-xl text-wrap mb-12">
              Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit phasellus est natoque blandit facilisi eleifend.
            </p>
            <p
              className="text-[#BE7C68]  bg-white font-bold text-[15px] uppercase tracking-[2px] px-6 py-3 md:px-10 md:py-5 rounded-[3px] border border-white hover:text-white hover:bg-transparent"
            >
              Let's Talk
            </p>
          </div>
        </div>
      </div>
      <MobileNav />
      <Footer/>
    </div>
  );
  }