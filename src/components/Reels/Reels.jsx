import { useEffect, useRef } from "react";
import { Heart, Share2 } from "lucide-react";

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

            <div className="absolute right-4 bottom-40 flex flex-col items-center gap-4 text-white">
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                    <Heart className="w-6 h-6" />
                </button>
                <button className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                    <Share2 className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default Reels;
