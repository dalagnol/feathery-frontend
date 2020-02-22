export function compare(value1: any, value2: any) {
  if (typeof value1 === "object") {
    if (typeof value2 === "object") {
      return JSON.stringify(value1) === JSON.stringify(value2);
    }
  } else {
    return value1 === value2;
  }

  return false;
}
