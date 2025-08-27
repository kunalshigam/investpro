import React from "react";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

const Button = ({ children, className, variant, size, ...props }) => {
  const base =
    "rounded-2xl font-semibold transition-all inline-flex items-center justify-center";
  const sizes = {
    lg: "text-lg px-8 py-6",
    md: "px-4 py-2",
  };
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    outline: "border border-white/30 text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${base} ${sizes[size] || ""} ${variants[variant || "primary"]
        } ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary min-h-screen flex items-center">
      <div className="absolute top-4 right-4 flex gap-2 sm:gap-4 z-20">
        <Button
          size="sm"
          className="btn-hero group px-3 py-1.5 text-xs sm:size-md sm:px-4 sm:py-2 sm:text-sm"
        >
          Login
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-white px-3 py-1.5 text-xs sm:size-md sm:px-4 sm:py-2 sm:text-sm"
        >
          SignUp
        </Button>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-success rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold leading-tight">
                <span className="gradient-text bg-primary bg-clip-text text-transparent">
                  InvestPro
                </span>
              </h3>
              <div className="inline-flex items-center space-x-1 sm:space-x-2 bg-white/10 rounded-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium backdrop-blur-sm">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-success" />
                <span>Trusted by 50,000+ investors</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Smart Investing
                <br />
                <span className="gradient-text bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-blue-100 max-w-lg leading-relaxed">
                Build wealth with our curated selection of high-yield, secure
                investment opportunities. Start with as little as ₹1,000.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold">12%+</div>
                <div className="text-sm text-blue-200">Avg. Returns</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-blue-200">Happy Investors</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold">₹500Cr+</div>
                <div className="text-sm text-blue-200">Assets Managed</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="md" className="btn-hero group">
                Start Investing Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="md"
                className="text-white text-lg"
              >
                Watch Demo
              </Button>
            </div>
            <div className="pt-8 pb-8 border-t border-white/20">
              <p className="text-sm text-blue-200 mb-4">
                Regulated by SEBI
              </p>
              <div className="flex items-center space-x-6 text-xs text-blue-300">
                <span>★★★★★ 4.8 rating</span>
                <span>•</span>
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>Bank-grade Security</span>
              </div>
            </div>
          </div>
          <div className="pb-8 px-2 md:pb-0 md:px-0 flex flex-col justify-around">
            <div className="relative">
              <div className="float-animation">
                <img
                  src="../assets/stock-market.jpg"
                  alt="Investment Platform Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-[#0f172b] rounded-lg p-4 shadow-lg">
                <div className="text-sm text-muted-foreground">
                  Portfolio Value
                </div>
                <div className="text-xl font-bold text-primary">₹2,45,678</div>
                <div className="text-xs text-success">+12.5% this month</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#0f172b] rounded-lg p-4 shadow-lg">
                <div className="text-sm text-muted-foreground">
                  Monthly Returns
                </div>
                <div className="text-xl font-bold text-primary">₹18,450</div>
                <div className="text-xs text-success">+8.2% growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
