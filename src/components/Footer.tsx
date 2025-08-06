import { Building2, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import otechLogo from "@/assets/otech_logo_transparent.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div>
                <Link to="/" className="flex items-center space-x-3">
                  <img
                    src={otechLogo}
                    alt="O.Tech Logo"
                    className="h-20 w-auto"
                  />
                </Link>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Total Technical Solution - Delivering Nepal's infrastructure growth with cross-sector reliability.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-gray-300" />
                <span>Sanepa, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-gray-300" />
                <span>+977 9802033712</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-gray-300" />
                <span>info@otech.com.np</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Telecom & IT Solutions</li>
              <li>Construction Services</li>
              <li>Solar Energy Projects</li>
              <li>Duckhams Lubricants</li>
            </ul>
          </div>

          {/* Social & Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => window.open('https://www.facebook.com/otechnepal/', '_blank')}>
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => window.open('https://www.linkedin.com/company/otechgroup/', '_blank')}>
                <Linkedin className="h-4 w-4" />
              </Button>
              {/* <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => window.open('https://twitter.com/otechpvt_ltd', '_blank')}>
                <Twitter className="h-4 w-4" />
              </Button> */}
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Branch Locations:</p>
              <p>Kathmandu Valley: Sanepa, Swet Binayak Marg</p>
              <p>Outside Valley: Pokhara, Nepalgunj, Biratnagar</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 O.Tech Pvt. Ltd. All rights reserved. | Total Technical Solution Since 2008</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;