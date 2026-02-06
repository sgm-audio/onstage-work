import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/onstage', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/onstage', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/onstage', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/onstage', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { label: 'Discover', href: '/discover' },
    { label: 'Create Event', href: '/create-event' },
    { label: 'My Events', href: '/my-events' },
    { label: 'About', href: '/about' },
  ];

  return (
    <footer className="bg-onstage-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-onstage-coral flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">Onstage</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Discover and create amazing live events. Find concerts, tech meetups, art shows, and community gatherings near you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-white/60 hover:text-onstage-coral transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white/80">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-onstage-coral hover:border-onstage-coral transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} Onstage.work. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
