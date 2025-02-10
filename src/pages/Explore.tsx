
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface ContentItem {
  id: string;
  type: string;
  title: string;
  url: string;
}

const Explore = () => {
  const [content, setContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // In a real application, you would typically make an API call here
        // For now, we'll simulate discovering videos in the public/videos directory
        const videos = await fetch('/videos')
          .then(response => response.text())
          .then(text => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const links = Array.from(doc.querySelectorAll('a'));
            return links
              .map(link => link.getAttribute('href'))
              .filter(href => href?.match(/\.(mp4|webm|ogg)$/i))
              .map(href => ({
                id: href || '',
                type: 'video',
                title: href?.split('/').pop()?.split('.')[0] || 'Untitled',
                url: `/videos/${href}`
              }));
          });

        setContent(videos);
        console.log("Loaded videos:", videos);
      } catch (error) {
        console.error("Error loading content:", error);
      }
    };

    loadContent();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-6">Explore Content</h1>
        
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.length === 0 ? (
                <p className="col-span-3 text-center text-gray-500 py-8">
                  No videos found. Add video files to the public/videos folder to see them here.
                </p>
              ) : (
                content.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <video 
                      src={item.url}
                      className="w-full h-48 object-cover"
                      controls
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.filter(item => item.type === 'video').length === 0 ? (
                <p className="col-span-3 text-center text-gray-500 py-8">
                  No videos found. Add video files to the public/videos folder to see them here.
                </p>
              ) : (
                content
                  .filter(item => item.type === 'video')
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <video 
                        src={item.url}
                        className="w-full h-48 object-cover"
                        controls
                      />
                      <div className="p-4">
                        <h3 className="font-semibold">{item.title}</h3>
                      </div>
                    </Card>
                  ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Explore;
