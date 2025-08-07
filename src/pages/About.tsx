import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import AboutUs from "/AboutUs.jpg";
import { Calendar, Award, Users, Target } from "lucide-react";
import SwiggleLine from "@/components/SwiggleLine";

const About = () => {
  const timeline = [
    { year: "2008", event: "O.Tech Pvt. Ltd. founded", description: "Established with vision for total technical solutions" },
    { year: "2012", event: "Telecom expansion", description: "Major RF planning and FTTH infrastructure projects" },
    { year: "2015", event: "Danfe Joint Venture", description: "Strategic partnership for construction services" },
    { year: "2018", event: "Solar energy focus", description: "Entry into renewable energy sector" },
    { year: "2020", event: "14.4 MW milestone", description: "Major solar installations in Jhapa, Dang, Dhading" },
    { year: "2022", event: "Duckhams partnership", description: "Became sole Nepal distributor for premium lubricants" },
    { year: "2024", event: "400+ retail network", description: "Expanded lubricants distribution nationwide" },
  ];

  const leadership = [
    {
      name: "Barna Neupane",
      role: "Managing Director",
      description: "Visionary leader with 16+ years in Nepal's infrastructure sector"
    },
    {
      name: "Binyash Neupane",
      role: "Infrastructure Head",
      description: "Expert in telecom and energy project delivery"
    }
  ];

  return (
    <Layout>
      <section className="relative h-[calc(50vh-64px)] w-full flex items-center -mt-16">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${AboutUs})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            16 Years of Excellence
          </h1>
          <p className="text-xl text-white">
            From humble beginnings to Nepal's trusted technical solution provider across telecom, construction, energy, and trade sectors.
          </p>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-accent -mt-16" />
      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-600 mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To deliver comprehensive technical solutions that drive Nepal's infrastructure growth,
                combining local expertise with international standards across multiple sectors.
              </p>
              <p className="text-lg text-muted-foreground">
                We are committed to excellence, reliability, and innovation in everything we do,
                ensuring our clients receive world-class service and sustainable solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Strategic Vision</h3>
                  <p className="text-sm text-muted-foreground">Leading Nepal's technical transformation</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">International standards, local expertise</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Team Excellence</h3>
                  <p className="text-sm text-muted-foreground">Skilled professionals across all sectors</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-primary mb-2">Proven Track Record</h3>
                  <p className="text-sm text-muted-foreground">16 years of successful project delivery</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}

      <SwiggleLine className="w-full h-20 text-accent -mt-16" />
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-blue-600 mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Milestones that shaped O.Tech into Nepal's leading technical solution provider</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Stem line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full hidden md:block"></div>
            <div className="absolute left-4 w-1 bg-primary/30 h-full md:hidden"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} text-center md:text-left`}>
                  {/* Branch line */}
                  <div className={`absolute w-16 h-0.5 bg-primary/30 top-1/2 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} hidden md:block`}></div>
                  <div className="absolute left-4 w-0.5 h-16 bg-primary/30 top-1/2 transform -translate-y-1/2 md:hidden"></div>

                  {/* Growth node */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>
                  <div className="absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:hidden">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-20' : 'md:mr-auto md:pr-20'} p-4`}>
                    <Card className="relative">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">{item.year}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-primary">{item.event}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}

              {/* Growth tip */}
              <div className="relative flex justify-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SwiggleLine className="w-full h-20 text-white -mt-16" />
      {/* Leadership */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">Experienced leaders driving O.Tech's vision forward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{leader.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{leader.name}</h3>
                  <p className="text-accent-foreground font-medium mb-4">{leader.role}</p>
                  <p className="text-muted-foreground">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;