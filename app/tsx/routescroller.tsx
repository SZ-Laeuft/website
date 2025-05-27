'use client'


import {Pagination, Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import Image from "next/image";
import Route_Rechts from "@/public/pictures/Strecke_rechts.jpg";
import Route_Links from "@/public/pictures/Strecke_links.jpg";

const images = [
    {src: Route_Rechts, alt:"Strecke rechts"},
    {src: Route_Links, alt:"Strecke links"}
];
const RouteSlider = () => {
    return (
        <div className="mt-4 border-0">
            <Swiper
                navigation={true}
                allowTouchMove={false}
                pagination={true}
                centeredSlides={true}
                loop={true}
                modules={[Navigation, Pagination]}

                className="customRouteSlider"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex w-full items-center justify-center h-[50vw] max-h-[500px] min-h-[200px]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="block w-full h-full object-contain mt-4"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default RouteSlider;