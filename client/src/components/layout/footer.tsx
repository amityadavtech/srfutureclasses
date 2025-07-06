import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#about", label: "About Us" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                <img src="/logo.jpeg" alt="S.R. Future Classes Logo" className="w-8 h-8 object-contain rounded" />
              </div>
              <div>
                <h3 className="text-xl font-bold">S.R. Future Classes</h3>
                <p className="text-slate-300 text-sm">Premium Coaching Institute</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Building successful futures through quality education and personalized guidance. 
              Your success is our mission, your growth is our pride.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="ghost" size="icon" className="bg-slate-700 hover:bg-primary">
                <a href="https://www.facebook.com/sarojgupta.sarojgupta091/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="bg-slate-700 hover:bg-primary">
                <a href="https://www.instagram.com/saroj8832?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="bg-slate-700 hover:bg-primary">
                <a href="https://www.youtube.com/@SRFutureClasses" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="bg-green-500 hover:bg-green-600">
                <a href="https://wa.me/919140079941">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-slate-300 hover:text-white transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="text-primary h-4 w-4" />
                <span>+91 9140079941</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="text-primary h-4 w-4 mt-1" />
                <span className="text-slate-300">Khamaraiya Pandit, Lakhimpur Kheri, Uttar Pradesh, 262722</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">&copy; 2025 S.R. Future Classes. All rights reserved. Designed & Developed by <a href="https://beingxbot.tech" className="text-grey-400 font-bold underline hover:text-purple-300 transition-colors">BeingxBot</a> ~ Amit Yadav.</p>
        </div>
      </div>
    </footer>
  );
}
