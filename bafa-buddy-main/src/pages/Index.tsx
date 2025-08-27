import Navigation from "@/components/Navigation";
import InteractiveFeatures from "@/components/InteractiveFeatures";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowRight,
  FileText, 
  BarChart3, 
  Users, 
  Shield,
  Building,
  UserCheck,
  Check,
  Mail,
  Phone,
  Grid3x3,
  Zap,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  Workflow,
  Database,
  Sparkles,
  Lock,
  Atom
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative mt-16 h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern-subtle opacity-40"></div>

        {/* Animated circles covering two-thirds of banner on desktop */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-2/3">
          <div className="relative w-full h-full">
            <div className="absolute top-10 left-[5%] w-96 h-96 border-2 border-foreground/20 rounded-full animate-wave-1"></div>
            <div className="absolute top-20 left-[30%] w-[28rem] h-[28rem] border-2 border-foreground/20 rounded-full animate-wave-2"></div>
            <div className="absolute top-6 left-[55%] w-[32rem] h-[32rem] border-2 border-foreground/20 rounded-full animate-wave-3"></div>
            <div className="absolute top-24 left-[75%] w-80 h-80 border-2 border-foreground/20 rounded-full animate-wave-4"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 mt-8">
          <div className="text-center mx-auto max-w-2xl space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="border border-border text-xs font-medium px-3 py-1 animate-fade-in-up"
              >
                {t('hero.badge')}
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="animate-hero-text">{t('hero.title.the')}</span>{" "}
                <span className="animate-hero-text-delayed animate-text-glow text-black dark:text-white">{t('hero.title.smart')}</span>{" "}
                <span className="animate-hero-text-delayed-2">{t('hero.title.for')}</span>{" "}
                <span className="animate-hero-text-delayed-3 animate-text-glow text-black dark:text-white">
                  {t('hero.title.audits')}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto animate-slide-in-right stagger-2">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
              <Button size="lg" className="text-sm font-medium h-12 px-6">
                {t('hero.cta.demo')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-sm font-medium h-12 px-6">
                {t('hero.cta.learn')}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-6 animate-fade-in-up stagger-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="h-4 w-4 text-foreground" />
                <span>{t('hero.compliance.bafa')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Atom className="h-4 w-4 text-foreground" />
                <span>{t('hero.compliance.iso')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-foreground" />
                <span>{t('hero.compliance.gdpr')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InteractiveFeatures />

      {/* Solutions */}
      <section id="solutions" className="py-24 bg-muted/30 relative">
        {/* Decorative Circle Outlines */}
        <div className="absolute top-1/4 right-10 w-20 h-20 border border-foreground/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-5 w-32 h-32 border border-foreground/10 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight animate-fade-in-up">
              Built for <span className="animate-text-glow">everyone</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-card shadow-sm animate-scale-in stagger-2 circle-outline-lg">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">For Companies</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Easy access to energy efficiency subsidies",
                    "Improved operational efficiency and cost savings", 
                    "Significant time savings through automation",
                    "Compliance with energy management standards"
                  ].map((benefit, index) => (
                    <div key={index} className={`flex items-start gap-3 animate-fade-in-up stagger-${index + 1}`}>
                      <Check className="h-4 w-4 text-foreground mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-card shadow-sm animate-scale-in stagger-3">
              <CardContent className="p-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">For Auditors</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Access to new clients through our marketplace",
                    "Digital tools for efficient audit processes",
                    "Automated compliant reporting capabilities", 
                    "Streamlined workflow management"
                  ].map((benefit, index) => (
                    <div key={index} className={`flex items-start gap-3 animate-fade-in-up stagger-${index + 1}`}>
                      <Check className="h-4 w-4 text-foreground mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-pattern-subtle opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: Zap, value: "25%", label: "Average Energy Savings" },
              { icon: Clock, value: "50%", label: "Time Reduction" },
              { icon: Award, value: "100%", label: "BAFA Compliance" }
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-foreground" />
                </div>
                <div className="text-5xl font-bold tracking-tight">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-tight">
            About Arrotec
          </h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Our Vision:</span> We make energy efficiency simple, digital, and accessible for everyone.
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">Our Mission:</span> Arrotec bridges technology with regulatory requirements to support companies and auditors alike in achieving their energy efficiency goals.
            </p>
            <p className="text-muted-foreground">
              Based in Germany with a global perspective, we combine local regulatory expertise with international technology standards.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
              Simple pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent pricing that scales with your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "For small businesses getting started",
                features: ["Platform demo access", "Basic report templates", "Email support"],
                cta: "Get Started",
                variant: "outline" as const
              },
              {
                name: "Professional", 
                price: "€99",
                description: "For growing companies and auditors",
                features: ["Full platform access", "BAFA applications", "Auditor marketplace", "Priority support"],
                cta: "Choose Plan",
                variant: "default" as const,
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: ["Custom integrations", "Dedicated support", "On-premise deployment", "SLA guarantees"],
                cta: "Contact Us", 
                variant: "outline" as const
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative border-0 bg-card ${plan.popular ? 'ring-1 ring-foreground' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-foreground text-background text-xs font-medium px-3 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">
                      {plan.price}
                      {plan.price !== "Free" && plan.price !== "Custom" && <span className="text-lg text-muted-foreground font-normal">/month</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-foreground" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant={plan.variant} className="w-full" size="sm">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
                Get started today
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Ready to transform your energy management processes? Contact us to see how Arrotec can help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Mail className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">contact@arrotec.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Phone className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+49 (0) 123 456 789</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 bg-card shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Request a Demo</h3>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="bg-background" />
                    <Input placeholder="Last Name" className="bg-background" />
                  </div>
                  <Input placeholder="Company" className="bg-background" />
                  <Input type="email" placeholder="Email Address" className="bg-background" />
                  <Textarea placeholder="Message" rows={4} className="bg-background" />
                  <Button className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-8 h-8 bg-background rounded-sm flex items-center justify-center mr-3">
                <div className="w-4 h-4 grid grid-cols-2 gap-px">
                  <div className="bg-foreground rounded-[1px]"></div>
                  <div className="bg-foreground rounded-[1px]"></div>
                  <div className="bg-foreground rounded-[1px]"></div>
                  <div className="bg-foreground rounded-[1px]"></div>
                </div>
              </div>
              <div>
                <div className="text-xl font-semibold">Arrotec</div>
                <div className="text-sm text-background/70">Making energy efficiency accessible</div>
              </div>
            </div>
            <div className="flex items-center gap-8 text-sm text-background/70">
              <span>© 2024 Arrotec</span>
              <a href="#" className="hover:text-background transition-colors">Privacy</a>
              <a href="#" className="hover:text-background transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="shadow-lg">
          <Grid3x3 className="mr-2 h-4 w-4" />
          Request Demo
        </Button>
      </div>
    </div>
  );
};

export default Index;