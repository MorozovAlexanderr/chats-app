const storagePrefix = 'chatsApp_';

const storage = {
  getToken: () => {
    const token = window.localStorage.getItem(`${storagePrefix}token`);
    return token ? JSON.parse(token) : null;
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
