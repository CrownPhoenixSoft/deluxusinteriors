import { useState } from "react";
import { PortfolioDataType } from "../public/data/portfolio.data";
import Modal from "../ui/Modal";
import "swiper/css";

const Gallery = ({ gallery }: { gallery: PortfolioDataType["gallery"] }) => {
    const [view, setView] = useState<null | { index: number; src: string }>(
        null
    );

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {gallery?.map((i, idx) => (
                <div
                    key={idx}
                    className={`relative group rounded-sm shadow-md overflow-hidden ${
                        idx === 0 && "md:col-span-2 md:row-span-2"
                    }`}
                >
                    <img src={i.src} className="h-full w-full" />

                    <button
                        onClick={() => setView({ index: idx, src: i.src })}
                        className="transition-all duration-200 absolute top-0 right-0 translate-x-full group-hover:translate-x-0 p-2 bg-black bg-opacity-25 backdrop-blur-sm rounded-tr-sm rounded-bl-sm shadow-md"
                    >
                        View
                    </button>
                </div>
            ))}

            <Modal open={!!view} onClose={() => setView(null)}>
                {view && (
                    <div className="relative overflow-hidden h-screen w-screen flex items-center justify-center">
                        <img
                            src={view.src}
                            className="w-full h-full object-contain"
                        />

                        <button
                            onClick={() => setView(null)}
                            className="absolute top-2 right-2 bg-black text-white bg-opacity-50 backdrop-blur-sm rounded-full w-10 h-10 shadow-md"
                        >
                            X
                        </button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default Gallery;
