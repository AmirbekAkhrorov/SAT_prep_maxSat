import { GraduationCap, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Practice Tests', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Mobile App', href: '#' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Study Guides', href: '#' },
    { name: 'SAT Tips', href: '#' },
    { name: 'Score Calculator', href: '#' },
  ],
  Company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Press', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-cream-50 border-t border-cream-200">
      <div className="container-wide mx-auto px-6 md:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Logo & description */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-11 h-11 bg-navy-900 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-gold-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold-500 rounded-full border-2 border-cream-50" />
              </div>
              <span className="font-display text-xl font-semibold text-navy-900">
                SAT<span className="text-gold-600">Prep</span>
              </span>
            </a>
            <p className="font-body text-navy-600 leading-relaxed mb-6 max-w-xs">
              Empowering students to achieve their dream SAT scores with
              AI-powered practice and personalized learning.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-cream-100 border border-cream-200 rounded-lg flex items-center justify-center text-navy-500 hover:bg-navy-900 hover:text-cream-100 hover:border-navy-900 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-sans font-semibold text-navy-900 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-navy-600 hover:text-gold-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-cream-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-navy-500">
            © {new Date().getFullYear()} SATPrep. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-sm text-navy-500">
              Made with ❤️ for students everywhere
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
