import { observable, action, computed } from "mobx";

class UserStore {
  @observable private User: any = null;
  @observable private Loading = false;

  @action public async getUser() {
    this.Loading = true;
    setTimeout(() => {
      this.User = "Jujuba";
      this.Loading = false;
    }, 2000);
  }

  public async setUser(name: string) {
    this.User = null;
    this.Loading = true;
    setTimeout(() => {
      this.User = name;
      this.Loading = false;
    }, 2000);
  }

  @computed public get user() {
    if (this.User) {
      return this.User;
    } else {
      this.getUser();
      return null;
    }
  }

  public set user(name: any) {
    this.User = name;
  }

  @computed public get loading() {
    return this.Loading;
  }
}

export default new UserStore();
