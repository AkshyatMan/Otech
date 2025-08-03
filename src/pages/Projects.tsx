import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ExternalLink, MapPin, Calendar, Zap, Building2, Wrench, Fuel } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      category: "Energy",
      icon: <Zap className="h-5 w-5" />,
      projects: [
        {
          name: "Jhapa Solar Plant",
          capacity: "3.4 MW",
          location: "Jhapa District",
          year: "2020",
          description: "Grid-tied solar photovoltaic power plant with comprehensive EPC delivery including design, procurement, construction and commissioning.",
          status: "Completed"
        },
        {
          name: "Dang Solar Installation",
          capacity: "5.3 MW",
          location: "Dang District", 
          year: "2021",
          description: "Large-scale solar energy project featuring advanced inverter technology and monitoring systems for optimal performance.",
          status: "Completed"
        },
        {
          name: "Dhading Solar Project",
          capacity: "5.7 MW",
          location: "Dhading District",
          year: "2022",
          description: "State-of-the-art solar installation with grid integration and remote monitoring capabilities.",
          status: "Completed"
        }
      ]
    },
    {
      category: "Telecom & IT",
      icon: <Building2 className="h-5 w-5" />,
      projects: [
        {
          name: "National FTTH Deployment",
          capacity: "250+ Sites",
          location: "Nationwide",
          year: "2019-2024",
          description: "Fiber-to-the-home infrastructure deployment across urban and rural areas with comprehensive network optimization.",
          status: "Ongoing"
        },
        {
          name: "RF Network Optimization",
          capacity: "Multiple Operators",
          location: "Kathmandu Valley",
          year: "2018-2024",
          description: "Drive testing and network optimization services for major telecom operators ensuring optimal coverage and quality.",
          status: "Ongoing"
        },
        {
          name: "Tower Infrastructure",
          capacity: "100+ Towers",
          location: "Nepal",
          year: "2015-2024",
          description: "Telecom tower construction, maintenance and site acquisition services across diverse geographical locations.",
          status: "Ongoing"
        }
      ]
    },
    {
      category: "Construction",
      icon: <Wrench className="h-5 w-5" />,
      projects: [
        {
          name: "Danfe Infrastructure Projects",
          capacity: "Multiple Sites",
          location: "Various Locations",
          year: "2015-2024",
          description: "Civil engineering projects including roads, bridges and public infrastructure through our Danfe Construction joint venture.",
          status: "Ongoing"
        },
        {
          name: "Transmission Line Construction", 
          capacity: "132 kVA",
          location: "Central Nepal",
          year: "2020",
          description: "High-voltage transmission line construction with specialized equipment and safety protocols.",
          status: "Completed"
        }
      ]
    },
    {
      category: "Trade",
      icon: <Fuel className="h-5 w-5" />,
      projects: [
        {
          name: "Duckhams Distribution Network",
          capacity: "400+ Points",
          location: "Nationwide",
          year: "2022-2024",
          description: "Establishment of comprehensive lubricant distribution network with 14 regional hubs and 400+ retail points.",
          status: "Ongoing"
        },
        {
          name: "Regional Hub Expansion",
          capacity: "14 Hubs",
          location: "Major Cities",
          year: "2023",
          description: "Strategic placement of distribution hubs in key locations for efficient supply chain management.",
          status: "Completed"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Our Projects</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Delivered Excellence
          </h1>
          <p className="text-xl text-muted-foreground">
            Showcasing our track record of successful project delivery across multiple sectors with proven results and client satisfaction.
          </p>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {projects.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold text-primary">{category.category}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.projects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg smooth-transition group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-xl group-hover:text-accent-foreground transition-colors">
                          {project.name}
                        </CardTitle>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="h-4 w-4" />
                          <span>{project.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <Button variant="ghost" size="sm" className="group-hover:bg-accent transition-colors">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Project Impact</h2>
            <p className="text-lg text-muted-foreground">Measurable results from our comprehensive project portfolio</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">14.4 MW</div>
              <div className="text-muted-foreground">Solar Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Telecom Sites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">400+</div>
              <div className="text-muted-foreground">Distribution Points</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;