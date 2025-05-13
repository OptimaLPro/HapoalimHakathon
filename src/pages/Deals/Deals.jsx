import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const categories = [
    {
    name: "קריירה",
    items: [
      { title: "מנוי לדרושים IL", desc: "משרות חמות לפני כולם", points: 100, image: "https://picsum.photos/seed/career1/400/300" },
      { title: "קורס כתיבת קורות חיים", desc: "מדריך מקצועי מצוות השמה.", points: 200, image: "https://picsum.photos/seed/career2/400/300" },
      { title: "מנוי לAllJoobs", desc: "משרות למנויי vip בלבד", points: 150, image: "https://picsum.photos/seed/career3/400/300" },
      { title: "מנוי ללינקדין פרימיום", desc: "להציג את הקורות חיים שלכם לפני כולם", points: 300, image: "https://picsum.photos/seed/career4/400/300" },
    ],
  },
  {
    name: "לימודים",
    items: [
      { title: "מנוי ל-chatgpt", desc: "3 חודשים", points: 100, image: "https://picsum.photos/seed/shop1/400/300" },
      { title: "מנוי לאתר הלימודים gool", desc: "4 חודשים", points: 150, image: "https://picsum.photos/seed/shop2/400/300" },
      { title: "מנוי ל-udemi", desc: "3 חודשים", points: 2000, image: "https://picsum.photos/seed/shop3/400/300" },
      { title: " קורס בפוטושופ", desc: "מבית חברת..", points: 1700, image: "https://picsum.photos/seed/shop4/400/300" },
    ],
  },
  {
    name: "אוכל",
    items: [
      { title: "קפה חינם בארומה", desc: "קפה ומאפה ללא עלות בסניפים משתתפים.", points: 200, image: "https://picsum.photos/seed/food1/400/300" },
      { title: "פיצה זוגית בדומינוס", desc: "משלוח עד הבית עם תוספת לבחירה.", points: 500, image: "https://picsum.photos/seed/food2/400/300" },
      { title: "20% הנחה במסעדת ג'ירף", desc: "תוקף עד סוף החודש.", points: 300, image: "https://picsum.photos/seed/food3/400/300" },
      { title: "שובר שווארמה", desc: "מימוש באבו חליל או באגאדיר.", points: 400, image: "https://picsum.photos/seed/food4/400/300" },
    ],
  },
  {
    name: "חופשות",
    items: [
      { title: "טיסה לאילת", desc: "הלוך חזור כולל מזוודה.", points: 7000, image: "https://picsum.photos/seed/vacation1/400/300" },
      { title: "2 לילות בצימר בצפון", desc: "כולל ארוחת בוקר.", points: 5000, image: "https://picsum.photos/seed/vacation2/400/300" },
      { title: "מלון בירושלים", desc: "לילה זוגי במלון בוטיק.", points: 4500, image: "https://picsum.photos/seed/vacation3/400/300" },
      { title: "הנחה על AIRBNB", desc: "100 נקודות הנחה בהזמנה מעל 500 נקודות.", points: 1000, image: "https://picsum.photos/seed/vacation4/400/300" },
    ],
  },
  {
    name: "פנאי ובידור",
    items: [
      { title: "כרטיס להופעה", desc: "הופעת סטנדאפ של עדי אשכנזי.", points: 1200, image: "https://picsum.photos/seed/fun1/400/300" },
      { title: "הטבה ביס פלאנט", desc: "1+1 על כל סרט.", points: 800, image: "https://picsum.photos/seed/fun2/400/300" },
      { title: "סיור טעימות בשוק", desc: "סיור קולינרי בשוק הכרמל.", points: 1000, image: "https://picsum.photos/seed/fun3/400/300" },
      { title: "חדר בריחה", desc: "מתנה זוגית לחדר בריחה משתתף.", points: 1500, image: "https://picsum.photos/seed/fun4/400/300" },
    ],
  },
  
];

const Deals = () => {
  return (
    <div className="p-6 space-y-10">
      {categories.map((cat, idx) => (
        <div key={idx} className="space-y-4">
          <h2 className="text-2xl font-bold rtl text-right">{cat.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cat.items.map((item, i) => (
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all">
                    <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-t" />
                    <CardHeader>
                      <CardTitle className="rtl text-right text-lg">{item.title}</CardTitle>
                      <CardDescription className="rtl text-right">{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground rtl text-right">
                      עלות: {item.points.toLocaleString()} נקודות<br />
                      לחץ לפרטים נוספים
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="rtl text-right">{item.title}</DialogTitle>
                    <DialogDescription className="rtl text-right">{item.desc}</DialogDescription>
                  </DialogHeader>
                  <img src={item.image} alt={item.title} className="w-full h-60 object-cover rounded mb-2" />
                  <div className="rtl text-right text-sm mb-2">עלות ההטבה: {item.points.toLocaleString()} נקודות</div>
                  <Button className="mt-2 w-full">ממש עכשיו</Button>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deals;