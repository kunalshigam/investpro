import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Zap, Shield, Heart, TrendingUp } from "lucide-react";

export const ValueProposition = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="value-proposition-title">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700">BONDSINDIA DYNAMICS</Badge>
          <h2 id="value-proposition-title" className="text-4xl font-bold mb-4">
            Embracing future of investments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Introducing our cutting-edge Online Bond Platform paving the way for fixed-income 
            securities investment, offering investors a streamlined and efficient avenue to access Bond market.
          </p>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Zap, color: "orange", title: "Fast" },
            { icon: Shield, color: "green", title: "Safe" },
            { icon: Heart, color: "blue", title: "Trust" },
            { icon: TrendingUp, color: "purple", title: "Value" },
          ].map(({ icon: Icon, color, title }, idx) => (
            <div key={idx} className="text-center space-y-4">
              <div
                className={`w-16 h-16 bg-${color}-100 rounded-full flex items-center justify-center mx-auto`}
                aria-hidden="true"
              >
                <Icon className={`w-8 h-8 text-${color}-500`} />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>

        {/* Three Column Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Our Motto */}
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">OUR MOTTO</h4>
              <h3 className="text-xl font-bold mb-4">Building financial growth</h3>
              <p className="text-muted-foreground">
                Our motto is to nurture your financial growth through Bonds and assist you in your wealth journey.
              </p>
            </CardContent>
          </Card>

          {/* Where You Can Invest */}
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">WHERE YOU CAN INVEST?</h4>
              <h3 className="text-xl font-bold mb-4">Our verticals include</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">Bonds</Button>
                <Button variant="outline" size="sm">GSEC Strips</Button>
                <Button variant="outline" size="sm">IPO - Initial Public Offering</Button>
                <Button variant="outline" size="sm">54EC Bonds</Button>
              </div>
            </CardContent>
          </Card>

          {/* Our Process */}
          <Card className="border-none shadow-sm">
            <CardContent className="p-6">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">OUR PROCESS</h4>
              <h3 className="text-xl font-bold mb-4">Invest in max 7 minutes of time!</h3>
              <div className="flex items-center justify-between">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  START INVEST NOW
                </Button>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
