import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { UserPlus, Search, TrendingUp, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Sign Up",
    description:
      "Create your account in under 3 minutes with just your basic details and bank information",
  },
  {
    step: "02",
    icon: Search,
    title: "Choose Investments",
    description:
      "Browse our curated selection of bonds, FDs, and alternative investments with detailed analysis",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Track Portfolio",
    description:
      "Monitor your investments in real-time with detailed performance analytics and insights",
  },
  {
    step: "04",
    icon: Wallet,
    title: "Earn Returns",
    description:
      "Receive regular payouts and watch your wealth grow with compound interest",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin
            your investment journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card
                key={step.step}
                className={`card-hover border-l-4 border-l-primary fade-in-up stagger-${
                  index + 1
                }`}
              >
                <CardContent className="px-4 py-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-3 mb-3">
                        <step.icon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="pt-8">
              <Button size="lg" className="btn-success text-lg px-8 py-6 group">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-muted to-secondary/50 rounded-3xl p-8 lg:p-12">
              <img
                src='../assets/personalisation.jpg'
                alt="Investment Process Illustration"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-medium shadow-lg">
                ✨ Quick Setup
              </div>
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm font-medium shadow-lg">
                📈 Smart Investing
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-success/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
