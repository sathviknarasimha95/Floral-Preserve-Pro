import { motion } from "framer-motion";
import { ThermometerSnowflake, Truck, PackageCheck, Box } from "lucide-react";
import deliveryImage from "@assets/generated_images/refrigerated_floral_logistics_delivery.png";

const services = [
  {
    icon: ThermometerSnowflake,
    title: "Cold Storage",
    description: "Standard refrigeration (2°C - 4°C) optimized for most cut flowers. Precise humidity management prevents dehydration.",
    image: null
  },
  {
    icon: Box, // Using Box as a proxy for "Super Cold" or specialized containment
    title: "Super Cold Storage",
    description: "Ultra-low temperature zones for specialized blooms and long-term preservation needs. Cryo-ready infrastructure.",
    image: null // Could use the hero image again or just a color block
  },
  {
    icon: Truck,
    title: "Logistics Support",
    description: "Refrigerated transport coordination. From the airport to our facility, and from our facility to your storefront.",
    image: deliveryImage
  },
  {
    icon: PackageCheck,
    title: "Expert Handling",
    description: "Our staff is trained in floral care. We handle stems with gentleness and ensure proper hydration upon arrival.",
    image: null
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">Premium Services for Delicate Blooms</h3>
          <p className="text-slate-600 text-lg">
            We provide comprehensive cold chain solutions designed specifically for the unique needs of the floral trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              
              <h4 className="text-xl font-display font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {service.image && (
                <div className="mt-4 rounded-lg overflow-hidden h-32 w-full relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
