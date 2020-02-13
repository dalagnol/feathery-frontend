export const landing = (): string => "/";
export const about = (): string => "/about";
export const signup = (): string => "/signup";
export const signin = (): string => "/signin";
export const send = (): string => "/send";
export const reset = (token = ":token"): string => `/reset/${token}`;
export const chat = (): string => "/chat";
export const adimo = (): string => "/adimo";

export const feed = (): string => "/";
export const profile = (id = ":id"): string => `/user/${id}`;
