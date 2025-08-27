'use client'
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Software Engineer",
        location: "Mumbai",
        rating: 5,
        text: "InvestPro has transformed my investment approach. The returns are consistent and the platform is incredibly user-friendly. I've earned over ₹50,000 in the past year!",
        avatar: "PS"
    },
    {
        name: "Rajesh Kumar",
        role: "Business Owner",
        location: "Delhi",
        rating: 5,
        text: "The expert guidance and curated investment options give me confidence. My portfolio has grown by 18% this year, beating all my previous investments.",
        avatar: "RK"
    },
    {
        name: "Anita Patel",
        role: "Doctor",
        location: "Bangalore",
        rating: 5,
        text: "As a busy professional, I appreciate how InvestPro handles everything. The automated investing and regular updates keep me informed without the hassle.",
        avatar: "AP"
    },
    {
        name: "Vikram Singh",
        role: "Chartered Accountant",
        location: "Pune",
        rating: 4,
        text: "The risk assessment tools are amazing! They help me balance my portfolio while still ensuring solid returns. Highly recommended.",
        avatar: "VS"
    },
    {
        name: "Neha Verma",
        role: "Marketing Manager",
        location: "Hyderabad",
        rating: 5,
        text: "I love how transparent the platform is. I can track every investment in real time, and my portfolio has grown steadily.",
        avatar: "NV"
    },
    {
        name: "Sanjay Mehta",
        role: "Entrepreneur",
        location: "Ahmedabad",
        rating: 4,
        text: "InvestPro has simplified investing for me. I used to be skeptical, but now I see my savings working much harder than in a fixed deposit.",
        avatar: "SM"
    },
    {
        name: "Kiran Nair",
        role: "Teacher",
        location: "Kochi",
        rating: 5,
        text: "The educational resources are fantastic. I’ve learned so much about bonds and securities while earning better returns than my PPF account.",
        avatar: "KN"
    },
    {
        name: "Rohit Agarwal",
        role: "Consultant",
        location: "Kolkata",
        rating: 5,
        text: "The app is sleek, intuitive, and very reliable. I set up automatic investments and now watch my portfolio grow stress-free.",
        avatar: "RA"
    },
    {
        name: "Meera Iyer",
        role: "Data Scientist",
        location: "Chennai",
        rating: 5,
        text: "What I love most is the customer support. Any doubts I’ve had were answered quickly and clearly. Truly trustworthy!",
        avatar: "MI"
    },
    {
        name: "Arjun Desai",
        role: "Freelancer",
        location: "Goa",
        rating: 4,
        text: "Perfect for freelancers like me who don’t have predictable income. I can invest flexibly and still get strong returns.",
        avatar: "AD"
    }
];


const partners = [
    { name: "SEBI", description: "Regulated & Compliant" },
    { name: "HDFC", description: "Banking Partner" },
    { name: "ICICI", description: "Trading Partner" },
    { name: "NSE", description: "Exchange Partner" }
];

export const TrustSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                        Trusted by Thousands
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Join our community of satisfied investors who have achieved their financial goals with InvestPro.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={`${testimonial.name}-${index}`}>
                            <Card
                                className={`card-hover fade-in-up stagger-${index + 1} h-80 w-full`} // fixed height
                            >
                                <CardContent className="p-6 h-full flex flex-col justify-between">
                                    <div className="space-y-4">
                                        {/* Rating */}
                                        <div className="flex items-center space-x-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-green-500 text-green-500"
                                                />
                                            ))}
                                        </div>

                                        {/* Quote */}
                                        <div className="relative flex-1">
                                            <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                                            <p className="text-muted-foreground italic pl-6">
                                                "{testimonial.text}"
                                            </p>
                                        </div>

                                        {/* Profile */}
                                        <div className="flex items-center space-x-3 pt-4 border-t border-border">
                                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                                                {testimonial.avatar}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-foreground">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {testimonial.role}, {testimonial.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                        // <SwiperSlide key={`${testimonial.name}-${index}`}>
                        //     <Card
                        //         className={`card-hover fade-in-up stagger-${index + 1}`}
                        //     >
                        //         <CardContent className="p-6">
                        //             <div className="space-y-4">
                        //                 <div className="flex items-center space-x-1">
                        //                     {[...Array(testimonial.rating)].map((_, i) => (
                        //                         <Star
                        //                             key={i}
                        //                             className="w-4 h-4 fill-primary text-primary"
                        //                         />
                        //                     ))}
                        //                 </div>

                        //                 <div className="relative">
                        //                     <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                        //                     <p className="text-muted-foreground italic pl-6">
                        //                         "{testimonial.text}"
                        //                     </p>
                        //                 </div>

                        //                 <div className="flex items-center space-x-3 pt-4 border-t border-border">
                        //                     <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                        //                         {testimonial.avatar}
                        //                     </div>
                        //                     <div>
                        //                         <div className="font-semibold text-foreground">
                        //                             {testimonial.name}
                        //                         </div>
                        //                         <div className="text-sm text-muted-foreground">
                        //                             {testimonial.role}, {testimonial.location}
                        //                         </div>
                        //                     </div>
                        //                 </div>
                        //             </div>
                        //         </CardContent>
                        //     </Card>
                        // </SwiperSlide>
                    ))}
                </Swiper>
                <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-3xl p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            Regulated & Secure
                        </h3>
                        <p className="text-muted-foreground">
                            We partner with India's leading financial institutions to ensure your investments are safe and compliant.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {partners.map((partner) => (
                            <div key={partner.name} className="text-center">
                                <div className="bg-primary rounded-lg p-6 shadow-sm border border-border mb-3">
                                    <div className="text-lg font-bold text-white">
                                        {partner.name}
                                    </div>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    {partner.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
