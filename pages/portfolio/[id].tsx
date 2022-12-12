import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import SeoHead from "../../components/SeoHead";
import { PortfolioData } from "../../public/data/portfolio.data";
import Divider from "../../ui/Divider";

const PortfolioView = ({ item }: any) => {
  return (
    <div>
      <SeoHead
        title={item.name}
        description={item.body}
        uri={`portfolio/${encodeURIComponent(item.name)}`}
        image={item.cover}
      />

      <Banner title={item?.name} src="https://www.udi.ae/images/bg/12.jpg" />

      <div className="container py-10">
        {/* Info Box */}
        <div className="bg-secondary-dark text-white p-3 grid md:grid-cols-3 gap-4 rounded-sm shadow-md">
          <div className="text-center flex flex-col items-center gap-1">
            <h1 className="text-md font-semibold">SERVICES</h1>
            <Divider />

            <p className="text-sm font-normal">{item?.service ?? "-"}</p>
          </div>
          <div className="text-center flex flex-col items-center gap-1">
            <h1 className="text-md font-semibold">CLIENT</h1>
            <Divider />

            <p className="text-sm font-normal">{item?.client ?? item?.name}</p>
          </div>
          <div className="text-center flex flex-col items-center gap-1">
            <h1 className="text-md font-semibold">LOCATION</h1>
            <Divider />

            <p className="text-sm font-normal">{item?.location ?? "-"}</p>
          </div>
        </div>

        <div className="h-10" />

        {/* Gallery Box */}
        <Gallery gallery={item?.gallery} />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: PortfolioData.map((i) => ({ params: { id: i.name } })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const item = PortfolioData.find((i) => i.name === context?.params?.id);

  return {
    props: { item },
  };
}

export default PortfolioView;
