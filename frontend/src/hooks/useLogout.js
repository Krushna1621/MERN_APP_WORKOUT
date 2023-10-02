import {useAuthContext} from './useAuthContext'; 

export const useLogout=()=>{

    const logout=()=>{
        localStorage.removeItem('user')

        dispatch({type:'Logout'})

    }

    return {logout}
}