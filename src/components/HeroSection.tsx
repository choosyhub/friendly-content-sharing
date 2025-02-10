
import { Play, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            <Users className="w-4 h-4 mr-2" />
            Best porn by choosy
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "150ms" }}>
          Your pleasure of porn completes here
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "300ms" }}>
          ChoosyHub – A free platform offering the pleasure of your satisfaction with a curated selection of the best content. No subscriptions, anytime, anywhere. 
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "450ms" }}>
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white w-full sm:w-auto" asChild>
              <Link to="/about">
                <Video className="w-4 h-4 mr-2" />
                About
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link to="/explore">
                <Play className="w-4 h-4 mr-2" />
                Explore Content
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
