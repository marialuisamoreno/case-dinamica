import * as JWT from 'jwt-decode';
import * as c from '../shared/constants/constants.js';

export const isAuthenticated = () => {
    /*
    var userRoles;    
    if (localStorage.getItem(c.TOKEN_KEY) !== null) {
        userRoles = JWT(getToken()).userDetails.roles;
        for(var i=0; i < userRoles.length; i++){
            var role = userRoles[i].split(",");
            if (role[0].includes(c.WEBGROUP)){
                return true;
            }
        }        
    }    
    return false;
    */
   return true;
}

export const getToken = () => localStorage.getItem(c.TOKEN_KEY);

export const localUsername = () => {    
    var jwt_decoded; 
    /*
    if (isAuthenticated()){
        jwt_decoded = JWT(getToken()).userDetails.displayname;
    }
    return jwt_decoded;
    */
   return 'DEAR VISITOR';
};