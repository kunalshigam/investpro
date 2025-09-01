'use client';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Play, TrendingUp, ArrowUp, Phone, Mail, HelpCircle, BookOpen, User } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [investment, setInvestment] = useState(100000);
  const [duration, setDuration] = useState([3]);
  const [returnRate, setReturnRate] = useState([7]);

  const calculateReturns = () => {
    const principal = investment;
    const years = duration[0];
    const rate = returnRate[0] / 100;
    const amount = principal * Math.pow(1 + rate, years);
    const interest = amount - principal;
    return { amount: Math.round(amount), interest: Math.round(interest) };
  };

  const { amount, interest } = calculateReturns();

  return (
    <>
      <div className="bg-white py-2 px-4 border-b">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600" />
              <a href="tel:8882200300" className="text-blue-600 hover:underline">
                +91-8882-200-300
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:info@bondsindia.com" className="text-blue-600 hover:underline">
                info@bondsindia.com
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-accent-foreground">
              <HelpCircle className="w-4 h-4" />
              <span>Help</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-accent-foreground">
              <BookOpen className="w-4 h-4" />
              <span>BondsPedia</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-orange-100 py-2 px-4 text-center text-sm">
        <span className="text-muted-foreground">We have special deals every day.</span>
        <Button variant="link" className="text-orange-600 font-medium p-0 ml-1 h-auto">
          Find Your Deal
        </Button>
      </div>

      <header className="bg-white border-b px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">
               <img src='../assets/bondsindialogo.svg' alt='logo' className="w-60 h-12 rounded" />
              {/* <span className="text-orange-500">BONDS</span>
              <span className="text-blue-600">INDIA</span> */}
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-orange-600">How it Works</a>
              <a href="#" className="text-muted-foreground hover:text-orange-600">Bonds Library</a>
              <a href="#" className="text-muted-foreground hover:text-orange-600">Products</a>
              <a href="#" className="text-muted-foreground hover:text-orange-600">Resources</a>
              <a href="#" className="text-muted-foreground hover:text-orange-600">Who we are</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-accent-foreground">
              <User className="w-4 h-4 mr-2" />
              LOGIN
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" size="sm">SIGNUP</Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-orange-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-foreground leading-tight">
                  The easy, fast way to<br />
                  invest money in <span className="text-orange-600 px-2 py-1 rounded">BONDS</span>
                </h1>
                
                <Button 
                  variant="outline" 
                  className="flex items-center space-x-2 bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                >
                  <Play className="w-4 h-4" />
                  <span>What are Bonds & How do I Invest?</span>
                </Button>
              </div>

              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">106392+</div>
                  <div className="text-muted-foreground">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">16936+</div>
                  <div className="text-muted-foreground">Bonds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">29+</div>
                  <div className="text-muted-foreground">IPOs</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Your Investment
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl">₹</span>
                  <Input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(Number(e.target.value))}
                    className="pl-8 text-xl font-semibold h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Duration (Years)
                </label>
                <div className="space-y-2">
                  <Slider
                    value={duration}
                    onValueChange={setDuration}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="text-right text-lg font-semibold">{duration[0]}</div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Return Rate (%)
                </label>
                <div className="space-y-2">
                  <Slider
                    value={returnRate}
                    onValueChange={setReturnRate}
                    max={15}
                    min={1}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="text-right text-lg font-semibold">{returnRate[0]}%</div>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">After {duration[0]} Years, You will receive</span>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-orange-500">₹ {amount.toLocaleString()}</span>
                    <ArrowUp className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="text-muted-foreground">
                    and <span className="font-semibold text-green-600">₹ {interest.toLocaleString()}</span> as interest
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground mb-4">
                  We have curated the best investments for you!
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                  START INVESTING NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};