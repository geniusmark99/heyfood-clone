'use client';
import { useState,useEffect } from "react";
import HamburgerIcon from './Icons/HamburgerIcon';
import MapIcon from './Icons/MapIcon';
import CartIcon from './Icons/CartIcon';
import HeyFoodIcon from './Icons/HeyFoodIcon';
import SortIcon  from './Icons/SortIcon';
import ButtonWidget from './Widgets/ButtonWidget';
import SearchWidget from './Widgets/SearchWidget';
import SidebarWidget from './Widgets/SidebarWidget';
import LocationWidget from './Widgets/LocationWidget';
import SigninWidget from './Widgets/SigninWidget';
import CartSidebarWidget from './Widgets/CartSidebarWidget';
import PortalWidget from './Widgets/PortalWidget';
import SortWidget from './Widgets/SortWidget';


import {motion} from 'framer-motion';

export default function HeaderWidget() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [portalElement, setPortalElement] = useState(null);


  const handleOpenSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOpenLocation = () => {
    setLocationOpen(!isLocationOpen);
  };


  const handleSignin = () => {
    setSigninOpen(!isSigninOpen);
  };

  const handleCart = () => {
    setCartOpen(!isCartOpen);
  };


  useEffect(() => {
    setPortalElement(document.getElementById('sort-widget'));
  }, []);

  useEffect(() => {


    document.body.classList.add("overflow-x-hidden");

    if (isSidebarOpen || isLocationOpen || isSigninOpen || isCartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleEscapeKeyDown = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
        setLocationOpen(false);
        setSigninOpen(false);
        setCartOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKeyDown);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyDown);
    };

  }, [isSidebarOpen,isLocationOpen,isSigninOpen,isCartOpen]);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };



  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return <>

<motion.header className='flex flex-col z-[800] p-4 lg:px-12 items-center justify-between border-b shadow-sm fixed w-full bg-white'
  initial={{ y: 0 }}
  animate={{ y: isHidden ? -80 : 0 }} // Adjust -80 to the height of your header
  transition={{ type: 'tween', duration: 0.3 }}
> 
<nav className='flex items-center justify-between w-full'> 
<div className='flex gap-x-4 items-center'>
<div className='flex justify-between w-[200px] lg:w-[300px] items-center'>

<button className="outset-none" onClick={handleOpenSidebar}>
<HamburgerIcon className="size-6 fill-black"/>
</button>

<a href="#" className="hidden lg:block outset-none">
<HeyFoodIcon className="size-10"/>
</a>

<ButtonWidget padding={true} className="bg-white lg:w-auto hover:bg-gray-100 rounded-md transition-all outset-none px-1" 
onClick={handleOpenLocation}
>
<div className="flex item-center gap-x-2">
<MapIcon className="size-6"/>
<span className="font-semibold">Set Location</span>
</div>
</ButtonWidget>
</div>


<div className="hidden lg:flex ml-[180px]">
<SearchWidget/>
</div>
</div>

<div className="flex items-center gap-x-5 justify-around">
<ButtonWidget onClick={handleSignin} padding={true} className="uppercase font-bold text-sm hidden lg:flex hover:bg-gray-200/50 rounded-[4px] py-2.5 px-2 transition-all outset-none">
SIGN IN
</ButtonWidget>

<ButtonWidget onClick={handleCart} padding={true} className="flex justify-center lg :py-2 px-5 lg:gap-x-2 items-center bg-black hover:bg-heyfood rounded-3xl">
<CartIcon className="size-5 md:size-6 fill-white"/>
<div className="hidden lg:flex item-center text-sm text-white font-bold uppercase">
Cart  • 0
</div>
</ButtonWidget>
</div>



</nav>

<nav className="w-full lg:hidden mt-4">
<div className="flex w-full justify-end gap-x-3">
<SearchWidget className=""/>
<div className="">
<ButtonWidget className="outset-border shadow-sm border size-10 flex justify-center items-center rounded-full text-center bg-gray-100/50 hover:bg-gray-200/50">
<SortIcon className="size-6"/>
</ButtonWidget>
</div>


</div>
</nav>

</motion.header>

<PortalWidget>
  <SortWidget stick={isHidden}/>
</PortalWidget>

{isSidebarOpen ? <SidebarWidget isOpen={isSidebarOpen} onClose={handleCloseSidebar}/> : ''}
{isLocationOpen ? <LocationWidget isOpen={isLocationOpen} onClose={handleOpenLocation} /> : ''}
{isSigninOpen ? <SigninWidget isOpen={isSigninOpen} onClose={handleSignin} /> : ''}
{isCartOpen ? <CartSidebarWidget isOpen={isCartOpen} onClose={handleCart} /> : ''}

<motion.button onClick={handleCart} 
  initial={{ opacity:0,scale:0 }}
  animate={{ opacity:isHidden ? 1 : 0,scale: isHidden ? 1.2 : 0, }} // Adjust -80 to the height of your header
  transition={{ type: 'tween', duration: 0.3 }}
className="fixed z-[1000] shadow-lg outset-none bottom-4 right-6 size-12 bg-black rounded-full flex justify-center items-center">
  <CartIcon className="fill-white size-6"/>
</motion.button>
    </>
  
}
