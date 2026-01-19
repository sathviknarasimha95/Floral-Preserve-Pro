import { motion } from "framer-motion";
import { Star, Quote, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Elena Rossi",
    role: "Owner, Bella Flora NYC",
    profit: "₹1,25,000/mo",
    text: "We bought 400 crates of Valentine roses at ₹10/stem when everyone else had stopped ordering. Sold them all 2 weeks later at ₹75/stem during engagement season. Presavia made this possible.",
  },
  {
    name: "James Chen",
    role: "Wholesale Distributor",
    profit: "₹2,80,000/mo",
    text: "The 30-day window changed my entire business. I now predict price swings and buy accordingly. My margins have gone from 15% to 220% in season.",
  },
  {
    name: "Sarah Williams",
    role: "Wedding Florist",
    profit: "₹84,000/mo",
    text: "I can now buy bulk at ₹30/stem and know I have a full month to sell premium arrangements. Wedding season peak became my profit peak.",
  },
  {
    name: "Marcus Thorne",
    role: "Premium Flower Supplier",
    profit: "₹3,50,000/mo",
    text: "Presavia eliminated our forced sales problem. Before, we'd lose 30% to waste. Now we control timing. This storage facility is essentially a profit engine.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4">Real Results</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Florists Making Real Money</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-6">
                  <div className="p-1">
                    <Card className="border-2 border-slate-200 shadow-xl bg-white h-full relative overflow-visible">
                      <div className="absolute -top-4 -left-2 text-green-500/10">
                        <Quote size={80} />
                      </div>
                      <CardContent className="flex flex-col justify-between p-8 h-[340px]">
                        <div>
                          <div className="flex gap-1 text-yellow-400 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                          <p className="text-slate-600 text-base leading-relaxed relative z-10 italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="mt-6 border-t border-slate-200 pt-6">
                          <p className="font-bold text-slate-900">{testimonial.name}</p>
                          <p className="text-slate-600 text-sm">{testimonial.role}</p>
                          <div className="mt-3 bg-green-50 border border-green-200 rounded-lg px-3 py-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4 text-green-600" />
                            <span className="text-sm font-bold text-green-700">{testimonial.profit}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-green-400 hover:bg-green-600 hover:text-white" />
              <CarouselNext className="-right-12 border-green-400 hover:bg-green-600 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
