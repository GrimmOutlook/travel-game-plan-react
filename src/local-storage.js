export const loadAuthToken = () => {
    console.log('authToken in loadAuthToken fxn: ', localStorage.getItem('authToken'));
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

//check first if currentTrip is in localStorage, if not, set it

export const clearAuthToken = () => {
  console.log('Does it make it here to localStorage, clearAuthToken?')
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};
