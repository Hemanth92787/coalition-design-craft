import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Target, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic guidance to help your business achieve its goals and overcome challenges."
  },
  {
    icon: Users,
    title: "Team Development",
    description: "Build high-performing teams through training, coaching, and development programs."
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Comprehensive planning services to align your vision with actionable strategies."
  },
  {
    icon: TrendingUp,
    title: "Growth Solutions",
    description: "Innovative solutions designed to accelerate your business growth and market presence."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to help your business succeed in today's dynamic market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border shadow-soft hover:shadow-medium transition-smooth bg-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
