"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Lock } from "lucide-react";

export default function CardCarousal({ data }) {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
            }}
            loop
            className="pb-8"
        >
            {data?.map((benefit, index) => (
                <SwiperSlide key={`${benefit.title}-${index}`}>
                    <Card
                        className={`card-hover bg-card border-0 fade-in-up stagger-${index + 1}`}
                    >
                        <CardHeader className="text-center pb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <benefit.icon className="w-8 h-8 text-white" />
                            </div>
                            <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                {benefit.description}
                            </p>
                            <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-3 py-1 text-sm font-medium text-success">
                                <Lock className="w-3 h-3" />
                                <span>{benefit.feature}</span>
                            </div>
                        </CardContent>
                    </Card>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}
