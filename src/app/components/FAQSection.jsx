'use client';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Removed TS type

  const faqs = [
    {
      question: "What are Bonds?",
      answer:
        "A bond is a type of security where the entity issuing it is indebted to the holder and has an obligation, based on the agreed-upon terms, to deliver regular payments to the lender.",
    },
    {
      question: "Why is there a secondary market for bonds?",
      answer:
        "In the secondary market, the investor can experience liquidity and flexibility to buy or sell bonds before their maturity period while also facilitating price discovery and enhancing market efficiency.",
    },
    {
      question: "What are the documents needed to buy bonds online?",
      answer:
        "In order to buy Bonds online, you need to have identification proof like (a passport or driver's license) and address proof like (Electricity Bill or Bank statement).",
    },
    {
      question: "What is the minimum investment amount?",
      answer:
        "The minimum investment amount varies by bond type, but typically ranges from ₹10,000 to ₹1,00,000 depending on the specific bond offering.",
    },
    {
      question: "How do I track my bond investments?",
      answer:
        "You can track your bond investments through our online platform dashboard, which provides real-time updates on your portfolio performance, interest payments, and maturity dates.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sm border">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-900 transition-colors"
                  >
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Expert Consultation */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Got more questions?</h3>
              <p className="text-muted-foreground mb-6">
                Book 5 Minutes Discussion with our Financial Expert
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 px-8">
                SCHEDULE A DISCUSSION
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
