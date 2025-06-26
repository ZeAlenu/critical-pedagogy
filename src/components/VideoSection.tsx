
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const videos = [
    {
      id: "dQw4w9WgXcQ", // Sample YouTube video ID
      title: "החזון שלנו לעתיד",
      description: "מה אנחנו רוצים להשיג ואיך נגיע לשם יחד"
    },
    {
      id: "3JZ_D3ELwOQ", // Another sample video ID
      title: "הישגים מהעבר",
      description: "מבט על מה שכבר השגנו ומה שעוד מצפה לנו"
    },
    {
      id: "kJQP7kiw5Fk", // Another sample video ID
      title: "קריאה לפעולה",
      description: "איך כל אחד מכם יכול לקחת חלק בשינוי"
    }
  ];

  const handleVideoClick = (videoId: string) => {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">הסיפור שלנו בווידאו</h2>
        <p className="text-xl text-gray-600">
          צפו בסרטונים שמספרים את הסיפור שלנו ומציגים את החזון שלנו לעתיד
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <Card className="hover-lift cursor-pointer group overflow-hidden">
              <CardContent className="p-0">
                <div 
                  className="relative aspect-video bg-gradient-to-br from-campaign-blue to-campaign-purple"
                  onClick={() => handleVideoClick(video.id)}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 group-hover:bg-white group-hover:scale-110 transition-all">
                      <Play className="w-8 h-8 text-campaign-blue mr-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{video.title}</h3>
                    <p className="text-white/90 text-sm">{video.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default VideoSection;
