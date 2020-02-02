export const iPhone = (css: string) => `
    @media (max-width: 500px) {
        ${css}
    }
`;

export const iPad = (css: string) => `
    @media (min-width: 501px) and (max-width: 800px) {
        ${css}
    }
`;

export const Mac = (css: string) => `
    @media (min-width: 801px) {
        ${css}
    }
`;

export default { iPhone, iPad, Mac };
