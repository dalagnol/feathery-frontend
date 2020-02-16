// WIDELY AVAILABLE
export const landing = (): string => "/";
export const about = (): string => "/about";

// LOGIN-RELATED
export const signup = (): string => "/signup";
export const signin = (): string => "/signin";

// ACCOUNT RECOVERY
export const send = (): string => "/send";
export const reset = (token = ":token"): string => `/reset/${token}`;

// TESTS
export const chat = (): string => "/chat";
export const adimo = (): string => "/adimo";

// LOUNGES
export const feed = (): string => "/";

// ACCOUNT MANAGEMENT
export const profile = (id = ":id"): string => `/user/${id}`;
