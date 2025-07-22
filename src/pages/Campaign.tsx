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
  const [dialogStep, setDialogStep] = useState(1); // 1 for explanation, 2 for email details
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
  const handleOpenDialog = () => {
    setDialogStep(1);
    setShowDialog(true);
  };

  const handleNextStep = () => {
    setDialogStep(2);
  };

  const handleEmailSent = () => {
    console.log("success");
    setShowDialog(false);
    setDialogStep(1);
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

          <Button onClick={handleOpenDialog} size="lg" className="bg-gradient-to-r from-campaign-blue via-campaign-purple to-campaign-orange text-white font-bold px-8 py-4 text-lg">
            שלח מייל למפקח
          </Button>
        </motion.div>


        {/* Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            {dialogStep === 1 ? (
              <>
                <DialogHeader>
                  <DialogTitle className="text-xl">שליחת מייל למפקח</DialogTitle>
                  <DialogDescription>
                    מטרת המייל היא ליצור מעורבות ולהראות שהנושא לא יכול לעבור על סדר היום
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-campaign-blue/10 via-campaign-purple/10 to-campaign-orange/10 p-6 rounded-lg text-right">
                    <h3 className="font-bold text-lg mb-4">למה חשוב לשלוח מייל למפקח?</h3>
                    <div className="space-y-3 text-gray-700">
                      <p>• <strong>יצירת מעורבות:</strong> המייל מעלה את המודעות לבעיה ברמת הפיקוח</p>
                      <p>• <strong>תיעוד רשמי:</strong> יוצר רישום רשמי של הבעיה במערכת החינוך</p>
                      <p>• <strong>דרישה לפעולה:</strong> מחייב את המפקח להתייחס ולנקוט פעולה</p>
                      <p>• <strong>מניעת התעלמות:</strong> מבטיח שהנושא לא יעבור על סדר היום</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-right">
                    <p className="font-semibold text-yellow-800 mb-2">חשוב לזכור:</p>
                    <p className="text-yellow-700">המייל נכתב בטון מכבד ומקצועי, מבוסס על עובדות ומתמקד בדרישה לפיקוח ולטיפול בבעיה.</p>
                  </div>
                </div>

                <DialogFooter className="gap-2">
                  <Button variant="outline" onClick={() => setShowDialog(false)}>
                    ביטול
                  </Button>
                  <Button onClick={handleNextStep} className="bg-gradient-to-r from-campaign-blue via-campaign-purple to-campaign-orange text-white">
                    הבא
                  </Button>
                </DialogFooter>
              </>
            ) : (
              <>
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

                  {/* הודעה על העתקת המייל */}
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-3 text-blue-800">
                        <Mail className="h-5 w-5 text-blue-600" />
                        חשוב - העתקת המייל
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-right space-y-3">
                      <p className="text-blue-700">לאחר שליחת המייל למפקח, נא להעביר את המייל גם לכתובת:</p>
                      <div className="bg-white p-3 rounded border border-blue-200">
                        <p className="font-mono text-lg text-blue-800 font-semibold">zealenuedu@gmail.com</p>
                      </div>
                      <p className="text-blue-700 text-sm">זה יאפשר לנו לעקוב אחר הפניות ולוודא שהן מקבלות מענה מתאים.</p>
                    </CardContent>
                  </Card>
                </div>

                <DialogFooter className="gap-2">
                  <Button variant="outline" onClick={() => setDialogStep(1)}>
                    חזור
                  </Button>
                  <Button variant="outline" onClick={() => setShowDialog(false)}>
                    סגור
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>;
};
export default Campaign;