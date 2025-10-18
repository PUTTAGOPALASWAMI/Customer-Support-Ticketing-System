import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeadphonesIcon, Ticket, BarChart3, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <HeadphonesIcon className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">AssistPro</span>
          </div>
          <Button onClick={() => navigate('/login')}>Sign In</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight">
            Customer Support Made{' '}
            <span className="text-primary">Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your support operations with our intuitive ticketing system. 
            Track, manage, and resolve customer issues efficiently.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/login')}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
              View Demo
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg border bg-card text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Ticket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Easy Ticket Management</h3>
            <p className="text-muted-foreground">
              Create, track, and resolve tickets with an intuitive interface designed for efficiency.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Assign tickets to team members and track progress in real-time.
            </p>
          </div>
          <div className="p-6 rounded-lg border bg-card text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Analytics & Reports</h3>
            <p className="text-muted-foreground">
              Get insights into ticket volume, resolution times, and team performance.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
