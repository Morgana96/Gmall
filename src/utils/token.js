export const setToken = (token) => {
    localStorage.setItem('Token',token)
}

//don't fogot it returns a value'
export const getToken = () => 
     localStorage.getItem('Token')

     
export const removeToken = () => {
    localStorage.removeItem('Token')
}