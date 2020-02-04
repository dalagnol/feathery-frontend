export const errors = (
  nameTrigger: any,
  idtfTrigger: any,
  emailTrigger: any,
  phoneTrigger: any
) => [
  { keywords: ["name"], handler: nameTrigger },
  { keywords: ["identifier"], handler: idtfTrigger },
  { keywords: ["email"], handler: emailTrigger },
  { keywords: ["phone"], handler: phoneTrigger },
];
