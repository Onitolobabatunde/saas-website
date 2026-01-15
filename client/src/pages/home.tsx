import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, BarChart, Zap, Shield, Users, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/saas_dashboard_hero_ui_abstract.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
           {/* Background decorative blobs */}
           <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
           <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
           
           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center max-w-4xl mx-auto mb-16">
               <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary mb-6">
                 <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                 New Feature: AI Analytics 2.0
               </div>
               <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-slate-900 dark:text-white leading-[1.1]">
                 Analytics that drives <br className="hidden md:block"/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">exponential growth</span>
               </h1>
               <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                 Nexus provides the insights you need to make data-driven decisions. 
                 Real-time tracking, predictive modeling, and automated reporting in one platform.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link href="/auth">
                   <Button size="lg" className="h-14 px-8 text-lg rounded-full">
                     Start Free Trial <ArrowRight className="ml-2 h-5 w-5"/>
                   </Button>
                 </Link>
                 <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                   View Demo
                 </Button>
               </div>
             </div>

             {/* Hero Image */}
             <div className="relative mx-auto max-w-6xl mt-16 group">
               <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-background">
                 <img 
                   src={heroImage} 
                   alt="Nexus Dashboard Interface" 
                   className="w-full h-auto object-cover"
                 />
                 {/* Overlay Gradient for seamless fade if image isn't full height */}
                 <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
               </div>
             </div>
           </div>
        </section>

        {/* LOGO CLOUD */}
        <section className="py-12 border-y border-border bg-slate-50/50 dark:bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-8">TRUSTED BY INNOVATIVE TEAMS AT</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Just utilizing text placeholders styled as logos for mockup */}
               <h3 className="text-xl font-bold font-heading">Acme Corp</h3>
               <h3 className="text-xl font-bold font-heading">GlobalBank</h3>
               <h3 className="text-xl font-bold font-heading italic">SaaSify</h3>
               <h3 className="text-xl font-bold font-heading">Technix</h3>
               <h3 className="text-xl font-bold font-heading hidden lg:block">FutureNet</h3>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Everything you need to scale</h2>
              <p className="text-lg text-muted-foreground">
                Our platform is built for speed and reliability. Whether you're a startup or an enterprise, 
                Nexus scales with your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart,
                  title: "Real-time Analytics",
                  description: "Monitor your metrics in real-time with our high-frequency data pipelines."
                },
                {
                  icon: Zap,
                  title: "Instant Integration",
                  description: "Connect your existing tools in minutes with our one-click integrations."
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-grade encryption and SOC2 compliance to keep your data safe."
                },
                {
                  icon: Users,
                  title: "Team Collaboration",
                  description: "Share dashboards and reports with your team seamlessly."
                },
                {
                  icon: BarChart, // Reusing icon for brevity
                  title: "Predictive AI",
                  description: "Forecast future trends using our proprietary machine learning models."
                },
                {
                  icon: Zap, // Reusing icon
                  title: "Custom Reporting",
                  description: "Build custom reports that match your unique business KPIs."
                }
              ].map((feature, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
              <p className="text-lg text-muted-foreground">
                Start for free, scale as you grow. No hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Starter */}
              <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Starter</CardTitle>
                  <CardDescription>Perfect for side projects</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Up to 1,000 events", "1 User", "Basic Analytics", "Community Support"].map((item) => (
                      <li key={item} className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </div>
              </Card>

              {/* Pro */}
              <Card className="border-primary shadow-xl relative scale-105 z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Pro</CardTitle>
                  <CardDescription>For growing teams</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Up to 100,000 events", "5 Users", "Advanced Analytics", "Priority Support", "Custom Reports"].map((item) => (
                      <li key={item} className="flex items-center text-sm font-medium">
                        <Check className="h-4 w-4 text-primary mr-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full">Start Free Trial</Button>
                </div>
              </Card>

              {/* Enterprise */}
              <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {["Unlimited events", "Unlimited Users", "Custom Data Retention", "24/7 Phone Support", "SSO & Audit Logs"].map((item) => (
                      <li key={item} className="flex items-center text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary mr-3" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button variant="outline" className="w-full">Contact Sales</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-3xl p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="font-heading text-3xl md:text-5xl font-bold">Ready to transform your business?</h2>
                <p className="text-primary-foreground/80 text-lg md:text-xl">
                  Join thousands of teams using Nexus to build better products. 
                  Start your 14-day free trial today.
                </p>
                <Link href="/auth">
                  <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
