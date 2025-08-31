'use client';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Phone, Mail, QrCode, Headphones, PhoneCall, Clock } from "lucide-react";
import { useState } from "react";

export const NewsletterAndContact = () => {
  const [email, setEmail] = useState("");
  const [callbackData, setCallbackData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const bondClassifications = [
    "Public Sector Bonds", "Corporate Bonds", "Tax Free Bonds", "Government Bonds",
    "Zero Coupons Bonds", "Convertible Bonds", "Sovereign Gold Bonds", "Perpetual Bonds",
    "Green Bonds", "Covered Bonds", "State Development Loans", "Market Linked Debenture",
    "Debt Mutual Fund", "Non-Convertible Debenture", "What are Bonds"
  ];

  // Subscribe handler
  const handleSubscribe = () => {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  // Callback form submit handler
  const handleSubmit = () => {
    const { name, phone, email: callbackEmail } = callbackData;
    if (!name.trim() || !phone.trim() || !callbackEmail.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    // Replace this with real API submission
    alert(`Callback request submitted:\nName: ${name}\nPhone: ${phone}\nEmail: ${callbackEmail}`);
    setCallbackData({ name: "", phone: "", email: "" });
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-white" aria-label="Newsletter Subscription">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Running out of time? Stay in the Loop!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Make sure to subscribe for the latest updates before anybody else.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex space-x-2 mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-black"
                  aria-label="Email Address"
                />
                <Button
                  className="bg-orange-500 hover:bg-orange-600 px-6"
                  onClick={handleSubscribe}
                  aria-label="Subscribe to Newsletter"
                >
                  SUBSCRIBE NOW
                </Button>
              </div>
              <p className="text-sm opacity-75">
                By clicking on 'Subscribe Now', I agree to BondsIndia's{" "}
                <a href="#" className="underline">Privacy Notice</a> and{" "}
                <a href="#" className="underline">Terms of Use</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Company Info */}
      <section className="py-16 bg-gray-900 text-white" aria-label="Contact and Company Information">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-orange-500 text-2xl font-bold">BONDS</span>
                <span className="text-blue-400 text-2xl font-bold">INDIA</span>
                <Badge className="ml-4 bg-blue-600">#BondsSimplified</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <QrCode className="w-16 h-16" aria-hidden="true" />
                <div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong>BondsIndia</strong> is a brand name of Launchpad Fintech Private Limited, 
                    an e-business platform for Fixed Income securities that uses technology as a means 
                    to provide quality & real-time financial solutions to users.
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" aria-hidden="true" />
                  <a href="tel:8882200300" className="hover:text-orange-500" aria-label="Call +91-8882-200-300">
                    +91-8882-200-300
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" aria-hidden="true" />
                  <a href="mailto:info@bondsindia.com" className="hover:text-orange-500" aria-label="Email info@bondsindia.com">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            {/* Products and Resources */}
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Products</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">Bonds</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">IPO</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">GSEC Strips</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">54EC Bonds</a></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">Blog</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">FD Calculator</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">Reports</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">FAQs</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-600">Contact us</a></li>
                </ul>
              </div>
            </div>

            {/* Call Back Form */}
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Headphones className="w-6 h-6 text-orange-500" aria-hidden="true" />
                    <h3 className="font-bold text-lg text-white">Request a Call Back</h3>
                  </div>

                  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4" aria-label="Callback Request Form">
                    <Input
                      placeholder="Name*"
                      value={callbackData.name}
                      onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white"
                      aria-required="true"
                      aria-label="Name"
                    />
                    <Input
                      placeholder="Contact Number*"
                      value={callbackData.phone}
                      onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white"
                      aria-required="true"
                      aria-label="Contact Number"
                    />
                    <Input
                      placeholder="Email*"
                      value={callbackData.email}
                      onChange={(e) => setCallbackData({ ...callbackData, email: e.target.value })}
                      className="bg-gray-700 border-gray-600 text-white"
                      aria-required="true"
                      aria-label="Email"
                    />

                    <div className="flex space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setCallbackData({ name: "", phone: "", email: "" })}
                      >
                        Clear
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-orange-500 hover:bg-orange-600"
                      >
                        Submit
                      </Button>
                    </div>

                    {/* Call Options */}
                    <div className="pt-4 space-y-2">
                      <Button className="w-full bg-green-600 hover:bg-green-700" aria-label="Call Now">
                        <PhoneCall className="w-4 h-4 mr-2" aria-hidden="true" />
                        CALL NOW
                      </Button>
                      <Button variant="outline" className="w-full border-gray-600 text-white" aria-label="Call Later">
                        <Clock className="w-4 h-4 mr-2" aria-hidden="true" />
                        CALL LATER
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bond Classifications */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <h3 className="font-bold text-lg mb-6">Classifications</h3>
            <div className="flex flex-wrap gap-2">
              {bondClassifications.map((classification, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-blue-400 hover:text-blue-300 underline"
                >
                  {classification}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
