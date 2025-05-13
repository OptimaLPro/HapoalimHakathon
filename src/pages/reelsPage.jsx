import {useState} from "react";
import Reel from "../components/Reels/Reels";
import { LiaCoinsSolid } from "react-icons/lia";

const videos = [
    "/videos/1.mp4",
    "/videos/2.mp4",
    "/videos/3.mp4"
];

const ReelsPage = () => {
    const [score, setScore] = useState(23);
    const [viewed, setViewed] = useState([]);

    const handleWatched = (index) => {
        if (!viewed.includes(index)) {
            setViewed((prev) => [...prev, index]);
            setScore((prev) => prev + 5);
        }
    };

    return (
        <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
            {videos.map((src, index) => (
                <div key={index} className="snap-start h-screen">
                    <Reel src={src} onWatched={() => handleWatched(index)} />
                </div>
            ))}
            <div
                className="fixed top-20 right-4 z-50 flex items-center gap-2 bg-[#ed1d24] text-white text-base font-semibold px-4 py-2 rounded-full shadow-lg border border-red-700">
                <LiaCoinsSolid className="w-6 h-6" />
                מטבעות: {score}
            </div>
        </div>
    );
};

export default ReelsPage;
