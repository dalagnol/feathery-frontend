export const errors = (credTrigger: any, pswdTrigger: any) => [
  {
    keywords: ["email", "identifier", "credential", "user"],
    handler: credTrigger,
  },
  { keywords: ["password"], handler: pswdTrigger },
];
