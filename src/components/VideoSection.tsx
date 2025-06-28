
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const VideoSection = () => {
  const videos = [
    {
      id: "ecEC6B3GF-U",
      title: '"עושים לנו שטיפת מוח!" | עדות מטלטלת מתוך מערכת החינוך',
      description: "עדות מטלטלת של תלמיד על השטחת דמות הפלסטיני ונקיטת עמדה אנטי-ציונית במערכת החינוך"
    },
    {
      id: "XL4ze_0vAWI",
      title: "כיצד גורמים רדיקלים מונעים לימוד תנ\"ך בבתי הספר",
      description: "חשיפת מהלכי מניעת לימוד תנ\"ך ועקירת הזהות היהודית-ציונית"
    },
    {
      id: "kJQP7kiw5Fk",
      title: "איך להגן על ילדינו",
      description: "כלים מעשיים להורים ומחנכים למאבק חשוב זה"
    }
  ];

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
          צפו בסרטונים שחושפים את האמת על הפדגוגיה הביקורתית הרעילה
        </p>
      </div>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <Card className="hover-lift overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{video.description}</p>
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
