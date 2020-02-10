import API from "./api";

export default new (class UserService {
  public async Authenticate(form: any) {
    const { data } = await API.post("/login", form);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data.user;
  }

  public async Register(form: any) {
    const { data } = await API.post("/user", form);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return data.user;
  }

  public async Update(form: any) {
    const { data } = await API.put(`/user/${form.id}`, form);

    localStorage.setItem("user", JSON.stringify(data.user ? data.user : data));

    return data.user;
  }

  public async ResetPswEmail(email: any) {
    // eslint-disable-next-line no-debugger
    debugger;
    const { data } = await API.put("/reset", email);

    return data;
  }
})();
