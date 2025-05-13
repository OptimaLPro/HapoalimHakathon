import { useEffect, useRef } from "react";
import { Heart, Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LiaCoinsSolid } from "react-icons/lia";

const Reels = ({ src, onWatched }) => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      onWatched();
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [onWatched]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* כפתורים מימין */}
      <div className="absolute right-4 bottom-20 flex flex-col items-center gap-4 text-white">
        <button className="p-2 bg-white/40 rounded-full hover:bg-white/20 transition">
          <Heart className="w-6 h-6 text-black" />
        </button>
        <button className="p-2 bg-white/40 rounded-full hover:bg-white/20 transition">
          <Share2 className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* כפתור בצד שמאל לפתיחת Dialog */}
      <div className="absolute left-4 bottom-20 flex flex-col items-center gap-4 text-white">
        <Dialog>
          <DialogTrigger asChild>
            <button className="rtl p-2 bg-[#ed1d24] rounded-full hover:bg-white/20 transition">
              <div className="flex items-center gap-1">
                <div>
                  <LiaCoinsSolid className="w-5 h-5" />
                </div>
                <div>ענה וצבור</div>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>צברת נקודות 🎉</DialogTitle>
              <DialogDescription className="rtl text-right">
                כל צפייה מעניקה לך נקודות. המשך לצפות כדי לצבור עוד!
              </DialogDescription>
            </DialogHeader>
            <Button className="w-full mt-2">הבנתי, תודה!</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Reels;
