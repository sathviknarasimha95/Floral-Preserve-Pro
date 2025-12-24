import { Snowflake, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Snowflake className="text-green-400 h-6 w-6" />
              <span className="text-xl font-display font-bold">PRESAVIA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              30-day freshness. Unlimited profit potential. The cold storage facility built for strategic floral trading.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#calculator" className="hover:text-green-400 transition-colors">Profit Calculator</a></li>
              <li><a href="#pricing" className="hover:text-green-400 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-lg">Solutions</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>30-Day Storage</li>
              <li>Strategic Inventory</li>
              <li>Price Timing</li>
              <li>Climate Control</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-400 shrink-0" />
                <span>123 Cold Chain Blvd,<br />Floral District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-400 shrink-0" />
                <span>hello@presavia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Presavia. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="text-slate-400 hover:text-green-400 transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
