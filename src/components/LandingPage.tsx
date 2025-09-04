import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-eco-station.jpg';
import categoriesImage from '@/assets/recycling-categories.jpg';
import { 
  Leaf, 
  Recycle, 
  Gift, 
  MapPin, 
  Award,
  Users,
  TrendingUp,
  Clock,
  Shield,
  Calendar
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  // Force cache refresh - QR functionality removed
  const features = [
    {
      icon: Calendar,
      title: 'Easy Scheduling',
      description: 'Schedule your waste drop-off appointments with flexible time slots.'
    },
    {
      icon: MapPin,
      title: 'Find Nearby Stations',
      description: 'Locate the nearest recycling stations with real-time availability.'
    },
    {
      icon: Gift,
      title: 'Earn Rewards',
      description: 'Get points for every drop-off and redeem amazing rewards from local partners.'
    },
    {
      icon: Recycle,
      title: 'Smart Categorization',
      description: 'AI-powered waste categorization helps you sort materials correctly.'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Users', value: '50K+' },
    { icon: Recycle, label: 'Waste Recycled', value: '2.5M kg' },
    { icon: Award, label: 'Rewards Redeemed', value: '75K+' },
    { icon: TrendingUp, label: 'CO₂ Saved', value: '1.2M lbs' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-primary-foreground">
              <Leaf className="h-3 w-3 mr-1" />
              Sustainable Waste Management
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Waste into
              <span className="block bg-gradient-to-r from-accent via-primary-glow to-accent bg-clip-text text-transparent">
                Rewards
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Schedule smart waste drop-offs, earn points, and make a positive impact on the environment with EcoDrop's innovative recycling platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={onGetStarted}
                className="text-lg px-8 py-4"
              >
                <Leaf className="h-5 w-5 mr-2" />
                Start Recycling Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-eco">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{value}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How EcoDrop Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform makes waste management simple, rewarding, and environmentally responsible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="shadow-card-eco transition-spring hover:shadow-eco hover:scale-105">
                <CardHeader className="text-center">
                  <div className="bg-gradient-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Wide Range of Accepted Materials
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From plastic bottles to electronics, we accept various waste categories. 
                Our AI-powered system helps you categorize items correctly and maximize your rewards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-success" />
                  <span>Safe and secure drop-off process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-success" />
                  <span>Quick 5-minute average processing time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-success" />
                  <span>Instant points and reward redemption</span>
                </div>
              </div>

              <Button variant="hero" size="lg" className="mt-8" onClick={onGetStarted}>
                <Recycle className="h-5 w-5 mr-2" />
                Explore Categories
              </Button>
            </div>

            <div className="relative">
              <img 
                src={categoriesImage} 
                alt="Recycling categories" 
                className="rounded-2xl shadow-eco w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-success p-4 rounded-xl shadow-glow">
                <div className="text-success-foreground text-center">
                  <div className="text-2xl font-bold">6+</div>
                  <div className="text-sm">Categories</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of environmentally conscious individuals making a positive impact. 
            Start your eco-journey today!
          </p>
          
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={onGetStarted}
            className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 shadow-glow"
          >
            <Leaf className="h-5 w-5 mr-2" />
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};