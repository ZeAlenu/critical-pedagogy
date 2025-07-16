
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
      id: "zjw-4b7QXrg",
      title: "המכניקה שעומדת בבסיס תורת הפדגוגיה הביקורתית",
      description: "היתוך השיח הפוליטי לתוך ממקצועות הליבה החל מאמנות ועד מתמטיקה"
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
        <h2 className="text-4xl font-bold mb-4">עדויות מהשטח</h2>
        <p className="text-xl text-gray-600">
          צפו בסרטונים שחושפים את האמת על הפדגוגיה הביקורתית הרעילה
        </p>
      </div>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
          >
            <Card className="hover-lift overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                    style={{ pointerEvents: 'auto' }}
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
      
      {/* Impressive WordPress-style Quote Section */}
      <div className="mt-16 max-w-5xl mx-auto">
        <div className="relative">
          {/* Background gradient and effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-2xl transform rotate-1"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-50 via-purple-50 to-pink-50 rounded-2xl transform -rotate-1"></div>
          
          {/* Main quote container */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12">
            {/* Decorative quotes */}
            <div className="absolute top-4 right-4 text-6xl md:text-8xl text-campaign-orange/20 font-serif leading-none" dir="ltr">"</div>
            <div className="absolute bottom-4 left-4 text-6xl md:text-8xl text-campaign-blue/20 font-serif leading-none rotate-180" dir="ltr">"</div>
            
            {/* Quote content */}
            <blockquote className="relative z-10 text-center">
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent leading-tight mb-6" dir="rtl">
                רצינו לגדל דור של אפיקורסים,
                <br />
                <span className="text-red-600">וגידלנו דור של עמי ארצות</span>
              </p>
              
              {/* Decorative line */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-1 bg-gradient-to-r from-campaign-blue via-campaign-orange to-campaign-purple rounded-full"></div>
              </div>
              
              {/* Optional attribution space */}
              <cite className="text-lg text-gray-500 font-medium not-italic">
                ביטוי המציאות בחינוך הישראלי
              </cite>
            </blockquote>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-campaign-orange/10 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSection;
