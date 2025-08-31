'use client';

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const HowItWorks = () => {
  const categories = [
    "Latest Arrivals",
    "Tax Free",
    "Corporate",
    "Government",
    "PSU",
    "Zero Coupons",
    "Sovereign Gold",
    "Perpetual",
    "Convertible",
  ];

  const bonds = [
    {
      name: "GOVERNMENT OF INDIA",
      logo: "https://placehold.co/60x60?text=GOI",
      seal: "SOVEREIGN",
      price: "₹ 69.3503",
      coupon: "0%",
      yield: "5.9%",
      frequency: "-1",
      maturity: "16 Dec 2031",
      issuer: "GOI STRIPS",
    },
    {
      name: "VEDIKA CREDIT CA...",
      logo: "https://placehold.co/60x60?text=VEDIKA",
      seal: "A",
      price: "₹ 94.3325",
      coupon: "10.25%",
      yield: "13.2%",
      frequency: "QUARTERLY",
      maturity: "25 Mar 2027",
      issuer: "VEDIKA CREDIT",
    },
    {
      name: "POWER FINANCE CO...",
      logo: "https://placehold.co/60x60?text=PFC",
      seal: "AA+",
      price: "₹ 98.1250",
      coupon: "8.75%",
      yield: "9.1%",
      frequency: "ANNUAL",
      maturity: "15 Jan 2029",
      issuer: "POWER FINANCE",
    },
    {
      name: "TATA CAPITAL FIN...",
      logo: "https://placehold.co/60x60?text=TATA",
      seal: "AAA",
      price: "₹ 101.4532",
      coupon: "7.85%",
      yield: "8.2%",
      frequency: "QUARTERLY",
      maturity: "10 Nov 2028",
      issuer: "TATA CAPITAL",
    },
    {
      name: "L&T FINANCE LTD...",
      logo: "https://placehold.co/60x60?text=L%26T",
      seal: "AA",
      price: "₹ 97.8765",
      coupon: "9.40%",
      yield: "10.1%",
      frequency: "SEMI-ANNUAL",
      maturity: "03 May 2026",
      issuer: "L&T FINANCE",
    },
    {
      name: "INDIABULLS HOUSING...",
      logo: "https://placehold.co/60x60?text=IBH",
      seal: "A+",
      price: "₹ 95.1200",
      coupon: "11.00%",
      yield: "12.5%",
      frequency: "MONTHLY",
      maturity: "01 Apr 2027",
      issuer: "INDIABULLS",
    },
    {
      name: "RELIANCE RETAIL VEN...",
      logo: "https://placehold.co/60x60?text=RRVL",
      seal: "AAA",
      price: "₹ 100.0000",
      coupon: "7.20%",
      yield: "7.6%",
      frequency: "ANNUAL",
      maturity: "12 Dec 2030",
      issuer: "RELIANCE RETAIL",
    },
    {
      name: "HDFC BANK LTD...",
      logo: "https://placehold.co/60x60?text=HDFC",
      seal: "AAA",
      price: "₹ 99.5000",
      coupon: "6.85%",
      yield: "7.1%",
      frequency: "QUARTERLY",
      maturity: "20 Sep 2029",
      issuer: "HDFC BANK",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2">SEE OUR BEST LIST</h3>
          <h2 className="text-3xl font-bold mb-4">
            We have curated investments based on categories
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-orange-500 hover:bg-orange-600 text-white" : ""}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Swiper Carousel */}
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
          {bonds.map((bond, index) => (
            <SwiperSlide key={`${bond.name}-${index}`}>
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <img src={bond.logo} alt={bond.name} className="w-12 h-12 rounded" />
                      <div>
                        <h3 className="font-semibold text-lg">{bond.name}</h3>
                        <Badge variant="outline" className="text-xs">
                          {bond.seal}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Price</span>
                      <div className="font-semibold">{bond.price}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Coupon</span>
                      <div className="font-semibold">{bond.coupon}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Yield</span>
                      <div className="font-semibold text-green-600">{bond.yield}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">IP Frequency</span>
                      <div className="font-semibold">{bond.frequency}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Maturity Date</span>
                      <div className="font-semibold">{bond.maturity}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Issuer</span>
                      <div className="font-semibold">{bond.issuer}</div>
                    </div>
                  </div>

                  <Button className="bg-orange-500 hover:bg-orange-600 px-8 w-full">
                    KNOW MORE
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}


        </Swiper>
      </div>
    </section>
  );
};
