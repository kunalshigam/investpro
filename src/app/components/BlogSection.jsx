'use client';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const BlogSection = () => {
    const blogPosts = [
        {
            title: "SBI Secures Rs 7,500 Crore with Tier-II Bonds for Expansion",
            excerpt:
                "SBI raises Rs 7,500 crore via Tier-II bonds with a 7.42% interest rate, reflecting investor confidence and supporting business expansion.",
            date: "26 Sep 2024",
            image: "/api/placeholder/400/200",
        },
        {
            title: "Taxation on Bonds in India: Bond Type & Taxation",
            excerpt:
                "Explore the key tax rules for bond investment in India. Understand how different bonds are taxed, including regular, tax-free, and zero-coupon bonds.",
            date: "25 Sep 2024",
            image: "/api/placeholder/400/200",
        },
        {
            title: "Understanding Government Securities: A Complete Guide",
            excerpt:
                "Learn about government securities, their types, benefits, and how they can form a stable foundation for your investment portfolio.",
            date: "23 Sep 2024",
            image: "/api/placeholder/400/200",
        },
                {
            title: "SBI Secures Rs 7,500 Crore with Tier-II Bonds for Expansion",
            excerpt:
                "SBI raises Rs 7,500 crore via Tier-II bonds with a 7.42% interest rate, reflecting investor confidence and supporting business expansion.",
            date: "26 Sep 2024",
            image: "/api/placeholder/400/200",
        },
        {
            title: "Taxation on Bonds in India: Bond Type & Taxation",
            excerpt:
                "Explore the key tax rules for bond investment in India. Understand how different bonds are taxed, including regular, tax-free, and zero-coupon bonds.",
            date: "25 Sep 2024",
            image: "/api/placeholder/400/200",
        },
        {
            title: "Understanding Government Securities: A Complete Guide",
            excerpt:
                "Learn about government securities, their types, benefits, and how they can form a stable foundation for your investment portfolio.",
            date: "23 Sep 2024",
            image: "/api/placeholder/400/200",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Read more from Blog</h2>
                </div>

                {/* Blog Posts Grid */}
                {/* <div className="grid md:grid-cols-3 gap-6 mb-8"> */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {blogPosts.map((post, index) => (
                        <SwiperSlide key={`${post.title}-${index}`}>
                            <Card
                                key={index}
                                className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                            >
                                {/* <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div> */}
                                <CardContent className="p-6">
                                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <Calendar className="w-4 h-4" />
                                        <span>{post.date}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* </div> */}

                {/* Explore Button */}
                <div className="text-center">
                    <Button className="bg-orange-500 hover:bg-orange-600 px-8">
                        EXPLORE OUR BLOG
                    </Button>
                </div>
            </div>
        </section>
    );
};
