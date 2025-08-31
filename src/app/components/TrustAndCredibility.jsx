"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Quote, Star, Users, Target, Award, Clock } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const TrustAndCredebility = () => {
  const features = [
    {
      icon: Users,
      title: "100,000+ Happy Investors",
      description: "Join our community of satisfied investors who trust us with their portfolio",
    },
    {
      icon: Target,
      title: "Precise Investment Matching",
      description: "Our AI algorithms match you with the most suitable bonds for your risk profile",
    },
    {
      icon: Award,
      title: "Award-Winning Platform",
      description: "Recognized as the leading digital bond investment platform in India",
    },
    {
      icon: Clock,
      title: "24/7 Market Monitoring",
      description: "Round-the-clock monitoring ensures you never miss investment opportunities",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Senior Manager, TCS",
      content:
        "BondsIndia has transformed my investment strategy. The platform is intuitive and the returns are excellent.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      content:
        "I've been investing through BondsIndia for 2 years. The transparency and ease of use is unmatched.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Financial Consultant",
      content:
        "As a financial advisor, I recommend BondsIndia to all my clients. The bond selection is comprehensive.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Manager, TCS",
      content:
        "BondsIndia has transformed my investment strategy. The platform is intuitive and the returns are excellent.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Business Owner",
      content:
        "I've been investing through BondsIndia for 2 years. The transparency and ease of use is unmatched.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Financial Consultant",
      content:
        "As a financial advisor, I recommend BondsIndia to all my clients. The bond selection is comprehensive.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white" aria-label="Trust and Testimonials Section">
      <div className="container mx-auto px-4">
        {/* Trust Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map(({ icon: Icon, title, description }, index) => (
            // <SwiperSlide key={`${report.title}-${index}`}>
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-700">INVESTOR TESTIMONIALS</Badge>
          <h2 className="text-3xl font-bold mb-4">What Our Investors Say</h2>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mb-12"> */}
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
          {testimonials.map(({ name, role, content, rating }, index) => (
            <SwiperSlide key={`${name}-${index}`}>
              <Card key={index} className="shadow-lg" role="region" aria-label={`Testimonial by ${name}`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4" aria-label={`${rating} star rating`}>
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-muted-foreground mb-4" aria-hidden="true" />
                  <p className="text-muted-foreground mb-6">&quot;{content}&quot;</p>
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-muted-foreground">{role}</div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}

        {/* Compliance Badges */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Regulated &amp; Compliant</h3>
          <div className="flex justify-center items-center space-x-8 opacity-60 flex-wrap gap-4">
            <Badge variant="outline" className="text-lg py-2 px-4">
              SEBI Registered
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              BSE Approved
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              NSE Partner
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              RBI Compliant
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
