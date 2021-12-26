import Cookies from 'universal-cookie';

function getAccessToken() {
    const cookies = new Cookies();
    const refreshToken = cookies.get('refreshToken');
    if (refreshToken) {
      return {
        accessToken: 'dj7H8Jduyfbw&%dkhdkszd',
        refreshToken: 'djKJ/dio2jk*4KJHydhen,wlLlmddjk',
      };
    } else {
      return undefined;
    }
}

export function tryLogout(){
    const cookies = new Cookies();
    cookies.remove("refreshToken");
}

export function isLoggedIn(){
    const cookies = new Cookies();
    if(cookies.get("refreshToken")){
        return true;
    }else {
        return false;
    }
}