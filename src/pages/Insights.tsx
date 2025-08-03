import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Calendar, Clock, ArrowRight, Zap, Building2, Wrench, Fuel } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      title: "Solar Power in Jhapa, Dang & Dhading: Our Lessons Learned",
      category: "Energy",
      icon: <Zap className="h-4 w-4" />,
      date: "March 15, 2024",
      readTime: "8 min read",
      excerpt: "Key insights from delivering 14.4 MW of solar capacity across three major districts in Nepal, including technical challenges and solutions.",
      featured: true
    },
    {
      title: "Optimizing Nepal's Public Telecom Network Infrastructure",
      category: "Telecom & IT",
      icon: <Building2 className="h-4 w-4" />,
      date: "February 28, 2024",
      readTime: "6 min read",
      excerpt: "Best practices for RF planning and FTTH deployment in Nepal's diverse geographical terrain and regulatory environment.",
      featured: true
    },
    {
      title: "Why Premium Lubricants Like Duckhams Improve Machinery Life",
      category: "Trade",
      icon: <Fuel className="h-4 w-4" />,
      date: "February 10, 2024",
      readTime: "5 min read",
      excerpt: "Technical analysis of how premium lubricants reduce maintenance costs and extend equipment life in industrial applications.",
      featured: false
    },
    {
      title: "Construction Excellence Through Strategic Partnerships",
      category: "Construction",
      icon: <Wrench className="h-4 w-4" />,
      date: "January 25, 2024",
      readTime: "7 min read",
      excerpt: "How the Danfe Construction joint venture model delivers superior civil engineering results through combined expertise.",
      featured: false
    },
    {
      title: "Nepal's Energy Transition: The Role of Solar EPC",
      category: "Energy",
      icon: <Zap className="h-4 w-4" />,
      date: "January 12, 2024",
      readTime: "9 min read",
      excerpt: "Analyzing Nepal's renewable energy goals and the critical role of experienced EPC contractors in achieving them.",
      featured: false
    },
    {
      title: "5G Network Readiness: Infrastructure Requirements",
      category: "Telecom & IT", 
      icon: <Building2 className="h-4 w-4" />,
      date: "December 20, 2023",
      readTime: "6 min read",
      excerpt: "Preparing Nepal's telecom infrastructure for 5G deployment: tower upgrades, fiber backbone, and spectrum considerations.",
      featured: false
    },
    {
      title: "Sustainable Construction Practices in Nepal",
      category: "Construction",
      icon: <Wrench className="h-4 w-4" />,
      date: "December 5, 2023",
      readTime: "8 min read",
      excerpt: "Implementing environmentally conscious construction methods while maintaining cost-effectiveness and quality standards.",
      featured: false
    },
    {
      title: "Distribution Network Optimization: A Case Study",
      category: "Trade",
      icon: <Fuel className="h-4 w-4" />,
      date: "November 18, 2023",
      readTime: "5 min read",
      excerpt: "How we built a 400-point distribution network for Duckhams lubricants across Nepal's challenging geography.",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: articles.length },
    { name: "Energy", count: articles.filter(a => a.category === "Energy").length },
    { name: "Telecom & IT", count: articles.filter(a => a.category === "Telecom & IT").length },
    { name: "Construction", count: articles.filter(a => a.category === "Construction").length },
    { name: "Trade", count: articles.filter(a => a.category === "Trade").length },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Energy": "bg-yellow-100 text-yellow-800",
      "Telecom & IT": "bg-blue-100 text-blue-800",
      "Construction": "bg-orange-100 text-orange-800",
      "Trade": "bg-green-100 text-green-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">Insights & Knowledge</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Industry Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert perspectives on Nepal's infrastructure development, technical innovations, and industry best practices from our experienced team.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg smooth-transition group">
                <div className="h-48 bg-accent"></div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    {article.icon}
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-accent-foreground transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="ghost" className="group-hover:bg-accent transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Regular Articles */}
          <h2 className="text-3xl font-bold text-primary mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg smooth-transition group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    {article.icon}
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent-foreground transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                  <Button variant="ghost" size="sm" className="group-hover:bg-accent transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest insights on Nepal's infrastructure development and technical innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Insights;