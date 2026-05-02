import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest text-cream/90 mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl text-cream">Cactus</h3>
          <p className="mt-2 text-sm uppercase tracking-[0.25em] text-gold">
            Lagos · Since 2008
          </p>
          <p className="mt-5 max-w-md text-cream/75 leading-relaxed">
            A taste of the world by the Lagos lagoon. Multi-cuisine dining with
            warm hospitality, lush surroundings and a view that lingers.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-full border border-cream/20 hover:bg-gold hover:text-forest hover:border-gold transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"
              className="p-2.5 rounded-full border border-cream/20 hover:bg-gold hover:text-forest hover:border-gold transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl text-cream mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-2"><MapPin size={16} className="text-gold mt-0.5 shrink-0" />20/24 Ozumba Mbadiwe Ave, Victoria Island, Lagos</li>
            <li className="flex gap-2"><Phone size={16} className="text-gold mt-0.5 shrink-0" />0802 777 7666</li>
            <li className="flex gap-2"><Clock size={16} className="text-gold mt-0.5 shrink-0" />Daily · Closes 10:30 pm</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-cream mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
            <li><Link to="/reservations" className="hover:text-gold transition-colors">Reservations</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Cactus Restaurant. All rights reserved.</p>
          <p>Crafted with care in Lagos.</p>
        </div>
      </div>
    </footer>
  );
}
