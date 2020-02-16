export default (str: string | number): number =>
  typeof str === "number"
    ? str
    : typeof str === "string"
    ? Number(((str || "0").match(/[\d+.]/g) || ["0"]).join(""))
    : 0;
