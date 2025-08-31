"use client";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Star, MessageSquare, Award, User } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const AwardsSection = () => {
    const employees = [
        {
            name: "Abhishek Birla",
            role: "Technology & Development",
            image: "/api/placeholder/80/80",
            testimonial:
                "Being part of BondsIndia is akin to stepping out into a breath of fresh air each day. Despite the prevailing circumstances, this organization has exceeded my expectations in every aspect. Even in our remote work setup, where many face undue stress and micromanagement, BondsIndia stands out as a beacon of support and trust.",
        },
        {
            name: "Rishabh",
            role: "Finance Team",
            image: "/api/placeholder/80/80",
            testimonial:
                "In my experience, a company's essence is defined by its receptiveness to employee feedback and proactive approach to addressing concerns. While challenges abound, it's our resilience and adaptability that set us apart. Working in the finance sector can sometimes feel like navigating a battlefield, but within the confines of this organization, I've found a haven of structured support.",
        },
        {
            name: "Abhishek Birla",
            role: "Technology & Development",
            image: "/api/placeholder/80/80",
            testimonial:
                "Being part of BondsIndia is akin to stepping out into a breath of fresh air each day. Despite the prevailing circumstances, this organization has exceeded my expectations in every aspect. Even in our remote work setup, where many face undue stress and micromanagement, BondsIndia stands out as a beacon of support and trust.",
        },
        {
            name: "Rishabh",
            role: "Finance Team",
            image: "/api/placeholder/80/80",
            testimonial:
                "In my experience, a company's essence is defined by its receptiveness to employee feedback and proactive approach to addressing concerns. While challenges abound, it's our resilience and adaptability that set us apart. Working in the finance sector can sometimes feel like navigating a battlefield, but within the confines of this organization, I've found a haven of structured support.",
        },
        {
            name: "Abhishek Birla",
            role: "Technology & Development",
            image: "/api/placeholder/80/80",
            testimonial:
                "Being part of BondsIndia is akin to stepping out into a breath of fresh air each day. Despite the prevailing circumstances, this organization has exceeded my expectations in every aspect. Even in our remote work setup, where many face undue stress and micromanagement, BondsIndia stands out as a beacon of support and trust.",
        },
        {
            name: "Rishabh",
            role: "Finance Team",
            image: "/api/placeholder/80/80",
            testimonial:
                "In my experience, a company's essence is defined by its receptiveness to employee feedback and proactive approach to addressing concerns. While challenges abound, it's our resilience and adaptability that set us apart. Working in the finance sector can sometimes feel like navigating a battlefield, but within the confines of this organization, I've found a haven of structured support.",
        },
    ];

    const awards = [
        {
            name: "TEA Excellence Award",
            image: "/assets/bfsi-1.png",
            year: "2024",
        },
        {
            name: "BFSI Innovation Award",
            image: "/assets/bfsi-2.png",
            year: "2024",
        },
        {
            name: "BSE Recognition",
            image: "/assets/bfsi-3.png",
            year: "2023",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Employee Testimonials */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <MessageSquare className="w-6 h-6 text-blue-600" />
                            <h2 className="text-3xl font-bold">
                                See what our employees Are Saying
                            </h2>
                        </div>
                    </div>

                    {/* <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"> */}
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 2 },
                        }}
                    >
                        {employees.map((employee, index) => (
                            <SwiperSlide key={`${employee.name}-${index}`}>
                                <Card key={index} className="shadow-lg h-90">
                                    <CardContent className="p-8">
                                        <div className="flex items-start space-x-4 mb-6">
                                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                                                <User className="w-8 h-8 text-blue-600" />
                                            </div>
                                            {/* <img
                                                src={employee.image}
                                                alt={employee.name}
                                                className="w-16 h-16 rounded-full object-cover"
                                            /> */}
                                            <div>
                                                <h3 className="font-bold text-lg">{employee.name}</h3>
                                                <p className="text-blue-600 font-medium">
                                                    {employee.role}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed italic">
                                            "{employee.testimonial}"
                                        </p>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* </div> */}
                </div>

                {/* Awards Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center space-x-2 mb-8">
                        <Award className="w-6 h-6 text-orange-500" />
                        <h2 className="text-3xl font-bold">
                            We've been noted with some awards
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {awards.map((award, index) => (
                            <Card
                                key={index}
                                className="shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <CardContent className="p-6 text-center">
                                    <img
                                        src={award.image}
                                        alt={award.name}
                                        className="w-full h-24 object-contain mb-4"
                                    />
                                    <h3 className="font-semibold text-lg mb-2">{award.name}</h3>
                                    <Badge variant="outline">{award.year}</Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
