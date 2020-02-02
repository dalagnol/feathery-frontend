import nobody from "./nobody";
import commons from "./commons";
import creators from "./creators";
import admins from "./admins";

export default { nobody, commons, creators, admins } as any;

export const landing = (): string => "/";
export const about = (): string => "/about";
export const signup = (): string => "/signup";
export const signin = (): string => "/signin";
export const chat = (): string => "/chat";
export const adimo = (): string => "/adimo";

export const feed = (): string => "/";
export const profile = (id = ":id"): string => `/user/${id}`;
