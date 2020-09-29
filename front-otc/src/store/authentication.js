export const SET_USER = 'Please set my user';




export const setUser = user => ({
    type: SET_USER,
    user,
  });

export const login = (email,password) => async dispatch =>{
    const response = await fetch(`/api/session`,{
        method:'put',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({email,password},)
    });
    if(response.ok){
        const {userStore } = await response.json();
        dispatch(setUser(userStore));
    }
}
