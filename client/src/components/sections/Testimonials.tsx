import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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
    text: "Since storing our wholesale imports with Presavia, our spoilage rate has dropped by 40%. The temperature control is incredibly precise.",
  },
  {
    name: "James Chen",
    role: "Distributor, Global Blooms",
    text: "The logistics support is a game changer. They handle the cold chain from the airport directly to their facility. Peace of mind.",
  },
  {
    name: "Sarah Williams",
    role: "Event Florist",
    text: "I used their daily storage for a massive wedding. The flowers were perfect on the big day. The facility is spotless and professional.",
  },
  {
    name: "Marcus Thorne",
    role: "Wholesale Manager",
    text: "Presavia is the only facility that understands different flowers need different humidity levels. Their expertise is unmatched.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Client Stories</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Trusted by Top Florists</h3>
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
                    <Card className="border-none shadow-lg bg-white h-full relative overflow-visible">
                      <div className="absolute -top-4 -left-2 text-primary/10">
                        <Quote size={80} />
                      </div>
                      <CardContent className="flex flex-col justify-between p-8 h-[300px]">
                        <div>
                          <div className="flex gap-1 text-yellow-400 mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={16} fill="currentColor" />
                            ))}
                          </div>
                          <p className="text-slate-600 text-lg italic leading-relaxed relative z-10">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="mt-6 border-t border-slate-100 pt-6">
                          <p className="font-bold text-slate-900">{testimonial.name}</p>
                          <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-primary/20 hover:bg-primary hover:text-white" />
              <CarouselNext className="-right-12 border-primary/20 hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
