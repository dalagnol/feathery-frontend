import Socket from "./connection";

export default new (class UserSocket {
  public Authenticate() {
    if (localStorage.getItem("token")) {
      Socket.emit("Socket Authentication", localStorage.getItem("token"));
    } else {
      alert("not logged in");
    }
  }
})();
