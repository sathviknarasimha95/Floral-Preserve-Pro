import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/modern_high-tech_floral_cold_storage_facility_interior.png";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Cold Storage Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium mb-6">
              Premium Floral Cold Chain Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Preserving <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-white">Nature's Freshness</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 font-light leading-relaxed max-w-lg">
              State-of-the-art cold storage exclusively for flower vendors and distributors. We ensure your blooms stay as fresh as the moment they were picked.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 text-base h-12">
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-white/20 rounded-full px-8 text-base h-12">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
