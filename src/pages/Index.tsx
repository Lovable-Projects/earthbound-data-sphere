
import { Globe } from "@/components/ui/globe";

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          GitHub Globe
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
          Interactive 3D globe visualization inspired by GitHub's homepage. 
          Explore connections and data points around the world.
        </p>
      </div>

      {/* Globe Container */}
      <div className="relative z-10 w-full max-w-4xl h-[600px] mx-auto">
        <Globe 
          className="w-full h-full"
          config={{
            pointSize: 1,
            globeColor: "#1a1a1a",
            showAtmosphere: true,
            atmosphereColor: "#4f46e5",
            emissive: "#000000",
            emissiveIntensity: 0.1,
            shininess: 0.9,
            autoRotate: true,
            autoRotateSpeed: 0.5,
          }}
        />
      </div>

      {/* Instructions */}
      <div className="relative z-10 text-center text-gray-400 mt-8 px-4">
        <p className="text-sm">
          Click and drag to rotate • Scroll to zoom • Add your data in src/data/globe-data.ts
        </p>
      </div>
    </div>
  );
};

export default Index;
