interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary";
}

const Button = ({
    children,
    size = "md",
    color = "primary",
    className: classes,
    ...restProps
}: ButtonProps) => {
    const className = {
        base: "inline-flex items-center uppercase font-medium text-center rounded-md text-white",
        color: {
            primary: "bg-primary hover:bg-primary-light active:bg-primary-dark",
            secondary: "bg-gray-700 hover:bg-gray-800",
        },
        size: {
            sm: "px-3 py-1.5 text-xs",
            md: "px-5 py-2.5 text-sm",
            lg: "px-6 py-3 text-base",
        },
    };

    return (
        <button
            type="button"
            className={`${className.base} ${className.color[color]} ${className.size[size]} ${classes}`}
            {...restProps}
        >
            {children}
        </button>
    );
};

export default Button;
