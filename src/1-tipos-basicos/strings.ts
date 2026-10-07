//Basico
const formatUserName = (name: string) => {
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

  return (
      value.includes("@") &&
      value.endsWith(".com") &&
      value.indexOf("@") > 0 &&
      value.indexOf(".com") > value.indexOf("@")
  );
};