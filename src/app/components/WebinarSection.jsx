import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock, Monitor } from "lucide-react";

export const WebinarsSection = () => {
  const upcomingWebinar = {
    title: "JOIN OUR EXCLUSIVE WEBINAR ON BALANCING HEALTH & WEALTH",
    date: "Fri, 28th Jun 2024",
    time: "AT 4:00 PM IST",
    image: "/api/placeholder/600/300"
  };

  const features = [
    "Live Q&A",
    "New Features", 
    "Cool Tips & Suggestions",
    "Market Insights"
  ];

  const hasUpcoming = !!upcomingWebinar && upcomingWebinar.title;

  return (
    <section className="py-16 bg-white" aria-labelledby="webinars-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="webinars-title" className="text-3xl font-bold mb-4">Our Webinars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Occasionally we will set up webinars or Q&A sessions; anyone can join by registering with us and solve your queries.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" role="list">
          {features.map((feature, index) => (
            <Badge key={index} variant="outline" className="px-4 py-2" role="listitem">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Upcoming Webinar */}
        {hasUpcoming ? (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-green-100 text-green-700 mb-4">Upcoming</Badge>
              <h3 className="text-2xl font-bold mb-6">{upcomingWebinar.title}</h3>
            </div>

            <Card className="shadow-lg overflow-hidden">
              <div className="aspect-video overflow-hidden">
                {/* <img 
                  src={upcomingWebinar.image} 
                  alt="Webinar Banner"
                  className="w-full h-full object-cover"
                /> */}
                <img
                src='../assets/personalisation.jpg'
                alt="Webinar"
                className="w-full h-full object-cover px-6"
              />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      <time dateTime="2024-06-28" className="font-medium">{upcomingWebinar.date}</time>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" aria-hidden="true" />
                      <span className="font-medium">{upcomingWebinar.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                      RESERVE MY SPOT
                    </Button>
                    <Monitor className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* No Upcoming Section */
          <div className="text-center mt-8 p-8 bg-gray-50 rounded-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-muted-foreground mb-4">
              No Upcoming Webinar
            </h3>
            <Button variant="outline" aria-label="Go to webinars page">
              GO TO WEBINARS
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
