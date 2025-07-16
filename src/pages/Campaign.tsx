
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Copy, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Campaign = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<number | null>(null);

  const emailTemplates = [
    {
      id: 1,
      title: "קריאה לתמיכה כללית",
      subject: "הצטרפו לקמפיין שמשנה את הפנים של הפוליטיקה",
      content: `שלום רב,

אני כותב אליכם מתוך אמונה עמוקה שיש לנו הזדמנות לשנות את המציאות הפוליטית בישראל.

הקמפיין שלנו מתמקד בשלושה עקרונות מרכזיים:
• שקיפות ואמינות בשירות הציבור
• מדיניות כלכלית הוגנת לכלל האוכלוסייה  
• חיזוק הדמוקרטיה הישראלית

אני מזמין אתכם להצטרף אלינו ולקחת חלק פעיל בשינוי:
- הירשמו לרשימת התפוצה שלנו
- שתפו את החזון שלנו עם חברים ובני משפחה
- הגיעו לאירועים ולמפגשים שלנו

יחד נבנה עתיד טוב יותר לכולנו.

בברכה,
[השם שלכם]

לפרטים נוספים: [קישור לאתר]
להתנדבות: [מייל יצירת קשר]`
    },
    {
      id: 2,
      title: "הזמנה לאירוע קמפיין",
      subject: "הזמנה מיוחדת - מפגש עם המועמד באזורכם",
      content: `שלום יקר,

אני שמח להזמין אתכם למפגש חשוב עם המועמד שלנו באזורכם.

פרטי האירוע:
📅 תאריך: [תאריך האירוע]
🕐 שעה: [שעת האירוע]
📍 מקום: [מיקום האירוע]

במפגש נדבר על:
• התוכנית הפוליטית שלנו לשנים הקרובות
• האתגרים שעומדים בפני האזור
• איך כל אחד מכם יכול לקחת חלק בשינוי

הכניסה חופשית ומוזמנת כל המשפחה!

מעצם הצורך הלוגיסטי, אנא אשרו הגעה עד [תאריך אישור].

נשמח לראות אתכם שם!

בהוקרה,
[השם שלכם]

לאישור הגעה: [טלפון/מייל]
לפרטים נוספים: [אתר/מייל]`
    },
    {
      id: 3,
      title: "קריאה לפעולה דחופה",
      subject: "הזמן לפעול הוא עכשיו - צרכו איתנו קשר",
      content: `חברים יקרים,

אנחנו בנקודת מפנה קריטית. החלטות שיתקבלו בחודשים הקרובים ישפיעו על עתיד המדינה שלנו.

המצב הנוכחי דורש פעולה מיידית:
⚠️ פערים כלכליים הולכים ומתרחבים
⚠️ השירותים הציבוריים מתדרדרים
⚠️ אמון הציבור במוסדות נשחק

יש לנו תוכנית פעולה ברורה לשינוי, אבל אנחנו צריכים את עזרתכם:

פעולות מיידיות שאתם יכולים לעשות:
1. שתפו את המסר הזה עם 5 חברים
2. הרשמו לרשימת ההתנדבות שלנו
3. הגיעו לעצרת התמיכה הגדולה שלנו ב[תאריך]

כל קול חשוב, כל אדם עושה הבדל.

הזמן לפעול הוא עכשיו!

בדחיפות,
[השם שלכם]

לפעולה מיידית: [טלפון/מייל]
לעדכונים: [רשימת תפוצה]`
    }
  ];

  const handleCopyTemplate = async (templateId: number, content: string, subject: string) => {
    const fullTemplate = `נושא: ${subject}\n\n${content}`;
    
    try {
      await navigator.clipboard.writeText(fullTemplate);
      setCopiedTemplate(templateId);
      setSelectedTemplate(templateId);
      
      toast({
        title: "הועתק בהצלחה!",
        description: "התבנית הועתקה ללוח. עכשיו תוכלו להדביק אותה במייל",
      });
      
      setTimeout(() => setCopiedTemplate(null), 2000);
    } catch (err) {
      toast({
        title: "שגיאה בהעתקה",
        description: "אנא נסו שוב או בחרו את הטקסט ידנית",
        variant: "destructive",
      });
    }
  };

  const openGmail = () => {
    window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');
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
            בחרו מהתבניות שלמטה, העתיקו למייל שלכם ושלחו לחברים ולמשפחה
          </p>
        </motion.div>

        {/* About Toxic Critical Pedagogy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="max-w-6xl mx-auto glass-effect">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b">
              <CardTitle className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                מה זה פדגוגיה ביקורתית רעילה?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8" dir="rtl">
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
                
                <div className="bg-orange-50 border-2 border-orange-200 p-6 my-8 text-center">
                  <p className="text-xl font-bold text-orange-800 mb-4">זה לא חינוך.</p>
                  <p className="text-xl font-bold text-red-700">זו הפקרה.</p>
                </div>
                
                <p className="text-xl font-bold text-gray-800">
                  זהו בגידה של מערכת החינוך בנו - ההורים.
                  <br />
                  <span className="text-red-600">וזה חייב להיפסק.</span>
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border-2 border-blue-200 text-center my-8">
                  <p className="text-2xl font-bold text-blue-800 mb-4">הגיע הזמן לקחת אחריות.</p>
                  <p className="text-lg text-gray-700">
                    הילדים שלנו – והעתיד של המדינה שלנו – לא יכולים להרשות לנו להמשיך לישון בעמידה.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {emailTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <Card className={`hover-lift transition-all duration-300 ${
                selectedTemplate === template.id ? 'ring-2 ring-campaign-blue shadow-lg' : ''
              }`}>
                <CardHeader className="bg-gradient-to-r from-campaign-blue/10 to-campaign-purple/10">
                  <CardTitle className="text-2xl flex items-center gap-3 select-text">
                    <Mail className="h-6 w-6 text-campaign-blue" />
                    {template.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 font-medium select-text">
                    נושא: {template.subject}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-gray-50 p-4 rounded-lg mb-6 text-right">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed select-text">
                      {template.content}
                    </pre>
                  </div>
                  
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={() => handleCopyTemplate(template.id, template.content, template.subject)}
                      className="flex items-center gap-2 px-6 py-3"
                      variant={copiedTemplate === template.id ? "default" : "outline"}
                    >
                      {copiedTemplate === template.id ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          הועתק!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          העתק תבנית
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto glass-effect">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 select-text">מוכנים לשלוח?</h3>
              <p className="text-gray-600 mb-6 select-text">
                לאחר שהעתקתם את התבנית, פתחו את Gmail ושלחו את המייל לרשימת הקשרים שלכם
              </p>
              <Button 
                onClick={openGmail}
                className="gradient-bg hover:opacity-90 px-8 py-4 text-lg font-semibold"
              >
                פתח Gmail
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Campaign;
