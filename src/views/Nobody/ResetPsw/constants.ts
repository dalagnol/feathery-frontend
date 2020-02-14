export const errors = (passTrigger: any, emailTrigger: any) => [
  {
    keywords: ["password", "expired"],
    handler: passTrigger,
  },
  {
    keywords: ["email", "user"],
    handler: emailTrigger,
  }
];
