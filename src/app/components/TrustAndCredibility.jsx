
import Image from 'next/image';
import { Card, CardContent } from "@/app/components/ui/card";

const testimonials = [
  { name: "John Doe", role: "Investor", quote: "InvestSmart has transformed my financial future." },
  { name: "Jane Smith", role: "Entrepreneur", quote: "The best platform for hassle-free investments." },
];

export default function TrustAndCredibility() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Investors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-8">
          <div className="w-24 h-12 bg-gray-300 rounded"></div>
          <div className="w-24 h-12 bg-gray-300 rounded"></div>
          <div className="w-24 h-12 bg-gray-300 rounded"></div>
        </div>
      </div>
    </section>
  );
}
