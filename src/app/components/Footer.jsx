import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    "About Us",
    "How it Works",
    "Bonds Library",
    "Products",
    "Resources",
    "Contact Us",
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Risk Disclosure",
    "Refund Policy",
    "SEBI Guidelines",
  ];

  const investmentOptions = [
    "Government Bonds",
    "Corporate Bonds",
    "Tax-Free Bonds",
    "54EC Bonds",
    "GSEC Strips",
    "IPOs",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-orange-500">BONDS</span>
              <span className="text-blue-400">INDIA</span>
            </div>
            <p className="text-gray-400 text-sm">
              India's leading digital bond investment platform. Making fixed-income investments
              accessible to all.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-8882-200-300</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@bondsindia.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Investment Options</h3>
            <ul className="space-y-2 text-sm">
              {investmentOptions.map((option, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    {option}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-600">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-600">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-600">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-600">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 hover:bg-orange-600">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 BondsIndia. All rights reserved. SEBI Registration No: INZ000123456
          </div>
          <div className="text-xs text-gray-500 text-center md:text-right">
            Investments in securities market are subject to market risks. Read all the related documents carefully before investing.
          </div>
        </div>
      </div>
    </footer>
  );
};
