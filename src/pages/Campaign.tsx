
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Copy, Mail, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Campaign = () => {
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedContent, setCopiedContent] = useState(false);
  const [copiedRecipient, setCopiedRecipient] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const emailSubject = "דחוף: טיפול בפעילות מיסיונרית המפרה את חוק החינוך הממלכתי";
  const emailRecipient = "hello@example.com";
  const emailContent = `**שלום דוד,**

צפיתי בראיון של אמתי שלם על החוויה שלו בשיעורי הספרות בתכנית "עתודה הומניסטית" בבית הספר ליד"ה. מתוך העדות עולה שחדווה (שם בדוי) ניצלה את השיעורים לערעור הזהות הציונית והחלפתה בזהות של "סוכן שינוי" — סוכן שרואה את המציאות לא דרך זהות יהודית או ציונית אלא דרך האבחנה בין "מדכאים" ל"מדוכאים".

אמתי סיפר בראיון שהמורה חדווה אמרה לו: "התפיסות של אבא שלך לא רלוונטיות כי הוא לא עבר תהליך". נראה כי התהליך המדובר הוא בדיוק אותו תהליך שהיא קידמה בכיתה — טיפוח "זהות סוכן השינוי". חדווה מאמינה שמי שלא זכה ליכולת לראות את כל החברה דרך האבחנה בין מדכא למדוכא — באמת ובתמים אינו ראוי להתייחסות.

חשיבה ביקורתית, אומץ מוסרי ועומק אינטלקטואלי מתקיימים מבחינתה **אך ורק** עבור מי שאימץ את זהות סוכן השינוי. היא רואה בתכנית כלי ליצירת מי שתפיסתו ראויה להישמע — כלומר, התכנית **ההומניסטית** נועדה לייצר את מי שראוי להיחשב **אדם** במלוא מובן המילה. זוהי פעילות מיסיונרית, והשם המדויק ביותר עבורה הוא כנראה פדגוגיה ביקורתית.

מעבר לאבסורד הברור בגישה הזו — שלפיה רק מי שרואה את המציאות החברתית כולה דרך עדשה אחת ויחידה נחשב ביקורתי, מוסרי ועמוק — קיימת כאן סתירה יסודית עם המטרה הראשונה של חוק החינוך הממלכתי: **"לחנך אדם להיות אוהב אדם, אוהב עמו ואוהב ארצו, אזרח נאמן למדינת ישראל, המכבד את הוריו ואת משפחתו, את מורשתו, את זהותו התרבותית ואת לשונו";**  

אשמח לדעת כיצד אתה מתכוון לטפל בנושא בכל הרמות:  
• המורה חדווה, אשר נראה שאמונותיה העמוקות ביותר ככל הנראה אינן מאפשרות לה להימנע מפעילות מסיונרית הסותרת את יסודות חוק החינוך הממלכתי.  
• תכנית העתודה ההומניסטית שבה באה לידי ביטוי מסיונריות זו.  
• מנהל התיכון שאינו מטפל בבעיה, ואפשר לתכנית העתודה להעניק ציון לא על בסיס הידע בספרות הנדרש לבחינת הבגרות, אלא על בסיס ביטוי של עיקרי האמונה המיסיונרית.

בברכה,`;

  const handleCopySubject = async () => {
    try {
      await navigator.clipboard.writeText(emailSubject);
      setCopiedSubject(true);
      toast({ title: "נושא המייל הועתק בהצלחה!" });
      setTimeout(() => setCopiedSubject(false), 2000);
      checkAllCopied();
    } catch (err) {
      toast({ title: "שגיאה בהעתקה", variant: "destructive" });
    }
  };

  const handleCopyContent = async () => {
    try {
      await navigator.clipboard.writeText(emailContent);
      setCopiedContent(true);
      toast({ title: "תוכן המייל הועתק בהצלחה!" });
      setTimeout(() => setCopiedContent(false), 2000);
      checkAllCopied();
    } catch (err) {
      toast({ title: "שגיאה בהעתקה", variant: "destructive" });
    }
  };

  const handleCopyRecipient = async () => {
    try {
      await navigator.clipboard.writeText(emailRecipient);
      setCopiedRecipient(true);
      toast({ title: "כתובת הנמען הועתקה בהצלחה!" });
      setTimeout(() => setCopiedRecipient(false), 2000);
      checkAllCopied();
    } catch (err) {
      toast({ title: "שגיאה בהעתקה", variant: "destructive" });
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
    toast({ title: "תודה! המייל נשלח בהצלחה" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-campaign-blue via-campaign-purple to-campaign-orange bg-clip-text text-transparent mb-6 select-text">
            מרכז המיילים שלנו
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto select-text">
            העתיקו את הרכיבים למייל שלכם ושלחו לכתובת הנדרשת
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* יעד השליחה */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Mail className="h-5 w-5 text-campaign-blue" />
                  יעד השליחה
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono text-lg">{emailRecipient}</p>
                </div>
                <Button
                  onClick={handleCopyRecipient}
                  variant={copiedRecipient ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  {copiedRecipient ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      הועתק!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      העתק כתובת
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* נושא המייל */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Mail className="h-5 w-5 text-campaign-purple" />
                  נושא המייל
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-lg">{emailSubject}</p>
                </div>
                <Button
                  onClick={handleCopySubject}
                  variant={copiedSubject ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  {copiedSubject ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      הועתק!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      העתק נושא
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* תוכן המייל */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Mail className="h-5 w-5 text-campaign-orange" />
                  תוכן המייל
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={emailContent}
                  readOnly
                  className="min-h-[400px] bg-gray-50 text-right"
                />
                <Button
                  onClick={handleCopyContent}
                  variant={copiedContent ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  {copiedContent ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      הועתק!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      העתק תוכן
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Dialog */}
        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>שליחת המייל</DialogTitle>
              <DialogDescription>
                שלחת את המייל לכתובת hello@example.com?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setShowDialog(false)}>
                עדיין לא
              </Button>
              <Button onClick={handleEmailSent}>
                שלחתי
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Campaign;
