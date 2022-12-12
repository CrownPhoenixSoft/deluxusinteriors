import Divider from "../ui/Divider";

interface IProps {
    title: string;
    src: string;
}

const Banner = ({ title, src }: IProps) => {
    return (
        <div
            style={{
                backgroundImage: `url('${src}')`,
            }}
            className={`bg-no-repeat bg-cover bg-center h-[400px] flex items-end`}
        >
            <div className="w-full h-full bg-[#0000004d] flex items-end">
                <div className="container">
                    <Divider />
                    <h1 className="text-[50px] uppercase text-white font-bold py-[20px] mb-[50px] ">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
