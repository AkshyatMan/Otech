import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Scale,
  User,
} from "lucide-react";
import Layout from "@/components/Layout";
import Career from "@/assets/Career-image.png";
import CareerBanner from "@/assets/CareerBanner.png";

const Careers = () => {
  const reasons = [
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Professional Growth",
      description:
        "As a prominent player in logistics, Upaya provides exposure to industry leaders both domestic and international. Upaya also provides a substantial career ladder for continuous advancement.",
    },
    {
      icon: <Scale className="h-12 w-12" />,
      title: "Work-Life Balance",
      description:
        "Upaya prioritizes employee well-being with comprehensive care initiatives, including paid time off, maternity and paternity leave, and even menstrual leave. We believe in fostering a healthy work-life balance for our team.",
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "Celebrate Efforts",
      description:
        "We celebrate the efforts of our team through in-house awards, monthly shoutouts, and engaging team activities. We take pride in recognizing and appreciating individual contributions to create a positive and supportive workplace culture.",
    },
  ];
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center -mt-16">
        <img
          src={CareerBanner}
          alt="Career illustration"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content container aligned with navigation */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl flex flex-col text-center mx-auto">
              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Career
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 animate-fade-in">
              Unlock Your Potential
            </h3>
            <p
              className="text-xl text-slate-600 mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              At Otech, we welcome individuals who are fueled by passion, adapt
              with agility, and thrive in a culture of continuous learning.
              Here, your journey goes beyond a conventional job—it's a
              transformative experience where growth is a constant, not a
              destination. We cultivate an environment that empowers you to
              explore boldly, learn rapidly, and collaborate meaningfully. Our
              culture celebrates diverse perspectives, offers the freedom to
              take ownership, and inspires you to push boundaries. Whether it's
              a small win or a major breakthrough, every success matters—and we
              celebrate them all.
            </p>
            <Button
              size="lg"
              className="group bg-blue-600 text-white hover:bg-blue-700 transform transition-all duration-300 hover:shadow-lg"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center ">
            <img
              src={Career}
              alt="Career illustration"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* why join us */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-slate-800 mb-16 animate-fade-in text-center">
            Why Join Otech
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="text-blue-600">{reason.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Card
            className="p-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="space-y-6">
              <div className="text-6xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-primary mb-4">
                No Current Openings
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We appreciate your interest in working with O.Tech. While we
                don't have any immediate openings, we're continuously growing
                and would love to keep your information on file for future
                opportunities.
              </p>

              <div className="bg-accent/20 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Stay Connected With Us
                </h3>
                <p className="text-muted-foreground">
                  Feel free to reach out and introduce yourself! We'd be happy
                  to discuss potential future opportunities and learn more about
                  your background and interests.
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
                  Follow us on social media to stay updated on company news and
                  future job openings.
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
              Learn what makes O.Tech a great place to build your career when
              opportunities arise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card
              className="hover:shadow-lg smooth-transition animate-fade-in hover-scale"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Growth Opportunities
                </h3>
                <p className="text-muted-foreground">
                  Work on diverse projects across telecom, energy, construction,
                  and trade sectors.
                </p>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg smooth-transition animate-fade-in hover-scale"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Team Culture
                </h3>
                <p className="text-muted-foreground">
                  Join a collaborative environment with experienced
                  professionals since 2008.
                </p>
              </CardContent>
            </Card>

            <Card
              className="hover:shadow-lg smooth-transition animate-fade-in hover-scale"
              style={{ animationDelay: "0.6s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Innovation
                </h3>
                <p className="text-muted-foreground">
                  Be part of Nepal's infrastructure development and
                  technological advancement.
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
