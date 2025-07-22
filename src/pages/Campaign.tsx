import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Copy, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
const Campaign = () => {
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);
  const [copiedRecipient, setCopiedRecipient] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const emailSubject = "לטיפולך כמפקח - פדגוגיה אנטי ציונית בבית ספר מצטיינים ליד״ה";
  const emailRecipient = "davidnim@education.gov.il";
  const emailContent = `שלום דוד,

צפיתי בראיון של אמתי שלם על החוויה שלו בשיעורי הספרות בתכנית "עתודה הומניסטית" בבית הספר ליד"ה. מתוך העדות עולה שחדווה (שם בדוי) ניצלה את השיעורים לערעור הזהות הציונית והחלפתה בזהות של "סוכן שינוי" — סוכן שרואה את המציאות לא דרך זהות יהודית או ציונית אלא דרך האבחנה בין "מדכאים" ל"מדוכאים".

אמתי סיפר בראיון שהמורה חדווה אמרה לו: "התפיסות של אבא שלך לא רלוונטיות כי הוא לא עבר תהליך". נראה כי התהליך המדובר הוא בדיוק אותו תהליך שהיא קידמה בכיתה — טיפוח "זהות סוכן השינוי". חדווה מאמינה שמי שלא זכה ליכולת לראות את כל החברה דרך האבחנה בין מדכא למדוכא — באמת ובתמים אינו ראוי להתייחסות.

חשיבה ביקורתית, אומץ מוסרי ועומק אינטלקטואלי מתקיימים מבחינתה אך ורק עבור מי שאימץ את זהות סוכן השינוי. היא רואה בתכנית כלי ליצירת מי שתפיסתו ראויה להישמע — כלומר, התכנית ההומניסטית נועדה לייצר את מי שראוי להיחשב אדם במלוא מובן המילה. זוהי פעילות מיסיונרית, והשם המדויק ביותר עבורה הוא כנראה פדגוגיה ביקורתית.

מעבר לאבסורד הברור בגישה הזו — שלפיה רק מי שרואה את המציאות החברתית כולה דרך עדשה אחת ויחידה נחשב ביקורתי, מוסרי ועמוק — קיימת כאן סתירה יסודית עם המטרה הראשונה של חוק החינוך הממלכתי: "לחנך אדם להיות אוהב אדם, אוהב עמו ואוהב ארצו, אזרח נאמן למדינת ישראל, המכבד את הוריו ואת משפחתו, את מורשתו, את זהותו התרבותית ואת לשונו";  

אשמח לדעת כיצד אתה מתכוון לטפל בנושא בכל הרמות:  
• המורה חדווה, אשר נראה שאמונותיה העמוקות ביותר ככל הנראה אינן מאפשרות לה להימנע מפעילות מסיונרית הסותרת את יסודות חוק החינוך הממלכתי.  
• תכנית העתודה ההומניסטית שבה באה לידי ביטוי מסיונריות זו.  
• מנהל התיכון שאינו מטפל בבעיה, ואפשר לתכנית העתודה להעניק ציון לא על בסיס הידע בספרות הנדרש לבחינת הבגרות, אלא על בסיס ביטוי של עיקרי האמונה המיסיונרית.

בברכה,`;
  const handleCopySubject = async () => {
    try {
      await navigator.clipboard.writeText(emailSubject);
      setCopiedSubject(true);
      toast({
        title: "נושא המייל הועתק בהצלחה!"
      });
      setTimeout(() => setCopiedSubject(false), 2000);
      checkAllCopied();
    } catch (err) {
      toast({
        title: "שגיאה בהעתקה",
        variant: "destructive"
      });
    }
  };
  const handleCopyContent = async () => {
    try {
      await navigator.clipboard.writeText(emailContent);
      setCopiedContent(true);
      toast({
        title: "תוכן המייל הועתק בהצלחה!"
      });
      setTimeout(() => setCopiedContent(false), 2000);
      checkAllCopied();
    } catch (err) {
      toast({
        title: "שגיאה בהעתקה",
        variant: "destructive"
      });
    }
  };
  const handleCopyRecipient = async () => {
    try {
      await navigator.clipboard.writeText(emailRecipient);
      setCopiedRecipient(true);
      toast({
        title: "כתובת הנמען הועתקה בהצלחה!"
      });
      setTimeout(() => setCopiedRecipient(false), 2000);
      checkAllCopied();
    } catch (err) {
      toast({
        title: "שגיאה בהעתקה",
        variant: "destructive"
      });
    }
  };
  const checkAllCopied = () => {
    setTimeout(() => {
      if (copiedSubject && copiedContent && copiedRecipient) {
        setShowDialog(true);
      }
    }, 100);
  };
  const handleEmailSent = () => {
    console.log("success");
    setShowDialog(false);
    toast({
      title: "תודה! המייל נשלח בהצלחה"
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-campaign-blue via-campaign-purple to-campaign-orange bg-clip-text text-transparent mb-6 select-text">אירוע בית ספר ליד״ה</h1>
          
          <div className="max-w-4xl mx-auto text-right text-gray-700 leading-relaxed space-y-2 mb-8">
            <p className="text-lg font-semibold">
              "התפיסות [הציוניות] של אבא שלך לא רלוונטיות כי הוא לא עבר תהליך".
            </p>
            <p>
              כך אמרה המורה חדווה (שם בדוי) בתכנית בשם "עתודה הומניסטית" בבית ספר יוקרתי בירושלים לאמתי שלם בכיתה י"ב.
            </p>
            <p>מהו אותו "תהליך"?</p>
            <p>
              במקום אהבת הארץ הם לומדים על ה"נכבה". במקום ציונות הם מוכוונים לחוש בושה. במקום היסטוריה מוחדרת לתלמידים אידאולוגיה צינית.
            </p>
            <p>זה לא קורה רק בבתי ספר יוקרתיים אלא בכל הארץ. המהלך מקודם מלמעלה, כולל במוסדות להכשרת מורים העובדים בצורה הדוקה עם גופים אנטי ציוניים מובהקים כמו אונסק"ו. לכן ההישגים הלימודיים של הילדים שלנו בירידה, תכני הזהות כמו תנ"ך ומולדת הולכים ונמוגים. והחלל הזה משמש להפיכת התלמיד ל"סוכן שינוי".</p>
            
            <p>
              טכניקת ערעור הזהות הקיימת והחלפתה בזהות "סוכן השינוי" נקראת: "פדגוגיה ביקורתית". זו אינה חשיבה ביקורתית אלא שנאת זהות.
            </p>
            <p>
              תהליך הפדגוגיה הביקורתית הוא מחתרתי. לכן כאשר אמתי שאל את המנהל אם אותה "פדגוגיה ביקורתית" מותרת בבית הספר או לא – הוא לא הסכים לענות.
            </p>
            <p className="font-semibold">הגיע הזמן לדרוש תשובות ולדרוש פיקוח!</p>
            
            <div className="bg-gradient-to-r from-campaign-blue/10 via-campaign-purple/10 to-campaign-orange/10 p-4 rounded-lg mt-6">
              <p className="font-bold text-lg mb-1">הגיע הזמן לפתוח עיניים.</p>
              <p>להחזיר את החינוך לילדינו. להשיב לעצמנו את צדקת דרכנו.</p>
              <p className="font-semibold">זה העתיד של הילדים שלנו. של כולנו.</p>
            </div>
          </div>

          <Button onClick={() => setShowDialog(true)} size="lg" className="bg-gradient-to-r from-campaign-blue via-campaign-purple to-campaign-orange text-white font-bold px-8 py-4 text-lg">
            שלח מייל למפקח
          </Button>
        </motion.div>


        {/* Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl">העתק את פרטי המייל</DialogTitle>
              <DialogDescription>
                העתק את הפרטים הבאים ושלח את המייל
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              {/* יעד השליחה */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <Mail className="h-5 w-5 text-campaign-blue" />
                    יעד השליחה
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-mono text-sm">{emailRecipient}</p>
                    </div>
                    <p className="text-sm mt-2 text-right text-gray-600">דייוד נמרוד סימרוט - מפקח כולל על-יסודי מ"מ מחוז העיר ירושלים (מנח"י)</p>
                  </div>
                  <Button onClick={handleCopyRecipient} variant={copiedRecipient ? "default" : "outline"} className="flex items-center gap-2">
                    {copiedRecipient ? <>
                        <CheckCircle className="h-4 w-4" />
                        הועתק!
                      </> : <>
                        <Copy className="h-4 w-4" />
                        העתק כתובת
                      </>}
                  </Button>
                  <div className="bg-blue-50 p-4 rounded-lg text-right border border-blue-200">
                    <p className="font-mono text-base mb-1">zealenuedu@gmail.com</p>
                    <p>נא להוסיף את הכתובת בעותק (CC) או להעביר את המייל לכתובת זו על מנת שנוכל לעקוב אחר הפניה.</p>
                  </div>
                </CardContent>
              </Card>

              {/* נושא המייל */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <Mail className="h-5 w-5 text-campaign-purple" />
                    נושא המייל
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm">{emailSubject}</p>
                  </div>
                  <Button onClick={handleCopySubject} variant={copiedSubject ? "default" : "outline"} className="flex items-center gap-2">
                    {copiedSubject ? <>
                        <CheckCircle className="h-4 w-4" />
                        הועתק!
                      </> : <>
                        <Copy className="h-4 w-4" />
                        העתק נושא
                      </>}
                  </Button>
                </CardContent>
              </Card>

              {/* תוכן המייל */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3">
                    <Mail className="h-5 w-5 text-campaign-orange" />
                    תוכן המייל
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea value={emailContent} readOnly className="min-h-[300px] bg-gray-50 text-right text-sm" />
                  <Button onClick={handleCopyContent} variant={copiedContent ? "default" : "outline"} className="flex items-center gap-2">
                    {copiedContent ? <>
                        <CheckCircle className="h-4 w-4" />
                        הועתק!
                      </> : <>
                        <Copy className="h-4 w-4" />
                        העתק תוכן
                      </>}
                  </Button>
                </CardContent>
              </Card>
            </div>

            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                סגור
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>;
};
export default Campaign;