import { sum } from "../index";

test('soma 1 + 2 e resulta 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('somando numeros positivos não resulta em zero', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

test('soma 2 e 2', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    expect(value).toBe(4);
});

test('não tem "p" na palavra borboleta', () => {
    expect('borboleta').not.toMatch(/p/);
  });
  
  test('tem "mar" na palavra marmelada', () => {
    expect('marmelada').toMatch(/mar/);
  });

  const listaDeCompras = [
    'miojo',
    'creme dental',
    'sabonete',
    'presunto',
    'margarina',
  ];
  
  test('deve haver margarina na lista de compras', () => {
    expect(listaDeCompras).toContain('margarina');
  });