"use client";
import CardCarousal from "./CardCarousal";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Zap, TrendingUp, Users, Lock, Star, Wallet, Globe } from "lucide-react";

const carousalData = [
  {
    icon: TrendingUp,
    title: "High Returns",
    description:
      "Earn 12-18% annual returns with our carefully curated investment portfolio",
    feature: "Average 15.2% returns",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "SEBI-regulated platform with bank-grade security and insurance protection",
    feature: "₹5L investment protection",
  },
  {
    icon: Zap,
    title: "Quick & Easy",
    description:
      "Start investing in under 5 minutes with our streamlined onboarding process",
    feature: "5-minute setup",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Get personalized advice from certified financial advisors and investment experts",
    feature: "24/7 expert support",
  },
  {
    icon: Wallet,
    title: "Flexible Investments",
    description:
      "Choose from short-term, long-term, or SIP-based investments tailored to your needs",
    feature: "Plans starting at ₹1,000",
  },
  {
    icon: Globe,
    title: "Diversified Portfolio",
    description:
      "Spread risk across multiple sectors including real estate, bonds, and equities",
    feature: "10+ asset classes",
  },
];


export const ValueProposition = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Star className="w-4 h-4" />
            <span>Why Choose InvestPro</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Built for Smart Investors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect blend of high returns, security, and simplicity.
            Join thousands of investors who trust us with their financial future.
          </p>
        </div>
        <div className="w-full h-full min-h-[300px]">
          <CardCarousal data={carousalData} />
        </div>
        <div className="mt-20 bg-gradient-to-r from-[#013d22] to-primary rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">₹500Cr+</div>
              <div className="text-blue-200">Assets Under Management</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">15.2%</div>
              <div className="text-blue-200">Average Annual Returns</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.9★</div>
              <div className="text-blue-200">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};