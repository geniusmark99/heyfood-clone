'use client'
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerPopupWidget from './BannerPopupWidget';
import Image from "next/image";
import 'swiper/css';


export default function BannerWidget() {


    const [showModal, setShowModal] = useState(false);
    const [popupContent, setPopupContent] = useState('');

    const handleClick = (content) => {
        setPopupContent(content);
        setShowModal(true);
    };

    useEffect(() => {
        if (showModal) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        const handleEscapeKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowModal(false);
            }
        };

        document.addEventListener("keydown", handleEscapeKeyDown);

        return () => {
            document.removeEventListener("keydown", handleEscapeKeyDown);
        };

    }, [showModal]);


    const banners = [
        { name: { name: 'Feedwell', image: '/images/banners/banner-1.png', desc: 'Feedwell' }, image: '/images/banners/banner-1.png' },
        { name: { name: 'Slayers Buka', image: '/images/banners/banner-2.png', desc: '10%' }, image: '/images/banners/banner-2.png' },
        { name: { name: 'Scents addiction', image: '/images/banners/banner-3.png', desc: 'Scents addiction' }, image: '/images/banners/banner-3.png' },
        { name: { name: 'Oh mobility', image: '/images/banners/banner-4.png', desc: 'Oh mobility' }, image: '/images/banners/banner-4.png' },
        { name: { name: 'Shops by Heyfood', image: '/images/banners/banner-5.png', desc: 'You can now order for anything on Heyfood and have it delivered to your doorstep, not just food!' }, image: '/images/banners/banner-5.png' },
        { name: { name: 'Heyfood is in PH and Benin City! 🥳💃', image: '/images/banners/banner-6.png', desc: 'Let your friends in Benin and Port Harcourt know that Heyfood is now in their city! Share your referral code with them and get N500 in your wallet! 🤭' }, image: '/images/banners/banner-6.png' },
    ];




    return <>

        <div className="w-full mt-10">
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                breakpoints={{

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 1,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3.5,
                    },
                }}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className='w-9/12 mx-1 md:mx-4'>
                        <button className='outset-none w-full mx-4'
                            onClick={() => handleClick(banner.name)}
                        >

                            <Image priority width={500} height={500} alt={banner.name} src={banner.image} className='rounded-md w-[90%] lg:w-full' draggable="false" />

                        </button>

                    </SwiperSlide>
                ))}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </Swiper>

            <BannerPopupWidget showModal={showModal} setShowModal={setShowModal} content={popupContent} />

        </div>

    </>

}
