

import { Button } from "@/app/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-blue-600 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied investors and start growing your wealth today.</p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">Create Your Account</Button>
      </div>
    </section>
  );
}
