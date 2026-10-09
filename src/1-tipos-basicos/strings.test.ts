import { describe, expect, it } from "@jest/globals";
import { createWelcomeMessage,isValidEmail,formatUserName,isValidRegisterUser} from "./strings.ts";

describe('formatUserName', () => {
  it('Formato de nombre', () => {
    const name = 'asaed';
    const expectedFormattedName = 'Asaed';
    const result = formatUserName(name);
    expect(result).toBe(expectedFormattedName);
  });
})

describe('createWelcomeMessage', () => {
  it('Debe de retornal el mansaje correctamente', () => {
    const name = 'John';
    const role = 'admin';
    const expectedMessage = `Welcome ${name}! tu rol es ${role}`;
    const result = createWelcomeMessage({name,role});
    expect(result).toBe(expectedMessage);
  });
});

describe('isValidEmail',()=>{

    it('Debe de retornar true para un email valido',()=>{
        const email = 'asaed@gmail.com';
        const result = isValidEmail(email);
        expect(result).toBe(true);
    })
    it("should return false when the email does not contain @", () => {
        expect(isValidEmail("asaedgmail.com")).toBe(false);
    });
    it("should return false when the email does not end with .com", () => {
        expect(isValidEmail("asaed@gmail")).toBe(false);
    });
    it("should return false when @ is the first character", () => {
        expect(isValidEmail("@gmail.com")).toBe(false);
    });
    it("should return false when .com appears before @", () => {
        expect(isValidEmail(".com@gmail")).toBe(false);
    });
    it("should accept emails with uppercase letters and spaces", () => {
        expect(isValidEmail("  ASAED@GMAIL.COM  ")).toBe(true);
    });
    it('deberia de ser falso si tiene mas de un arroba',()=>{
        expect(isValidEmail("asaed@@gmail.com")).toBe(false);
    })
    it('deberia de ser falso si tiene el .com despues del arroba ',()=>{
        expect(isValidEmail("asaed@.com")).toBe(false);
    })
})

describe('isValidRegisterUser', ()=>{
    it('Deberia validad correctamente el enpoint POST /users/register ',()=>{
        const user = {
            name: 'Asaed',
            email: 'asaed@gmail.com',
            password: 'AsaedReyes5',
            age: 28,

        }
        const result = isValidRegisterUser(user);
        expect(result).toBe(true);
    })
})