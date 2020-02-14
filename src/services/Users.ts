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

  public async MailReset(email: any) {
    const { data } = await API.post("/user/mail", email);

    return data;
  }

  public async ResetPsw(psw: any, token: any) {
    const { data } = await API.put(`/user/password/${token}`, psw);

    return data;
  }

  public async ValidateToken(token: any) {
    const { data } = await API.get(`/token/${token}`);

    return data;
  }
})();
