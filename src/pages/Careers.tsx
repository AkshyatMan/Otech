import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Scale, User } from "lucide-react";
import Layout from "@/components/Layout";
import Career from "@/assets/Career-image.png";
import CareerBanner from "@/assets/CareerBanner.png";
import Team from "@/assets/lifeAtOtech/Team.png";
import tokenOflove from "@/assets/lifeAtOtech/tokenOflove.png";
import meeting from "@/assets/lifeAtOtech/meeting.png";
import birthday from "@/assets/lifeAtOtech/birthday.png";
import teamMeeting from "@/assets/lifeAtOtech/teamMeeting.png";
import meeting2 from "@/assets/lifeAtOtech/meeting2.png";
import standing from "@/assets/lifeAtOtech/standing.png";
import Conference from "@/assets/lifeAtOtech/Conference.png";
import { useState } from "react";

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: Team, alt: "Life at Otech 1" },
    { src: tokenOflove, alt: "Life at Otech 2" },
    { src: meeting, alt: "Life at Otech 3" },
    { src: birthday, alt: "Life at Otech 3" },
    { src: teamMeeting, alt: "Life at Otech 3" },
    { src: meeting2, alt: "Life at Otech 3" },
    { src: standing, alt: "Life at Otech 3" },
    { src: Conference, alt: "Life at Otech 3" },
  ];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

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
      <section className="relative h-[calc(50vh-64px)] w-full flex items-center -mt-16">
        <img
          src={CareerBanner}
          alt="Career illustration"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

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
            <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 animate-fade-in">
              Unlock Your Potential
            </h3>
            <p
              className="text-xl text-muted-foreground mb-8 animate-fade-in"
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
              onClick={() => {
                const section = document.getElementById("career-section");
                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
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
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-blue-600 mb-16 animate-fade-in text-center">
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
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* No Current Openings */}
      <section className="py-16 " id="career-section">
        <div className="max-w-7xl mx-auto text-center px-4">
          <Card
            className="p-8 animate-fade-in shadow-xl"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-2">
                No Current Openings
              </h2>
              <p className="text-muted-foreground text-lg">
                We're not hiring right now, but we'd still love to stay in
                touch.
              </p>
              <a
                href="/contact"
                className="inline-block text-primary underline hover:text-primary/80 transition"
              >
                Notify me about future jobs
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Life at Otech Photo Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center">
            Life at Otech
          </h2>
          <div className="flex flex-col gap-4">
            {/* First image in a single row */}
            <div className="w-full">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover aspect-video rounded-lg shadow-md"
              />
            </div>
            {/* Remaining images in a grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 ease-in-out`}
                  onClick={() => handleImageClick(index + 1)} // Adjust index for sliced array
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover aspect-square animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-3xl max-h-full mx-auto p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <div className="">
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
                onClick={handleCloseModal}
              >
                &times;
              </button>
            </div>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <div>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold opacity-75 hover:opacity-100"
                onClick={handlePrevImage}
              >
                &#8249;
              </button>
            </div>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold opacity-75 hover:opacity-100"
              onClick={handleNextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Careers;
