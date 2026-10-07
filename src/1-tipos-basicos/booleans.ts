//Basico

export const canDrive = (age: number):boolean => {
    if (age >0 && age < 16) return false
      return age >= 16;
}

//Medio
export const canAccess = (isLoggedIn: boolean, isActive:boolean, isBanned:boolean):boolean =>{
    return isLoggedIn && isActive && !isBanned;
}

//Avanzado
export const hasPermission = (isLogged:boolean, isAdmin:boolean, isOwner:boolean):boolean =>{
    return isLogged && (isAdmin || isOwner) ;
}
