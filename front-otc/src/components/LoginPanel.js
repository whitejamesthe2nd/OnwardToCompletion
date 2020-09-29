import React from 'react';

function Login (){


    return (
        <form onSumbit={handleSubmit}>
            <input type='text' placeholder='Email' value={email} onChange={updateEmail} />
            <input type='password' placeholder='Password' value={password} onChange={updatePassword} />
        </form>

    )
}


export default Login;
