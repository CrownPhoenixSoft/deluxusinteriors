interface TextFieldProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: "sm" | "md" | "lg";
    color?: "primary" | "secondary";
    fullWidth?: boolean;
}

const TextField = ({
    children,
    type = "text",
    size = "md",
    color = "primary",
    fullWidth = true,
    className: classes,
    ...restProps
}: TextFieldProps) => {
    const className = {
        base: "bg-gray-50 border border-gray-300 text-gray-900 rounded-md block outline-none focus:ring-1",
        color: {
            primary: "focus:ring-primary focus:border-primary",
            secondary: "focus:ring-secondary focus:border-secondary",
        },
        size: {
            sm: "p-2 text-xs",
            md: "p-2.5 text-sm",
            lg: "p-4 text-base",
        },
    };

    return (
        <input
            type={type}
            className={`${className.base} ${className.color[color]} ${
                className.size[size]
            } ${fullWidth && "w-full"} ${classes}`}
            {...restProps}
        />
    );
};

export default TextField;
