export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
  console.log('Does it make it here to localStorage, clearAuthToken?')
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};
