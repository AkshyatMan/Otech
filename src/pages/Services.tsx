import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { Building2, Zap, Wrench, Fuel, Radio, Settings, Sun, Droplet } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "telecom",
      title: "Telecom & IT",
      icon: <Building2 className="h-6 w-6" />,
      description: "Comprehensive telecommunications infrastructure and IT solutions",
      services: [
        { icon: <Radio className="h-5 w-5" />, name: "RF Planning & Optimization", desc: "Network design and performance optimization" },
        { icon: <Settings className="h-5 w-5" />, name: "Drive Testing", desc: "Network quality assessment and validation" },
        { icon: <Building2 className="h-5 w-5" />, name: "FTTH Infrastructure", desc: "Fiber-to-the-home deployment and maintenance" },
        { icon: <Building2 className="h-5 w-5" />, name: "Tower Infrastructure", desc: "Telecom tower construction and maintenance" },
      ]
    },
    {
      id: "construction",
      title: "Construction",
      icon: <Wrench className="h-6 w-6" />,
      description: "Civil engineering and infrastructure construction through strategic partnerships",
      services: [
        { icon: <Wrench className="h-5 w-5" />, name: "Civil Engineering", desc: "Comprehensive engineering solutions" },
        { icon: <Building2 className="h-5 w-5" />, name: "Infrastructure Development", desc: "Roads, bridges, and public infrastructure" },
        { icon: <Settings className="h-5 w-5" />, name: "Danfe Joint Venture", desc: "Strategic construction partnership" },
        { icon: <Building2 className="h-5 w-5" />, name: "Project Management", desc: "End-to-end construction project delivery" },
      ]
    },
    {
      id: "energy",
      title: "Energy",
      icon: <Zap className="h-6 w-6" />,
      description: "Renewable energy solutions with proven track record in solar EPC",
      services: [
        { icon: <Sun className="h-5 w-5" />, name: "Solar EPC", desc: "14.4 MW delivered across multiple sites" },
        { icon: <Zap className="h-5 w-5" />, name: "Transmission Lines", desc: "132 kVA transmission line construction" },
        { icon: <Settings className="h-5 w-5" />, name: "Project Sites", desc: "Jhapa (3.4 MW), Dang (5.3 MW), Dhading" },
        { icon: <Sun className="h-5 w-5" />, name: "Renewable Solutions", desc: "Sustainable energy infrastructure" },
      ]
    },
    {
      id: "trade",
      title: "Trade - Duckhams",
      icon: <Fuel className="h-6 w-6" />,
      description: "Sole Nepal distributor for premium Duckhams lubricants",
      services: [
        { icon: <Droplet className="h-5 w-5" />, name: "Premium Lubricants", desc: "High-quality Duckhams products" },
        { icon: <Building2 className="h-5 w-5" />, name: "14 Regional Hubs", desc: "Strategic distribution network" },
        { icon: <Settings className="h-5 w-5" />, name: "400+ Retail Points", desc: "Nationwide availability" },
        { icon: <Fuel className="h-5 w-5" />, name: "Technical Support", desc: "Expert lubricant consultation" },
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Our Services</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Total Technical Solutions
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive expertise across telecom, construction, energy, and trade sectors with proven delivery excellence.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="telecom" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {services.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2">
                  {service.icon}
                  <span className="hidden sm:inline">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Service Overview */}
                  <div className="lg:col-span-1">
                    <Card>
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-accent rounded-lg">
                            {service.icon}
                          </div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardHeader>
                    </Card>
                  </div>

                  {/* Service Details */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.services.map((item, index) => (
                        <Card key={index} className="hover:shadow-lg smooth-transition">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-3">
                              <div className="p-2 bg-accent rounded-lg flex-shrink-0">
                                {item.icon}
                              </div>
                              <div>
                                <h3 className="font-semibold text-primary mb-2">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Key Achievements</h2>
            <p className="text-lg text-muted-foreground">Proven track record of successful project delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">14.4 MW</div>
                <div className="text-muted-foreground">Solar Power Delivered</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">250+</div>
                <div className="text-muted-foreground">Telecom Sites Serviced</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <div className="text-muted-foreground">Duckhams Retail Points</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">16+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;