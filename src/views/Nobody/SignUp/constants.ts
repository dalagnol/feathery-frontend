export const errors = (
  nameTrigger: any,
  idtfTrigger: any,
  emailTrigger: any,
  pswdTrigger: any
) => [
  { keywords: ["name"], handler: nameTrigger },
  { keywords: ["identifier"], handler: idtfTrigger },
  { keywords: ["email"], handler: emailTrigger },
  { keywords: ["password"], handler: pswdTrigger },
];
