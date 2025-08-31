'use client';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Calendar, Download } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const ResearchReports = () => {
    const reports = [
        {
            title: "Daily Market Report",
            date: "29 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Weekly Bond Analysis",
            date: "26 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Market Outlook Q3 2024",
            date: "22 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Daily Market Report",
            date: "29 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Weekly Bond Analysis",
            date: "26 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Market Outlook Q3 2024",
            date: "22 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Daily Market Report",
            date: "29 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Weekly Bond Analysis",
            date: "26 Jul 2024",
            downloadUrl: "#"
        },
        {
            title: "Market Outlook Q3 2024",
            date: "22 Jul 2024",
            downloadUrl: "#"
        }
    ];

    return (
        <section className="py-16 bg-white" aria-label="Research Reports Section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Research Reports</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Adroit and sharp observations detailing the temperament of the market.
                    </p>
                </div>

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
                    {reports.map((report, index) => (
                        <SwiperSlide key={`${report.title}-${index}`}>
                            <Card
                                key={index}
                                className="shadow-lg hover:shadow-xl transition-shadow"
                                role="region"
                                aria-labelledby={`report-title-${index}`}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <Download className="w-8 h-8 text-blue-600" aria-hidden="true" />
                                        <div>
                                            <h3 id={`report-title-${index}`} className="font-semibold">{report.title}</h3>
                                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4" aria-hidden="true" />
                                                <time dateTime={new Date(report.date).toISOString()}>{report.date}</time>
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        as="a"
                                        href={report.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                        aria-label={`Download ${report.title}`}
                                    >
                                        <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                                        Download
                                    </Button>
                                </CardContent>
                            </Card>
                        </SwiperSlide>

                    ))}
                </Swiper>
                {/* </div> */}

                <div className="text-center">
                    <Button className="bg-orange-500 hover:bg-orange-600 px-8">
                        See All Reports
                    </Button>
                </div>
            </div>
        </section>
    );
};
