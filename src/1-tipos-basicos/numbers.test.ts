import { describe, expect, it } from "@jest/globals";
import {
    calculateTotal,
    calculateTotalPages,
    calculateFinalPrice,
} from "./numbers.ts";

describe("calculateTotal", ()=>{
    it.each([
        { price: 100, quantity: 3, expected: 300 },
        { price: 100, quantity: 0, expected: 0 },
        { price: 100, quantity: 1, expected: 100 },
        { price: 50, quantity: 4, expected: 200 },
    ])(
        "should return $expected when price is $price and quantity is $quantity",
        ({ price, quantity, expected }) => {
            const result = calculateTotal(price, quantity);

            expect(result).toBe(expected);
        }
    );
})

describe('calculateTotalPages',()=>{
    it('Debe de retornar un numero de paginas entero', ()=>{
        const result = calculateTotalPages({
            totalPages: 101,
            itemsPerPage: 10,
        });
        expect(result).toBe(11);
    })
    it("should use 10 items per page by default", () => {
        const result = calculateTotalPages({
            totalPages: 50,
        });

        expect(result).toBe(5);
    });
})

describe('calculateFinalPrice',()=>{
    it('Calculo de precio final sin descuento y con iva', ()=>{
        const result = calculateFinalPrice({
            price: 100,
            discount: 0,
            tax: 0.16,
        });
        expect(result).toBe(116);
    })
    it('Calculo de precio final con descuento e iva ',()=>{
        const result = calculateFinalPrice({
            price: 100,
            discount: 10,
            tax: 0.16,
            quantity: 2
        });
        expect(result).toBe(208.8);
    })
    it('Calculo de precio final con descuento mayor a 15 porciento y iva',()=>{
        const result = calculateFinalPrice({
            price: 100,
            discount: 20,
            tax: 0.16,
            quantity: 2
        });
        expect(result).toBe(197.2);
    })
})