
import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to our content sharing platform. We strive to provide a space where creators can share their work with the world, fostering creativity and connection through media.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-8">
              <p className="text-amber-700">
                <strong>Disclaimer:</strong> We do not own any of the videos or content shared on this platform. All credits go to their respective original creators. This platform serves only as a means to share and discover content while respecting creators' rights.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
