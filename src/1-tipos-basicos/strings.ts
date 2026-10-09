//Basico
export const formatUserName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

//Basico
interface User {
  name: string;
  role: string;
}
export const createWelcomeMessage = ({name,role}: User) => {
  return `Welcome ${formatUserName(name)}! tu rol es ${role}`;
}
//Medio
export const isValidEmail = (email: string): boolean => {
  const value = email.trim().toLowerCase();

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

interface RegisterUser {
    name: string;
    email: string;
    password: string;
    age: number;
}
const validName = (name: string) => {
    const nameWithSpaces = name.replace(/\s/g, '');
    return nameWithSpaces.length > 3;
}
const validAge = (age: number) => {
    return age > 18 && age < 120;
}
const validPassword = (password: string) => {
    return password.length > 8 && password.split("").some((char) => char !== char.toLowerCase()) && password.split("").some((char) => !isNaN(Number(char)) && char !== " ");
}
export const isValidRegisterUser = (user: RegisterUser): boolean => {
    const name = validName(user.name);
    const email = isValidEmail(user.email);
    const age = validAge(user.age);
    const password = validPassword(user.password);
 return name && email && age && password
}