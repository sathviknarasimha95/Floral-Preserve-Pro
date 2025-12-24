import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import textureImage from "@assets/generated_images/subtle_frost_texture_background.png";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={textureImage} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">About Presavia</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              More Than Just <br/>Cold Storage.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Presavia is a premium facility dedicated solely to the floral industry. We understand that flowers are delicate living organisms that require precise temperature and humidity management to maintain their value.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Founded by logistics experts and floriculture specialists, we provide an unbroken cold chain that extends vase life and reduces wastage for wholesalers and florists.
            </p>
            
            <div className="space-y-4">
              {[
                "Specialized humidity control for different flower varieties",
                "24/7 Temperature monitoring with redundant power",
                "Dedicated handling by floral preservation experts",
                "Strategic location for easy distribution"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
               {/* Using the logo as a placeholder graphic here or a nice generic flower image if I had one, 
                   but let's use a nice colored block with the logo for brand reinforcement */}
               <div className="w-full h-full bg-slate-100 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-blue-100" />
                  <img src="attached_assets/generated-image_(9)_1766582251849.png" alt="Presavia Logo" className="w-2/3 h-auto object-contain relative z-10 opacity-90" />
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
