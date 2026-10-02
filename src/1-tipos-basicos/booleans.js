//Basico
export const canDrive = (age) => {
    if (age >= 16) {
        return true;
    }
    else
        return false;
};
//Medio
export const canAccess = (isLoggedIn, isActive, isBanned) => {
    if (isLoggedIn && isActive && !isBanned) {
        return true;
    }
    else
        return false;
};
//Avanzado
const user1 = {
    isLogged: true,
    isAdmin: false,
    isOwner: true
};
const user2 = {
    isLogged: false,
    isAdmin: false,
    isOwner: false
};
export const hasPermission = (isLogged, isAdmin, isOwner) => {
    if (isLogged && isAdmin || isOwner) {
        return true;
    }
    else
        return false;
};
hasPermission(user1.isLogged, user1.isAdmin, user1.isOwner);
hasPermission(user2.isLogged, user2.isAdmin, user2.isOwner);
//# sourceMappingURL=booleans.js.map