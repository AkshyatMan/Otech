import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Careers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in">
            Join Our Growing Team
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Thank you for your interest in O.Tech! While we don't have any open positions at the moment, 
            we're always looking for talented individuals to join our team.
          </p>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Card className="p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CardContent className="space-y-6">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                No Current Openings
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We appreciate your interest in working with O.Tech. While we don't have any immediate 
                openings, we're continuously growing and would love to keep your information on file 
                for future opportunities.
              </p>
              
              <div className="bg-accent/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Stay Connected With Us
                </h3>
                <p className="text-muted-foreground">
                  Feel free to reach out and introduce yourself! We'd be happy to discuss potential 
                  future opportunities and learn more about your background and interests.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/contact">
                  <Button className="w-full hover-scale" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Resume
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button className="w-full hover-scale" variant="outline">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button className="w-full hover-scale">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Follow us on social media to stay updated on company news and future job openings.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Culture Preview */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Work With O.Tech?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn what makes O.Tech a great place to build your career when opportunities arise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg smooth-transition animate-fade-in hover-scale" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  Work on diverse projects across telecom, energy, construction, and trade sectors.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg smooth-transition animate-fade-in hover-scale" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Team Culture</h3>
                <p className="text-muted-foreground">
                  Join a collaborative environment with experienced professionals since 2008.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg smooth-transition animate-fade-in hover-scale" style={{ animationDelay: "0.6s" }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Be part of Nepal's infrastructure development and technological advancement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;