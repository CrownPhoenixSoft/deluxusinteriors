const Divider = ({ className }: any) => {
    return (
        <div
            className={
                "w-[50px] border-b-[2px] font-bold border-secondary " +
                className
            }
        />
    );
};

export default Divider;
