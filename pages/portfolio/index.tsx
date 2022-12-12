import Banner from "../../components/Banner";
import SeoHead from "../../components/SeoHead";
import Link from "next/link";
import { PortfolioData } from "../../public/data/portfolio.data";

const Portfolio = () => {
    return (
        <div>
            <SeoHead
                title="Portfolio"
                description="Portfolio Page, Our Work, Our Clients, Jobs"
                uri="portfolio"
                image="/deluxus-logo-dark.svg"
            />

            <Banner
                title="Portfolio"
                src="https://www.udi.ae/images/bg/12.jpg"
            />

            {/* PortfolioData */}

            <div className="container py-10">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {PortfolioData.map((item) => (
                        <Link
                            key={item.id}
                            href={`/portfolio/${encodeURIComponent(item.name)}`}
                        >
                            <a>
                                <div className="relative bg-white shadow-md rounded-sm overflow-hidden">
                                    <img
                                        src={item.cover}
                                        alt=""
                                        className="w-full"
                                    />
                                    <div className="px-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm">
                                        <h1 className="text-white text-sm font-semibold pt-1 pb-2">
                                            {item.name}
                                        </h1>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
