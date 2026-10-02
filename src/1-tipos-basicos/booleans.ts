//Basico

export const canDrive = (age: number):boolean => {
      if (age >= 16) {
          return true;
      } else return false;
}

//Medio
export const canAccess = (isLoggedIn: boolean, isActive:boolean, isBanned:boolean):boolean =>{
    if ( isLoggedIn && isActive && !isBanned){
        return true
    } else return false;
}

//Avanzado

const user1 = {
    isLogged: true,
    isAdmin: false,
    isOwner: true
}
const user2 = {
    isLogged: false,
    isAdmin: false,
    isOwner: false
}

export const hasPermission = (isLogged:boolean, isAdmin:boolean, isOwner:boolean):boolean =>{
    if (isLogged && isAdmin || isOwner){
        return true
    } else return false;
}

hasPermission(user1.isLogged, user1.isAdmin, user1.isOwner)
hasPermission(user2.isLogged, user2.isAdmin, user2.isOwner)