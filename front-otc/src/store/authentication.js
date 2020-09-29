





export const login = (email,password) => async dispatch =>{
    const response = await fetch(`/api/session`,{
        method:'put',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({email,password},)
    });
    if(response.ok){
        const {user } = await response.json();
        dispatch(setUser(user));
    }
}
