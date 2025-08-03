import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Building2, Zap, Wrench, Fuel, Users, Briefcase, ArrowRight, Radio, Settings, Sun, Droplet } from "lucide-react";
import Layout from "@/components/Layout";
import CounterAnimation from "@/components/CounterAnimation";
import heroVideo from "@/assets/Construction.webm";
import constructionImage1 from "@/assets/otech-hero.jpg";
import constructionImage2 from "@/assets/otech-hero.jpg";
import telecomImage1 from "@/assets/tower.jpg";
import telecomImage2 from "@/assets/rural telecom.jpg";
import energyImage1 from "@/assets/otech-hero.jpg";
import energyImage2 from "@/assets/otech-hero.jpg";
import tradeImage from "@/assets/duckhamLubricants.jpg";
import servivesLogo from "@/assets/ServicesLogo.png";
import placeholder from "/public/placeholder.svg"; // Temporary import for About Us image

const Index = () => {
  const services = [
    { 
      icon: <Building2 className="h-8 w-8" />, 
      title: "Telecom & IT", 
      path: "/services",
      description: "RF planning, FTTH, tower infrastructure"
    },
    { 
      icon: <Wrench className="h-8 w-8" />, 
      title: "Construction", 
      path: "/services",
      description: "Civil engineering via Danfe JV"
    },
    { 
      icon: <Zap className="h-8 w-8" />, 
      title: "Energy", 
      path: "/services",
      description: "14.4 MW solar EPC delivered"
    },
    { 
      icon: <Fuel className="h-8 w-8" />, 
      title: "Trade", 
      path: "/services",
      description: "Duckhams lubricants distribution"
    },
    { 
      icon: <Briefcase className="h-8 w-8" />, 
      title: "Projects", 
      path: "/projects",
      description: "Case studies and deliverables"
    },
    { 
      icon: <Users className="h-8 w-8" />, 
      title: "Careers", 
      path: "/careers",
      description: "Join our growing team"
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
      <section className="relative h-screen w-full flex items-center justify-center -mt-16">
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
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:text-left text-center">
          {/* <Badge variant="secondary" className="mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Total Technical Solution · Since 2008
          </Badge> */}
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            O.Tech Pvt. Ltd.
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Delivering Nepal's infrastructure growth with cross-sector reliability across telecom, construction, energy, and trade sectors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-red-700 hover-scale transform transition-all duration-300 hover:shadow-lg">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="hover-scale transform transition-all duration-300 hover:shadow-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
     <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">About Us</h3>
            <h2 className="text-4xl font-bold mb-4">Nepal's most trusted technical solution provider across telecom, construction, energy, and trade sectors.</h2>
            <p className="text-muted-foreground mb-4">
             We deliver comprehensive technical solutions that drive Nepal's infrastructure growth, combining local expertise with international standards across multiple sectors.
            </p>
            <p className="text-muted-foreground mb-4">
              We are committed to excellence, reliability, and innovation in everything we do, ensuring our clients receive world-class service and sustainable solutions.
            </p>
          </div>
          <div>
            <img src={servivesLogo} alt="Logistics Industry" className="rounded-lg w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Enablers for your business growth (Counter Animation Section) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">Enablers for your infrastructure growth</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 border rounded-lg shadow-md animate-fade-in hover-scale transform transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
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


       {/* Services Grid */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-blue-400">
              Our Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical solutions across multiple sectors, delivering excellence since 2008.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.path}>
                <Card className="h-full hover:shadow-lg smooth-transition group cursor-pointer">
                  <CardContent className="p-6 flex items-start"> {/* Added flex and items-start */}
  <div className="mr-6 flex-shrink-0"> {/* Added mr-6 and flex-shrink-0 */}
    {/* Make icon larger - adjust 'h-20 w-20' as needed */}
    <div className="text-blue-500 h-20 w-20 flex items-center justify-center"> 
      {service.icon}
    </div>
  </div>
  <div> {/* This div will contain the text content */}
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

      {/* CTA Section */}
      {/* <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how O.Tech can deliver total technical solutions for your next project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section> */}
    </Layout>
  );
};

export default Index;
