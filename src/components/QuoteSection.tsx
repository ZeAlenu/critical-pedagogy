import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
      className="mb-16 max-w-5xl mx-auto"
    >
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
            
            {/* Attribution */}
            <cite className="text-lg md:text-xl text-gray-600 font-medium not-italic" dir="rtl">
              יעקב חזן
              <br />
              <span className="text-base text-gray-500">ממייסדי הקיבוץ הארצי ומפ"ם</span>
            </cite>
          </blockquote>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-transparent via-campaign-orange/10 to-transparent rounded-2xl"></div>
        </div>
      </div>
      
      {/* Twitter embed */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-xl">
          <blockquote className="twitter-tweet" data-theme="light" data-align="center">
            <p lang="he" dir="rtl">רצינו לגדל דור של אפיקורסים, וגידלנו דור של עמי ארצות<br/><br/>יעקב חזן ממייסדי הקיבוץ הארצי ומפ״ם</p>
            &mdash; רז כינרת (@Kinnert2) <a href="https://twitter.com/Kinnert2/status/1944681235629957630?ref_src=twsrc%5Etfw">January 11, 2025</a>
          </blockquote>
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteSection;