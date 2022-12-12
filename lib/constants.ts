export default class Constants {
    static __prod__ = process.env.NODE_ENV === "production";
    static appName = "Deluxus Interiors";
    static author = "Crown Phoenix";
    static baseDomain = this.__prod__
        ? `https://deluxusinteriors.com`
        : `http://localhost:3000`;

    static isBrowser = typeof window !== undefined;
}
