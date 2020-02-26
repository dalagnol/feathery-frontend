// WIDELY AVAILABLE
export const landing = (): string => "/";
export const about = (): string => "/about";

// LOGIN-RELATED
export const registration = (): string => "/registration";
export const login = (): string => "/login";

// ACCOUNT RECOVERY
export const recovery = (): string => "/recovery";
export const recover = (token = ":token"): string => `/recovery/${token}`;

// ACCOUNT MANAGEMENT
export const profile = (id = ":id"): string => `/account/${id}`;
