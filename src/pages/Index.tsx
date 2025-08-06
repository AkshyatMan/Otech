import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Building2,
  Zap,
  Wrench,
  Fuel,
  Users,
  Briefcase,
  ArrowRight,
  Radio,
  Settings,
  Sun,
  Droplet,
} from "lucide-react";
import Layout from "@/components/Layout";
import SwiggleLine from "@/components/SwiggleLine";
import CounterAnimation from "@/components/CounterAnimation";
import heroVideo from "/Construction.webm";
import servivesLogo from "@/assets/ServicesLogo.png";

import telecommunication from "../assets/telecommunication.png";
import Construction from "../assets/construction.png";
import solar from "../assets/solar.png";
import trade from "../assets/trade.png";
const Index = () => {
  const services = [
    {
      icon: (
        <img src={telecommunication} alt="Telecom & IT" className="h-20 w-20" />
      ),
      title: "Telecom & IT",
      path: "/services",
      description:
        "O.Tech Pvt Ltd is a leading telecom infrastructure and IT Solution company in Nepal. ",
    },
    {
      icon: <img src={Construction} alt="Construction" className="h-20 w-20" />,
      title: "Construction",
      path: "/services",
      description:
        "O.Tech Construction has a team of highly qualified and experienced Engineers, Architects, Consultants and Managers.",
    },
    {
      icon: <img src={solar} alt="Energy" className="h-20 w-20" />,
      title: "Energy",
      path: "/services",
      description:
        "O.tech Trade P. Ltd. is the sole nationwide distributor of Duckhams brand lubricants",
    },
    {
      icon: <img src={trade} alt="Trade" className="h-20 w-20" />,
      title: "Trade",
      path: "/services",
      description:
        "Our service includes technical planning, turnkey delivery (EPC) and operation and maintenance (O&M) of the projects.",
    },
  ];

  const stats = [
    { label: "Years of Excellence", value: "16+" },
    { label: "MW Solar Delivered", value: "14.4" },
    { label: "Telecom Sites", value: "250+" },
    { label: "Retail Points", value: "400+" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center -mt-16">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content container aligned with navigation */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl flex flex-col md:text-left text-center">
              {/* <Badge variant="secondary" className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Total Technical Solution · Since 2008
        </Badge> */}

              <h1
                className="text-5xl md:text-7xl font-bold text-blue-500 mb-6 animate-fade-in "
                style={{ animationDelay: "0.4s" }}
              >
                <span className="text-orange-400">O</span><span className="text-white">.</span>Tech <span className="text-white"> Pvt. Ltd. </span>
              </h1>

              <p
                className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto md:mx-0 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                Delivering Nepal's infrastructure growth with cross-sector
                reliability across telecom, construction, energy, and trade
                sectors.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <Button
                  size="lg"
                  className="group bg-blue-600 text-white hover:bg-blue-700 hover-scale transform transition-all duration-300 hover:shadow-lg"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Button>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover-scale transform transition-all duration-300 hover:shadow-lg"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-accent -mt-16" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-left mb-8 text-blue-600">
              About Us
            </h2>
            <h3 className="text-2xl font-bold mb-4">
              Nepal's most trusted technical solution provider across telecom,
              construction, energy, and trade sectors.
            </h3>
            <p className="text-muted-foreground mb-4">
              We deliver comprehensive technical solutions that drive Nepal's
              infrastructure growth, combining local expertise with
              international standards across multiple sectors.
            </p>
            <p className="text-muted-foreground mb-4">
              We are committed to excellence, reliability, and innovation in
              everything we do, ensuring our clients receive world-class service
              and sustainable solutions.
            </p>
          </div>
          <div>
            <img
              src={servivesLogo}
              alt="Logistics Industry"
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-white -mt-16" />

      {/* Enablers for your business growth (Counter Animation Section) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-left mb-8 text-blue-600">
            Enablers for your infrastructure growth
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 border rounded-lg shadow-md animate-fade-in hover-scale transform transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CounterAnimation
                  targetValue={stat.value}
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  duration={2500}
                />
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-accent -mt-16" />

      {/* Services Grid */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Our Service Areas
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technical solutions across multiple sectors,
              delivering excellence since 2008.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.path}>
                <Card className="h-full hover:shadow-lg smooth-transition group cursor-pointer bg-transparent border-0">
                  <CardContent className="p-6 flex items-start">
                    {" "}
                    {/* Added flex and items-start */}
                    <div className="mr-6 flex-shrink-0">
                      {" "}
                      {/* Added mr-6 and flex-shrink-0 */}
                      {/* Make icon larger - adjust 'h-20 w-20' as needed */}
                      <div className="text-blue-500 h-20 w-20 flex items-center justify-center">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      {" "}
                      {/* This div will contain the text content */}
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary group-hover:text-accent-foreground transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-white -mt-16" />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
              Our Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've worked together with a number of national and international
              brands.
            </p>
          </div>
          <div className="overflow-hidden whitespace-nowrap py-4 relative w-full">
            <div className="flex w-full">
              <div className="flex animate-marquee items-center justify-around min-w-full">
                <img
                  src="/Ooreeoo-logo.png"
                  alt="Ooredoo Myanmar"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/nepal-telecom.webp"
                  alt="Nepal Telecom"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/ncell.png"
                  alt="Ncell"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/smartcell.png"
                  alt="Smart Cell"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/CG-Telecom.png"
                  alt="CG Telecom"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/CAAN_LOGO.png"
                  alt="Civil Aviation Authority of Nepal"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/BKS.png"
                  alt="Budhanilkantha School"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/cultural-corporation.png"
                  alt="Cultural Corporation"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/RBN.png"
                  alt="Prabhu Bank"
                  className="h-20 object-contain mx-4"
                />
                <img
                  src="/GON.png"
                  alt="Government of Nepal, Department of Roads"
                  className="h-20 object-contain mx-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-accent -mt-16" />

      {/* Testimonials Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Testimonials</h2>
            <h3 className="text-2xl font-bold text-gray-800">The Voice of Our Customers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Text Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-4 right-4 ">
              </div>
              <h3 className="font-semibold text-lg">Noyana Syacchyon</h3>
              <p className="text-sm text-gray-600">Project Lead - NELP</p>
              <br />
              <p className="text-gray-700 mb-4">"O.Tech is more than just a company. With their help, we could deliver electricity to the toughest areas of Nepal, making the country brighter, safer, and more developed.""</p>
            </div>

            {/* Text Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-4 right-4 ">

              </div>
              <h3 className="font-semibold text-lg">Prajwal Ojha</h3>
              <p className="text-sm text-gray-600">CEO - OGBB International Law Firm</p>
              <br />
              <p className="text-gray-700 mb-4">O.Tech took care of our office building construction very smoothly. With a set of highly experienced team members, together they give you the best service available in Nepal"</p>
            </div>

            {/* Text Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 relative">
              <div className="absolute top-4 right-4">
              </div>
              <h3 className="font-semibold text-lg">Kartabya Aryal</h3>
              <p className="text-sm text-gray-600">CEO - Visual Workshop</p>
              <br />
              <p className="text-gray-700 mb-4">"We had a dream of turning our offices fully solar powered. I'm glad we found O.Tech to get it done. Very well done!"</p>
            </div>
          </div>
        </div>
        <SwiggleLine className="w-full h-20 text-accent -mt-16" />
      </section>

      <SwiggleLine className="w-full h-20 text-white -mt-16" />
      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how O.Tech can deliver total technical solutions for
            your next project.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="group bg-blue-600 text-white hover:bg-blue-700 hover-scale transform transition-all duration-300 hover:shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-accent -mt-16" />
    </Layout >
  );
};
export default Index;
