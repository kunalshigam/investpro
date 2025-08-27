'use client';
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Smartphone, CreditCard, TrendingUp } from "lucide-react";

const CTASection = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-success rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                                Ready to Start
                                <br />
                                <span className="gradient-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Your Investment Journey?
                                </span>
                            </h2>

                            <p className="text-xl text-blue-100 leading-relaxed">
                                Join 50,000+ investors who are already building wealth with
                                InvestPro. Start with just ₹1,000 and watch your money grow.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Smartphone className="w-6 h-6 text-success" />
                                </div>
                                <div className="text-sm">Mobile First</div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <CreditCard className="w-6 h-6 text-success" />
                                </div>
                                <div className="text-sm">Instant Deposits</div>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <TrendingUp className="w-6 h-6 text-success" />
                                </div>
                                <div className="text-sm">High Returns</div>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-success focus:border-success"
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="btn-success px-8 group whitespace-nowrap"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                            <p className="text-sm text-blue-200">
                                No spam, unsubscribe anytime. Start with ₹1,000 minimum
                                investment.
                            </p>
                        </form>
                        <div className="flex items-center space-x-6 text-sm text-blue-200 pt-4">
                            <span>✅ SEBI Regulated</span>
                            <span>🔒 Bank-grade Security</span>
                            <span>⭐ 4.9/5 Rating</span>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <div className="space-y-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-success mb-2">
                                        ₹2,45,678
                                    </div>
                                    <div className="text-blue-200">Average Portfolio Value</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-center">
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <div className="text-xl font-bold text-success">15.2%</div>
                                        <div className="text-xs text-blue-300">Annual Returns</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-4">
                                        <div className="text-xl font-bold text-success">₹18,450</div>
                                        <div className="text-xs text-blue-300">Monthly Earnings</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-200">Corporate Bonds</span>
                                        <span className="text-success">+12.5%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-200">Government Securities</span>
                                        <span className="text-success">+8.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-blue-200">Fixed Deposits</span>
                                        <span className="text-success">+7.5%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-primary text-success-foreground rounded-full p-3 shadow-lg animate-bounce">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-full p-3 shadow-lg animate-pulse">
                            <CreditCard className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
