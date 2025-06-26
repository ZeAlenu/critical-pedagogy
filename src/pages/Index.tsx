
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Play, Users, Target, Megaphone } from "lucide-react";
import VideoSection from "@/components/VideoSection";
import { motion } from "framer-motion";

const Index = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !phone) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call to store user data
    setTimeout(() => {
      // Store in localStorage for now (would be database in real app)
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPhone', phone);
      
      toast({
        title: "הרשמה בוצעה בהצלחה!",
        description: "עכשיו תוכל לבחור תבניות מייל לקמפיין",
      });
      
      setIsSubmitting(false);
      navigate('/campaign');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-campaign-blue via-campaign-purple to-campaign-orange bg-clip-text text-transparent mb-6">
              הקמפיין שלנו
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              הצטרפו לקמפיין שמשנה את הפנים של הפוליטיקה הישראלית. יחד נבנה עתיד טוב יותר לכולנו
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-campaign-blue" />
                <h3 className="text-2xl font-bold mb-2">50,000+</h3>
                <p className="text-gray-600">תומכים פעילים</p>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-campaign-purple" />
                <h3 className="text-2xl font-bold mb-2">120</h3>
                <p className="text-gray-600">ערים ויישובים</p>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <Megaphone className="w-12 h-12 mx-auto mb-4 text-campaign-orange" />
                <h3 className="text-2xl font-bold mb-2">15</h3>
                <p className="text-gray-600">שנות ניסיון</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Video Section */}
          <VideoSection />

          {/* Email Collection Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="hover-lift glass-effect">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">הצטרפו אלינו עוד היום</h2>
                  <p className="text-gray-600 text-lg">
                    השאירו את הפרטים שלכם ותקבלו עדכונים על הקמפיין ודרכים להשפיע
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="כתובת מייל"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pr-10 h-12 text-lg"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="tel"
                        placeholder="מספר טלפון"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="pr-10 h-12 text-lg"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold gradient-bg hover:opacity-90 transition-opacity animate-pulse-glow"
                  >
                    {isSubmitting ? "נרשם..." : "הצטרף לקמפיין"}
                  </Button>
                </form>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  בלחיצה על "הצטרף לקמפיין" אתם מסכימים לקבל עדכונים מהקמפיין
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
