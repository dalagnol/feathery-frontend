export default (file: any, callback: any, prefix = false) => {
  const reader = new FileReader();
  reader.addEventListener("load", (e: any) => {
    if (typeof callback === "function") {
      let result = String(reader!.result!).split("base64,")[1];
      if (prefix) {
        result = "data:image/png;base64," + result;
      }
      callback(result);
    }
  });
  reader.readAsDataURL(file);
};
