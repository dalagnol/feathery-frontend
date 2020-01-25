export default (oof: any, errors: any, ...params: any) => {
  if (oof.response?.data?.message) {
    const { message } = oof.response.data;
    const match = errors.find((error: any) =>
      error.keywords.some((keyword: string) =>
        message.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    if (match) {
      match.handler(...params);
    }
  } else {
    const match = errors.find((error: any) => error.noResponse);
    if (match) {
      match.handler(...params);
    }
  }
};
