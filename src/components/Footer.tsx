import { Building2, Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import otechLogo from "@/assets/otech_logo_transparent.png";
const Footer = () => {
  return (
    <footer className=" border-t border-border">
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
            <p className="text-sm text-muted-foreground">
              Total Technical Solution - Delivering Nepal's infrastructure growth with cross-sector reliability.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Swet Binayak Marg, Dhobighat, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+977-123456789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>info@otech.com.np</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Telecom & IT Solutions</li>
              <li>Construction Services</li>
              <li>Solar Energy Projects</li>
              <li>Duckhams Lubricants</li>
            </ul>
          </div>

          {/* Social & Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Connect With Us</h3>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Branch Locations:</p>
              <p>Kathmandu Valley: Nakhu, Balaju, Chabahil</p>
              <p>Outside Valley: Pokhara, Nepalgunj, Biratnagar</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 O.Tech Pvt. Ltd. All rights reserved. | Total Technical Solution Since 2008</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;