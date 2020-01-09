export const iPhone = (css: string) => `
    @media (max-width: 63.99em) {
        ${css}
    }
`;

export const iPad = (css: string) => `
    @media (min-width: 64em) and (max-width: 85.375em) {
        ${css}
    }
`;

export const Mac = (css: string) => `
    @media (min-width: 85.4375em) {
        ${css}
    }
`;

export default { iPhone, iPad, Mac };
