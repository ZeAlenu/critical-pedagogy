

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Play, Users, Target, Megaphone, Shield, BookOpen, AlertTriangle, UserX, Brain, MessageSquareX } from "lucide-react";
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
    
    try {
      // Send data to Google Sheets via Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbxDCS7kMU0Gt0YiTbpUeyLxGhPf7VAcrZhVPjgSl4PblGTMkDf7cQhf9WyJAqkB4MNleg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          timestamp: new Date().toISOString(),
          source: 'פדגוגיה ביקורתית רעילה'
        }),
      });

      if (response.ok) {
        // Store in localStorage for navigation
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhone', phone);
        
        toast({
          title: "הרשמה בוצעה בהצלחה!",
          description: "הפרטים נשלחו בהצלחה. עכשיו תוכל לבחור תבניות מייל לקמפיין",
        });
        
        navigate('/campaign');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "שגיאה בשליחה",
        description: "אנא נסה שוב או צור קשר עימנו",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              פדגוגיה ביקורתית רעילה
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              חושפים את מהלכי הניתוק המסוכנים במערכת החינוך. יחד נגן על זהותם הציונית של ילדינו
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
                <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-campaign-blue" />
                <h3 className="text-2xl font-bold mb-2">4 מהלכים</h3>
                <p className="text-gray-600">של ניתוק מסוכן</p>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-campaign-purple" />
                <h3 className="text-2xl font-bold mb-2">מרחב בטוח</h3>
                <p className="text-gray-600">שהפך למרחב מנתק</p>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-campaign-orange" />
                <h3 className="text-2xl font-bold mb-2">חינוך ציוני</h3>
                <p className="text-gray-600">ערכים שחייבים לשמר</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 4 Steps Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">ארבעת מהלכי הניתוק</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                כך פועלים מורים רדיקלים ב"מרחב הבטוח" שלהם - מרחב מנתק שמפרק את זהותם הציונית של ילדינו
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                        <UserX className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                          זהות לאומית
                        </div>
                        <h3 className="text-xl font-bold mb-3">ניתוק מהזהות הציונית</h3>
                        <p className="text-gray-600 leading-relaxed">
                          השטחת דמות הפלסטיני לכדי תפקיד קורבן מוחלט, כך שהיהודי נכנס לתפקיד "המדכא". זה מערער את הזהות הציונית הבסיסית של התלמיד.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                        <Users className="w-8 h-8 text-orange-600" />
                      </div>
                      <div>
                        <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                          זהות משפחתית
                        </div>
                        <h3 className="text-xl font-bold mb-3">ניתוק מההורים</h3>
                        <p className="text-gray-600 leading-relaxed">
                          ההורים מוצגים כ"לא רלוונטיים" כי הם "לא עברו תהליך" של ערעור הזהות הציונית. כך נוצר קרע בין התלמיד למשפחתו.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                        <Brain className="w-8 h-8 text-purple-600" />
                      </div>
                      <div>
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                          שכל ישר
                        </div>
                        <h3 className="text-xl font-bold mb-3">ניתוק משיח רציונלי</h3>
                        <p className="text-gray-600 leading-relaxed">
                          העברת המסר באופן מובלע שמפעיל רגש ומעצב תודעה תוך עקיפת השיח הרציונלי. כך בלתי אפשרי לטעון נגד הטענה שהוחדרה במהלך מניפולטיבי.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Card className="hover-lift h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                        <MessageSquareX className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                          חינוך מחדש
                        </div>
                        <h3 className="text-xl font-bold mb-3">ניתוק התלמיד "המפריע"</h3>
                        <p className="text-gray-600 leading-relaxed">
                          שיימינג פומבי של תלמיד ששואל שאלות רציונליות. התלמיד מואשם ב"עשיית חקירה" ומוקע בפני חבריו כדי למנוע שיח פתוח וביקורתי.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
                  <h2 className="text-3xl font-bold mb-4">הצטרפו למאבק חשוב</h2>
                  <p className="text-gray-600 text-lg">
                    השאירו את הפרטים שלכם וקחו חלק בהגנה על זהותם הציונית של ילדינו
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
                    {isSubmitting ? "נרשם..." : "הצטרף למאבק"}
                  </Button>
                </form>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  בלחיצה על "הצטרף למאבק" אתם מסכימים לקבל עדכונים וחומרי הסברה
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

