export const iPhone = (css: string) => `
    @media (max-width: 64em) {
        ${css}
    }
`;

export const iPad = (css: string) => `
    @media (min-width: 64.0625em) and (max-width: 80em) {
        ${css}
    }
`;

export const Mac = (css: string) => `
    @media (min-width: 80.0625em) {
        ${css}
    }
`;

export default { iPhone, iPad, Mac };
