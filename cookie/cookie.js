class Cookie {
  constructor() {
    super();
  }

  getCookie(name) {
    
  }

  setCookie(name, value) {
    const DAYS = 30;
    const exp = new Date();
    exp.setTime(exp.getTime() + DAYS * 24 * 60 * 60 * 1000)
    document.cookie = name + '=' + escape(value) + ";expires=" + exp.toGMTString();
  }
}