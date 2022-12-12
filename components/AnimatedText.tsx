import { motion } from "framer-motion";
import React from "react";
import { useMemo } from "react";

interface AnimatedTextProps {
    text: string;
    className?: string;
}

const AnimatedText = ({ text, className, ...props }: AnimatedTextProps) => {
    const words = useMemo(() => {
        const words = [];

        const splitWords = text.split(" ");

        for (const item of splitWords) {
            words.push(item.split(""));
        }

        words.forEach((word) => {
            return word.push("\u00A0");
        });

        return words;
    }, [text]);

    return (
        <p>
            {words.map((_, index) => (
                <span key={index} className="whitespace-nowrap">
                    {words[index].flat().map((char, i) => (
                        <span key={i} className="inline-block">
                            <motion.span
                                variants={{
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.4,
                                        },
                                    },
                                    hidden: {
                                        scale: 0,
                                        opacity: 0,
                                        transition: {
                                            duration: 0.4,
                                        },
                                    },
                                }}
                                className={`inline-block text-2xl ${className}`}
                                {...props}
                            >
                                {char}
                            </motion.span>
                        </span>
                    ))}
                </span>
            ))}
        </p>
    );
};

export default AnimatedText;
