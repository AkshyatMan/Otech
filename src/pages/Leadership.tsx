import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Linkedin, Mail, Award, Users, Target, TrendingUp } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Barna Neupane",
      role: "Managing Director & Founder",
      initials: "BN",
      background: "Visionary leader with 16+ years in Nepal's infrastructure sector. Led O.Tech from startup to multi-sector technical solution provider.",
      expertise: ["Strategic Planning", "Business Development", "Infrastructure", "Team Leadership"],
      achievements: [
        "Founded O.Tech in 2008 with vision for total technical solutions",
        "Led 14.4 MW solar project delivery across multiple districts",
        "Established strategic Danfe Construction joint venture",
        "Built 400+ point Duckhams distribution network"
      ]
    },
    {
      name: "Binyash Neupane", 
      role: "Infrastructure Head",
      initials: "BN",
      background: "Expert in telecom and energy project delivery with deep technical knowledge in RF planning, FTTH deployment, and solar EPC.",
      expertise: ["Telecom Infrastructure", "Solar Energy", "Project Management", "Technical Leadership"],
      achievements: [
        "Oversaw 250+ telecom site deployments nationwide",
        "Led technical delivery of Jhapa, Dang, Dhading solar plants",
        "Managed FTTH infrastructure across urban and rural Nepal",
        "Developed RF optimization protocols for major operators"
      ]
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to international standards in every project we undertake"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration", 
      description: "Building strong partnerships with clients, suppliers, and communities"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology for sustainable solutions"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth",
      description: "Driving Nepal's infrastructure development with measurable impact"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Leadership Team</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Experienced Leadership
          </h1>
          <p className="text-xl text-muted-foreground">
            Meet the visionary leaders driving O.Tech's mission to deliver total technical solutions across Nepal's infrastructure sectors.
          </p>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-8">
                  {/* Profile Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-foreground">{leader.initials}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-primary mb-2">{leader.name}</h2>
                      <p className="text-accent-foreground font-medium mb-3">{leader.role}</p>
                      <div className="flex gap-2">
                        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                        <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  {/* Background */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">Background</h3>
                    <p className="text-muted-foreground">{leader.background}</p>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-primary mb-3">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {leader.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h3 className="font-semibold text-primary mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {leader.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-accent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide our leadership and drive our success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg smooth-transition">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Leadership Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            "Success in technical solutions comes from combining visionary leadership with hands-on expertise, 
            local knowledge with international standards, and sustainable innovation with measurable impact."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">16+</div>
              <div className="text-muted-foreground">Years of Leadership</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Industry Sectors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Leadership;