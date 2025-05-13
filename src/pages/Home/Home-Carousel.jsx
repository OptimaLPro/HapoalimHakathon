import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const rewards = [
  {
    src: "https://i.ibb.co/9HqsXGBN/Whats-App-Image-2025-05-13-at-12-57-02-66c29893.jpg",
    coins: 150,
    title: "כרטיס זוגי לקולנוע",
    description: "הטבה לקולנוע לב או יס פלאנט. תקפה עד סוף חודש יוני.",
  },
  {
    src: "https://i.ibb.co/C3vQ7N0z/Whats-App-Image-2025-05-13-at-13-51-22-f68f328f.jpg",
    coins: 320,
    title: "שובר למסעדה",
    description: "ארוחה זוגית ב-Delivery או dine-in. רשתות נבחרות בלבד.",
  },
  {
    src: "https://i.ibb.co/5mBQbfV/Whats-App-Image-2025-05-13-at-13-00-10-03b25464.jpg",
    coins: 500,
    title: "גיפט קארד ל־ZARA",
    description: "שובר דיגיטלי לרכישה אונליין או בחנות פיזית.",
  },
  {
    src: "https://i.ibb.co/Kz5gZdzk/Whats-App-Image-2025-05-13-at-12-58-58-0a0fab5b.jpg",
    coins: 80,
    title: "קפה ומאפה",
    description: "קופון לקפה ומאפה ברשת ארומה או קפה לנדוור.",
  },
  {
    src: "https://i.ibb.co/hFLvmLzW/Whats-App-Image-2025-05-13-at-12-58-30-0e7e0283.jpg",
    coins: 1000,
    title: "כרטיס טיסה בארץ",
    description: "טיסה הלוך-חזור לאילת מתל אביב. מימוש מול נציג.",
  },
  {
    src: "https://i.ibb.co/TxzbD1FC/Whats-App-Image-2025-05-13-at-12-57-49-d8afc245.jpg",
    coins: 250,
    title: "שובר רכישה ל־KSP",
    description: "שובר רכישה באתר KSP למוצרי חשמל ואלקטרוניקה.",
  },
];

export function HomeCarousel() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {rewards.map((item, index) => (
          <CarouselItem key={index}>
            <Dialog>
              <DialogTrigger asChild>
                <div className="p-1 aspect-square overflow-hidden rounded-xl relative cursor-pointer">
                  <img
                    src={item.src}
                    alt={`Reward ${index + 1}`}
                    className="object-cover w-full h-full rounded-xl"
                  />
                  <div className="absolute bottom-4 right-4 bg-[#ed1d24] text-white text-sm px-3 py-1 rounded-full shadow-md">
                    {item.coins} מטבעות
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl rtl">
                    {item.title}
                  </DialogTitle>
                  <DialogDescription className="rtl">
                    {item.description}
                  </DialogDescription>
                </DialogHeader>
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-lg w-full max-h-64 object-cover"
                />
                <Button className="w-full mt-4" variant="default">
                  🎁 מימוש הטבה
                </Button>
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
