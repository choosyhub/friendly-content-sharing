
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

const creators = [
  {
    id: 1,
    name: "Sarah Johnson",
    handle: "@sarahfit",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    category: "Fitness",
  },
  {
    id: 2,
    name: "Mike Chen",
    handle: "@mikemusic",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    category: "Music",
  },
  {
    id: 3,
    name: "Emma Wilson",
    handle: "@emmacooks",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    category: "Cooking",
  },
  {
    id: 4,
    name: "David Park",
    handle: "@davidtech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    category: "Technology",
  },
];

const FeaturedCreators = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured Creators</h2>
            <p className="text-gray-600">Discover amazing creators and their content</p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center">
            View All
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creators.map((creator) => (
            <div
              key={creator.id}
              className="group relative bg-white p-6 rounded-xl border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="object-cover"
                  />
                </Avatar>
                <div>
                  <h3 className="font-semibold">{creator.name}</h3>
                  <p className="text-sm text-gray-500">{creator.handle}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {creator.category}
                  </span>
                </div>
              </div>
              <Button
                className="w-full mt-4 bg-white hover:bg-gray-50 text-gray-900 border shadow-sm"
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;
