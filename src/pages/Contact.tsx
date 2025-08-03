import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Building2, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Head Office",
      details: [
        "Swet Binayak Marg",
        "Dhobighat, Lalitpur",
        "Nepal"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: [
        "+977-123456789",
        "+977-987654321"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        "info@otech.com.np",
        "projects@otech.com.np"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Sunday - Friday: 10:00 AM - 6:00 PM",
        "Saturday: Closed"
      ]
    }
  ];

  const branches = [
    {
      region: "Kathmandu Valley",
      locations: ["Nakhu", "Balaju", "Chabahil", "Dhobighat (HQ)"]
    },
    {
      region: "Outside Valley", 
      locations: ["Pokhara", "Nepalgunj", "Biratnagar", "Dhangadi", "Birtamode"]
    }
  ];

  const services = [
    "Telecom & IT Solutions",
    "Solar Energy Projects", 
    "Construction Services",
    "Duckhams Lubricants"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Contact O.Tech
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to start your next infrastructure project? Let's discuss how our total technical solutions can meet your needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="your.email@example.com" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Phone Number
                      </label>
                      <Input placeholder="+977-XXXXXXXXX" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Service Interest
                      </label>
                      <select className="w-full px-3 py-2 border border-border rounded-lg bg-background">
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Project Details *
                      </label>
                      <Textarea 
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent rounded-lg flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground">Serving clients across Nepal with strategic branch locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {branch.region}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {branch.locations.map((location, locationIndex) => (
                      <Badge key={locationIndex} variant="secondary">
                        {location}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Find Us</h2>
          <Card>
            <CardContent className="p-0">
              <div className="h-96 bg-accent rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Swet Binayak Marg, Dhobighat, Lalitpur, Nepal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;