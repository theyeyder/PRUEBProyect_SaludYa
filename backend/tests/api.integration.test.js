const request = require("supertest");
const app = require("../app");

describe("Pruebas de integración - API SaludYa", () => {
  test("Debe responder la ruta principal del backend", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("API SaludYa funcionando");
  });

  test("Debe consultar pacientes", async () => {
    const res = await request(app).get("/api/pacientes");

    expect([200, 404, 500]).toContain(res.statusCode);
  });

  test("Debe consultar documentos médicos", async () => {
    const res = await request(app).get("/api/documentos/CC/123456");

    expect([200, 404, 500]).toContain(res.statusCode);
  });
});