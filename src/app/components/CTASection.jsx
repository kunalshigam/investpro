import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <>
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Market Insights</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the latest bond market updates, investment tips, and exclusive deals directly to your inbox
          </p>
          <div className="max-w-md mx-auto flex space-x-2">
            <Input 
              placeholder="Enter your email" 
              className="bg-white text-black"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Ready to Start Investing?</h2>
              <p className="text-lg mb-6 opacity-90">
                Join thousands of smart investors who are building wealth through bonds. 
                Start your investment journey today with as little as ₹10,000.
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg" 
                  className="bg-white text-orange-500 hover:bg-gray-100 font-semibold"
                >
                  Start Investing Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-accent"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Call us at</div>
                  <div className="text-lg">+91-8882-200-300</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <div>
                  <div className="font-semibold">Email us at</div>
                  <div className="text-lg">info@bondsindia.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
