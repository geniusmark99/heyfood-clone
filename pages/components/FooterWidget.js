import Image from "next/image"
import ButtonWidget from "./Widgets/ButtonWidget"
import AppleIcon from "./Icons/AppleIcon"
import PlayStoreIcon from "./Icons/PlayStoreIcon"

export default function FooterWidget() {
  return (
<footer className="bg-white relative bottom-0">
  <div className="container p-6 mx-auto">
    <div className="lg:flex">
      <div className="w-full -mx-6 lg:w-2/5 flex gap-y-10 flex-col-reverse md:flex-col items-start">

        <div className="px-6">
          <a href="#">
            <Image
            width={200}
            height={200}
              className="w-auto h-7"
              src="https://heyfood.africa/icons/new/logo-long.svg"
              alt="hey Food logo"
            />
          </a>
          <p className="max-w-sm mt-2 text-base md:text-xl text-gray-800 font-semibold">
           Your Food delivered within minutes
          </p>
          <div className="flex mt-6 -mx-2">
          <div className="flex gap-x-2">
                        <ButtonWidget className="flex items-center gap-x-2 bg-black rounded-full py-3 hover:bg-opacity-75" padding={true}>
                            <AppleIcon className="size-4 md:size-6 fill-white" />
                            <span className="text-white text-xs md:text-lg md:font-semibold">App Store</span>
                        </ButtonWidget>

                        <ButtonWidget className="flex items-center gap-x-2 bg-black rounded-full py-3 hover:bg-opacity-75" padding={true}>
                            <PlayStoreIcon className="size-4 md:size-6" />
                            <span className="text-white text-xs md:text-lg md:font-semibold">Play Store</span>
                        </ButtonWidget>
                    </div>
           
          </div>
        </div>
     <div className="flex items-center mt-5 md:mt-10 px-6">
      
            <a
              href="#"
              className="mx-2 text-black transition-colors duration-300"
              aria-label="Facebook"
            >
            <Image width={20} height={20} src="https://heyfood.africa/icons/new/facebook.svg" alt="Facebook Logo"/>
            </a>

            
            <a
              href="#"
              className="mx-2 text-black transition-colors duration-300"
              aria-label="Twitter"
            >
            <Image width={20} height={20} src="https://heyfood.africa/icons/new/twitter.svg" alt="Twitter Logo"/>

            
            </a>


            
            <a
              href="#"
              className="mx-2 text-black transition-colors duration-300"
              aria-label="Facebook"
            >
            <Image width={20} height={20} src="https://heyfood.africa/icons/new/linkedin.svg" alt="Twitter Logo"/>
        
            </a>

            
          
            <a
              href="#"
              className="mx-2 text-black transition-colors duration-300"
              aria-label="Facebook"
            >
           
           <Image width={20} height={20} src="https://heyfood.africa/icons/new/instagram.svg" alt="Twitter Logo"/>

            </a>

            
          
     </div>
     
      </div>
      <div className="mt-6 lg:mt-0 lg:flex-1">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">Get To know us</h3>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
About
            </a>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
             Linkln
            </a>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
              Blog
            </a>
          </div>
         

          <div>
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">Let Us Help You</h3>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
Support
            </a>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
             FAQs
            </a>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
              Restaurants Near Me
            </a>
          </div>
         


          <div>
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">
              Doing Business
            </h3>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
Become a Driver
            </a>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
             Become a partner
            </a>
            <a
              href="#"
              className="block mt-2 text-sm md:text-base lg:text-lg font-semibold text-heyfood"
            >
              Restaurants
            </a>
          </div>
         
         
        </div>
      </div>
    </div>
    <div>
      <p className="text-center text-gray-800 mt-10 md:mt-20">
        © 2024 Hey Technologies Limited. All rights reserved
      </p>
    </div>
  </div>
</footer>

  )
}
