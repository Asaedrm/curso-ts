import { describe, expect, it } from "@jest/globals";
import {canDrive,canAccess, hasPermission} from './booleans.ts';

describe("canDrive", ()=>{
    it('Prueba que canDrive devuelve false para edades menores a 16 y true para edades mayores o iguales a 16', ()=>{
        expect(canDrive(15)).toBe(false);
        expect(canDrive(16)).toBe(true);
        expect(canDrive(17)).toBe(true);
        expect(canDrive(0)).toBe(false);
        expect(canDrive(-1)).toBe(false);
    })
})

describe('canAccess', ()=>{
    it('Prueba para verificar si cumple con la condiciones de acceso', ()=>{
        expect(canAccess(true,true,false)).toBe(true);
        expect(canAccess(true,true,true)).toBe(false);
        expect(canAccess(false,false,false)).toBe(false);
        expect(canAccess(false,true,false)).toBe(false);
        expect(canAccess(true,false,true)).toBe(false);
        expect(canAccess(true,false,false)).toBe(false);
        expect(canAccess(false,false,true)).toBe(false);
    })
})

describe('hasPermission',()=>{
    it("Prueba para verificar si cumple con la condiciones de permisos", () => {
    expect(hasPermission(true, true, true)).toBe(true);
    expect(hasPermission(true, true, false)).toBe(true);
    expect(hasPermission(true, false, true)).toBe(true);
    expect(hasPermission(true, false, false)).toBe(false);
});
})