import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ButtonWidget from './ButtonWidget';
import BannerWidget from './BannerWidget';



export default function RestaurantWidget() {

    const foods = [
        { name: 'Rice', image: '../images/rice.svg', onClick: () => { alert('Rice'); } },
        { name: 'Chicken', image: '../images/chicken.svg', onClick: () => { alert('Chicken'); } },
        { name: 'Juice', image: '../images/juice.svg', onClick: () => { alert('Rice'); } },
        { name: 'Shawarma', image: '../images/shawarma.svg', onClick: () => { alert('Rice'); } },
        { name: 'Amala', image: '../images/amala_camera.svg', onClick: () => { alert('Rice'); } },
        { name: 'Fastfood', image: '../images/fastfood.svg', onClick: () => { alert('Rice'); } },
        { name: 'Goat Meat', image: '../images/goat_meat.svg', onClick: () => { alert('Rice'); } },
        { name: 'Grils', image: '../images/grills.svg', onClick: () => { alert('Rice'); } },
        { name: 'Soup Bowl', image: '../images/soup_bowl.svg', onClick: () => { alert('Rice'); } },
        { name: 'Grocery', image: '../images/grocery.svg', onClick: () => { alert('Rice'); } },
        { name: 'Burger', image: '../images/burger.svg', onClick: () => { alert('Rice'); } },
        { name: 'Snacks', image: '../images/snack_camera.svg', onClick: () => { alert('Rice'); } },
        { name: 'Smothies', image: '../images/smothies.svg', onClick: () => { alert('Rice'); } },
    ];


    return <>

        <div className="w-full mx-auto mt-5">
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                pagination={{ clickable: true }}
                navigation
                breakpoints={{
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 7,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 10,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 13,
                    },
                }}
            >
                {foods.map((food, index) => (
                    <SwiperSlide key={index}>
                        <ButtonWidget onClick={food.onClick} className="flex flex-col items-center hover:bg-gray-100 py-2 px-3 rounded-md">
                            <Image priority width={500} height={200} src={food.image} alt={food.name} className="size-12" />
                            <span className="mt-2 text-base font-[500] whitespace-nowrap">{food.name}</span>
                        </ButtonWidget>

                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
        <BannerWidget />

    </>
}
