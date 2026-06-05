function formatoMoneda(valor) {
  return `$${Number(valor || 0).toLocaleString("es-CO")}`;
}

describe("Pruebas unitarias - Facturación", () => {
  test("Debe formatear correctamente un valor en pesos colombianos", () => {
    expect(formatoMoneda(250000)).toBe("$250.000");
  });

  test("Debe retornar $0 cuando el valor es vacío", () => {
    expect(formatoMoneda()).toBe("$0");
  });

  test("Debe calcular total de factura", () => {
    const cantidad = 2;
    const valorUnitario = 50000;
    const total = cantidad * valorUnitario;

    expect(total).toBe(100000);
  });
});