import React from "react";
import NextHead from "next/head";
import Constants from "../lib/constants";

export interface ISeoHeadProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    image?: string;
    uri?: string;
}

const SeoHead: React.FC<ISeoHeadProps> = (props) => {
    const { children } = props;
    const title = props.title
        ? `${props.title} | ${Constants.appName}`
        : Constants.appName;
    const description = props.description ?? "about us";
    const image = props.image ?? "/logo-light.svg";
    const url = `${Constants.baseDomain}/${props.uri}`;

    return (
        <NextHead>
            <meta property="og:type" content="website" />
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta property="twitter:title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="twitter:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="twitter:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            {url && <meta property="og:url" content={url} />}
            {children}
        </NextHead>
    );
};

export default SeoHead;
