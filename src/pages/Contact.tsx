import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import contact from "/contact.png"
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Building2, Send } from "lucide-react";
import SwiggleLine from "@/components/SwiggleLine";
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const contactInfo = [
    {
      icon: <Building2 className="h-6 w-6 text-blue-500" />,
      title: "Head Office",
      details: [
        "Neer Bhawan Marg",
        "Sanepa, Lalitpur",
        "Nepal"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-500" />,
      title: "Phone",
      details: [
        "+01-5153175",
        "+977-9802033712"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: "Email",
      details: [
        "info@otech.com.np",
        "projects@otech.com.np"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Business Hours",
      details: [
        "Sunday - Friday: 10:00 AM - 6:00 PM",
        "Saturday: Closed"
      ]
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
      <section className="relative h-[calc(50vh-64px)] w-full flex items-center -mt-16">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white">
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
              <h2 className="text-3xl font-bold text-blue-500 mb-6">Send Us a Message</h2>
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

                    <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-500 mb-6">Contact Information</h2>
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
      <SwiggleLine className="w-full h-20 text-accent -mt-16" />
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Locations</h2>
            <p className="text-lg text-muted-foreground">Serving clients across Nepal with strategic branch locations</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <h3 className="text-2xl font-bold text-center text-Black-400 mb-6">Inside Kathmandu valley</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Corporate Office</h4>
                <p className="text-muted-foreground">Dhobighat, Lalitpur</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Branch Office</h4>
                <p className="text-muted-foreground">Nakhu, Lalitpur</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Branch Office</h4>
                <p className="text-muted-foreground">Balaju, Kathmandu</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Branch Office</h4>
                <p className="text-muted-foreground">Chabahil, Kathmandu</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Branch Office</h4>
                <p className="text-muted-foreground">Lokanthali Kathmandu</p>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-black-400 mb-6 mt-12">Outside Kathmandu valley</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Regional Office</h4>
                <p className="text-muted-foreground">Pokhara</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Regional Office</h4>
                <p className="text-muted-foreground">Nepalgunj</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Regional Office</h4>
                <p className="text-muted-foreground">Biratnagar</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Regional Office</h4>
                <p className="text-muted-foreground">Dhangadi</p>
              </div>
              <div className="text-center">
                <MapPin className="h-10 w-10 text-blue-500 mx-auto mb-2" />
                <h4 className="font-semibold text-primary">Regional Office</h4>
                <p className="text-muted-foreground">Birtamode</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-white -mt-16" />
      {/* Map Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Find Us</h2>
          <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: '56.25%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.22119077415!2d85.3056039!3d27.679557699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197ce9faffa9%3A0x5974be2eef97c386!2sOtech%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1754502144912!5m2!1sen!2snp"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout >
  );
};

export default Contact;