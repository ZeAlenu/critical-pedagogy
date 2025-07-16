import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Play, Users, Target, Megaphone, Shield, Star, AlertTriangle, UserX, Brain, MessageSquareX, ShieldX, SquareLibrary, Library } from "lucide-react";
import VideoSection from "@/components/VideoSection";
import { motion } from "framer-motion";
import { parsePhoneNumber } from "libphonenumber-js";
import { PhoneInput } from "@/components/ui/phone-input";
const Index = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation using libphonenumber-js
  const validatePhone = (phone: string): boolean => {
    try {
      const phoneNumber = parsePhoneNumber(phone);
      return phoneNumber && phoneNumber.isValid();
    } catch {
      return false;
    }
  };

  // Check if email is from a disposable domain
  const checkDisposableEmail = async (email: string): Promise<boolean> => {
    try {
      const domain = email.split('@')[1]?.toLowerCase();
      if (!domain) return false;

      // Fetch disposable domains
      const [domainsResponse, wildcardsResponse] = await Promise.all([fetch('https://unpkg.com/disposable-email-domains@1.0.62/index.json'), fetch('https://unpkg.com/disposable-email-domains@1.0.62/wildcard.json')]);
      const domains = await domainsResponse.json();
      const wildcards = await wildcardsResponse.json();
      if (domains.includes(domain)) return true;
      for (let wildcard of wildcards) {
        const suffix = wildcard.slice(1);
        if (domain.endsWith(suffix)) return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking disposable email:', error);
      return false;
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      toast({
        title: "שגיאה",
        description: "כתובת המייל אינה תקינה",
        variant: "destructive"
      });
      return;
    }

    // Validate phone number
    if (!validatePhone(phone)) {
      toast({
        title: "שגיאה",
        description: "מספר הטלפון אינו תקין",
        variant: "destructive"
      });
      return;
    }

    // Check for disposable email
    const isDisposable = await checkDisposableEmail(email);
    if (isDisposable) {
      toast({
        title: "שגיאה",
        description: "לא ניתן להשתמש בכתובת מייל זמנית",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      // Send data to Google Sheets via Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbw3zwjybrzhipA4YuKP336bOGWPjD2VlXhuV8lizy84XEmYioIk5ffhfVkzPqTsJ0YigA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          timestamp: new Date().toISOString(),
          source: 'פדגוגיה ביקורתית רעילה'
        })
      });
      if (response.ok) {
        // Store in localStorage for navigation
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPhone', phone);
        toast({
          title: "הרשמה בוצעה בהצלחה!",
          description: "הפרטים נשלחו בהצלחה. עכשיו תוכל לבחור תבניות מייל לקמפיין"
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
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10"></div>
        <div className="container mx-auto px-4 py-16">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-campaign-blue via-campaign-purple to-campaign-orange bg-clip-text text-transparent mb-6">
              פדגוגיה ביקורתית רעילה
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed" dir="rtl">
שמים סוף למחדל עירעור הזהות במערכת החינוך. אקטיביזם לא בבית ספרנו!
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-campaign-blue" />
                <h3 className="text-2xl font-bold mb-2">4 מהלכים</h3>
                <p className="text-gray-600">של ניתוק מזהות</p>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <ShieldX className="w-12 h-12 mx-auto mb-4 text-campaign-purple" />
                <h3 className="text-2xl font-bold mb-2">מרחב בטוח</h3>
                <p className="text-gray-600">שהפך למרחב מערער</p>
              </CardContent>
            </Card>
            <Card className="hover-lift glass-effect">
              <CardContent className="p-6 text-center">
                <Library className="w-12 h-12 mx-auto mb-4 text-campaign-orange" />
                <h3 className="text-2xl font-bold mb-2">חינוך ציוני</h3>
                <p className="text-gray-600">ערכים שחייבים לשמר</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* 4 Steps Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">ארבעת מהלכי הניתוק</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                כך פועלים מורים רדיקלים ב"מרחב הבטוח" שלהם - מרחב מנתק שמפרק את זהותם הציונית של ילדינו
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
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

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }}>
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
                        <p className="text-gray-600 leading-relaxed">ההורים מוצגים כ&quot;לא רלוונטיים&quot; כי הם &quot;לא עברו תהליך&quot; של ערעור הזהות הציונית. כך נוצר קרע בין התלמיד למשפחתו.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6
            }}>
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

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.7
            }}>
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

          {/* About Toxic Critical Pedagogy Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <Card className="max-w-6xl mx-auto glass-effect">
              <CardContent className="p-8" dir="rtl">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
                    מה זה פדגוגיה ביקורתית רעילה?
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-right leading-relaxed space-y-6">
                  <p className="text-xl font-semibold text-gray-800 mb-6">
                    דמיינו בית ספר שבו לא מלמדים אהבת מולדת, כבוד להורים או גאווה במסורת.
                    <br />
                    <span className="text-red-600 font-bold">אלא בדיוק להפך.</span>
                  </p>
                  
                  <p className="text-lg text-gray-700">
                    מה שפעם נקרא "חינוך" הפך לזירת שטיפת מוח אידיאולוגית. מהגן ועד האקדמיה – מערכות שלמות עוסקות לא בהקניית ידע, אלא בהנדסת תודעה. במקום מתמטיקה, היסטוריה וספרות – ילדינו לומדים שמדינת ישראל היא מדכאת, שהמסורת היא שוביניסטית, ושההורים? סמל לעבר שצריך למחוק.
                  </p>
                  
                  <div className="bg-red-50 border-r-4 border-red-500 p-6 my-8">
                    <p className="text-lg font-bold text-red-800 mb-2">זו לא קונספירציה. זו המציאות.</p>
                  </div>
                  
                  <p className="text-lg text-gray-700">
                    תחת הכותרת המכובסת "פדגוגיה ביקורתית", שמקורה בתיאוריות מרקסיסטיות שיובאו לכאן דרך האו"ם בשנות ה־90, הפכה מערכת החינוך הישראלית לכלי פוליטי. בכיתה לא מחנכים – מגייסים. לא לידע – אלא ל"מאבק". הילדים שלנו כיום לא לומדים איך לחשוב – אלא מה לחשוב.
                  </p>
                  
                  <p className="text-lg text-gray-700">
                    במהפכה שקטה, שנעשתה הרחק מעיני ההורים, חדרו למערכת "סוכני שינוי" – אנשי חינוך ואקדמיה הרואים עצמם שליחים של אג'נדה עולמית. התוצאה ברורה:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    <div className="bg-red-100 p-4 rounded-lg text-center">
                      <p className="text-red-700 font-bold">✅ ציונים בירידה</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg text-center">
                      <p className="text-red-700 font-bold">✅ זהות יהודית הולכת ומתפוגגת</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg text-center">
                      <p className="text-red-700 font-bold">✅ אהבת הארץ מוחלפת בתחושת בושה</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700">
                    במקום לגדול עם שורשים – הילדים נעקרים מהם. במקום להיות גאים – הם נבוכים. במקום לבנות עתיד – הם לומדים לשנוא את ההווה.
                  </p>

                  <p className="text-lg text-gray-700">
                    השכלה, שמחת חיים ותום נעורים נגזלים מהם על ידי אידיאולוגים משולחי רסן
                  </p>

                  
                  <div className="bg-orange-50 border-2 border-orange-200 p-6 my-8 text-center">
                    <p className="text-xl font-bold text-orange-800 mb-4">זה לא חינוך.</p>
                    <p className="text-xl font-bold text-red-700">זו הפקרה.</p>
                  </div>
                  
                  <p className="text-xl font-bold text-gray-800">
                    זאת בגידה של מערכת החינוך בנו - ההורים.
                    <br />
                    זה פשע נגד האנושות
                    <br />
                    <span className="text-red-600">זה חייב להיפסק.</span>
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border-2 border-blue-200 text-center my-8">
                    <p className="text-2xl font-bold text-blue-800 mb-4">זה עלינו 🧡🇮🇱 לקחת אחריות ולתקן</p>
                    <p className="text-lg text-gray-700">
                      הילדים שלנו – והעתיד של המדינה שלנו – קוראים לנו להציל אותם.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Video Section */}
          <VideoSection />

          {/* Email Collection Form */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className="max-w-2xl mx-auto">
            <Card className="hover-lift glass-effect">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">הצטרפו למאבק חשוב</h2>
                  <p className="text-gray-600 text-lg">
                    השאירו את הפרטים שלכם וקחו חלק בהגנה על זהותם הציונית של ילדינו
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6" dir="ltr">
                  <div className="space-y-4">
                     <div className="space-y-2">
                       <Label htmlFor="email" className="text-right block text-sm font-medium text-gray-600">
                         כתובת מייל
                       </Label>
                       <div className="relative">
                         <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                         <Input id="email" type="email" placeholder="הזן כתובת מייל" value={email} onChange={e => setEmail(e.target.value)} className="pl-10 h-12 text-lg text-left" required dir="ltr" />
                       </div>
                     </div>
                     
                     <div className="space-y-2">
                       <Label htmlFor="phone" className="text-right block text-sm font-medium text-gray-600">
                         מספר טלפון
                       </Label>
                       <div className="relative">
                         <PhoneInput value={phone} onChange={value => setPhone(value || "")} placeholder="הזן מספר טלפון" className="h-12 text-lg text-left" />
                       </div>
                     </div>
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg font-semibold gradient-bg hover:opacity-90 transition-opacity animate-pulse-glow">
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
    </div>;
};
export default Index;