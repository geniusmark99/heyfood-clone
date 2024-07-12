import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function FoodListWidget({ FoodTypeDesc }) {

    const foodStores = [
        { rating_count: '5000+', rating: 3.5, name: { name: 'Feedwell', image: '../images/banners/banner-1.png', desc: 'Feedwell' }, image: '../images/banners/banner-1.png' },
        { rating_count: "10000+", rating: 4.0, name: { name: 'Slayers Buka', image: '../images/banners/banner-2.png', desc: '10%' }, image: '../images/banners/banner-2.png' },
        { rating_count: '20000+', rating: 5.0, name: { name: 'Scents addiction', image: '../images/banners/banner-3.png', desc: 'Scents addiction' }, image: '../images/banners/banner-3.png' },
        { rating_count: '40+', rating: 2.0, name: { name: 'Oh mobility', image: '../images/banners/banner-4.png', desc: 'Oh mobility' }, image: '../images/banners/banner-4.png' },
        { rating_count: '100+', rating: 3.0, name: { name: 'Shops by Heyfood', image: '../images/banners/banner-5.png', desc: 'You can now order for anything on Heyfood and have it delivered to your doorstep, not just food!' }, image: '../images/banners/banner-5.png' },
        { rating_count: '3000+', rating: 4.0, name: { name: 'Heyfood is in PH and Benin City! 🥳💃', image: '../images/banners/banner-6.png', desc: 'Let your friends in Benin and Port Harcourt know that Heyfood is now in their city! Share your referral code with them and get N500 in your wallet! 🤭' }, image: '../images/banners/banner-6.png' },
    ];


    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>{FoodTypeDesc}</h1>
                <span className='font-semibold text-lg'>Sell all</span>
            </div>
            <div className='h-[20vh] mt-10'>

                <Swiper
                    spaceBetween={1}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        600: {
                            slidesPerView: 1.5,
                            spaceBetween: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 1,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {foodStores.map((foodstore, index) => (
                        <SwiperSlide key={index} className='w-9/12 mx-1 md:mx-4 my-2'>
                            <div className='flex flex-col my-4'>
                                <div className='rounded-md overflow-hidden p-3 h-[18vh] w-full relative bg-no-repeat bg-cover gap-y-10 flex justify-start items-start flex-col bg-opacity-10' style={{ backgroundImage: `url(${foodstore.image})` }}>
                                    <div className='flex items-center gap-x-1 py-1.5 px-2 rounded-full text-sm font-semibold bg-black text-white bg-opacity-90'>
                                        <svg
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            className='size-3 fill-white rotate-90'
                                        >
                                            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                                        </svg>
                                        10% off order
                                    </div>

                                    <div className='bg-red-600 text-sm font-semibold text-red-300 rounded-md py-1 px-2'>
                                        Currently closed
                                    </div>
                                </div>

                                <div className='mt-3 flex flex-col gap-y-2'>
                                    <h1 className='font-semibold text-xl md:text-2xl'>
                                        {foodstore.name.name}
                                    </h1>
                                    <div className='flex gap-x-5'>
                                        <div className='flex items-center gap-x-1'>

                                            <svg
                                                className='size-3 fill-green-500'
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                            >

                                                <g clipPath="url(#clip0_10996_11354)">
                                                    <path
                                                        d="M15.9644 6.14218C15.8788 5.87882 15.6512 5.68688 15.3772 5.64711L10.7305 4.97199L8.65232 0.76097C8.52978 0.512684 8.27689 0.355469 8.00004 0.355469C7.72314 0.355469 7.47025 0.512684 7.34775 0.76097L5.26976 4.97194L0.622883 5.64707C0.348895 5.68688 0.121219 5.87882 0.0356762 6.14214C-0.0498662 6.4055 0.0214676 6.69457 0.219757 6.88782L3.58224 10.1651L2.78816 14.7936C2.74137 15.0665 2.85353 15.3423 3.07752 15.505C3.20423 15.5971 3.35432 15.644 3.50514 15.644C3.62089 15.644 3.73713 15.6164 3.84357 15.5604L7.99999 13.3754L12.1564 15.5604C12.2634 15.6167 12.3807 15.6435 12.4968 15.644C12.8981 15.6434 13.2232 15.318 13.2232 14.9166C13.2232 14.8607 13.2169 14.8063 13.205 14.754L12.4178 10.1651L15.7803 6.88782C15.9786 6.69457 16.0499 6.4055 15.9644 6.14218Z"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_10996_11354">
                                                        <rect width={16} height={16} fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>

                                            {foodstore.rating}
                                        </div>

                                        <span>
                                            {foodstore.rating_count} Ratings
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
            </div>

        </div>
    )
}
