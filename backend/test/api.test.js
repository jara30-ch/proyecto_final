const request = require("supertest")
const app = require("../server")

describe("Pruebas API Hito 3", () => {

  // GET /products sin token -> 401
  test("GET /api/products sin token debe responder 401", async () => {
    const res = await request(app).get("/api/products")
    expect(res.statusCode).toBe(401)
  })

  // POST /auth/login con datos incorrectos -> 401
  test("POST /api/auth/login con datos incorrectos", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "test@test.com",
        password: "1234"
      })
    expect(res.statusCode).toBe(401)
  })

  // POST /auth/register -> 201 (usuario registrado)
  test("POST /api/auth/register con datos válidos debe crear usuario", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        nombre: "Test User",
        email: "testuser@example.com",
        password: "123456"
      })
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty("token") // JWT retornado
    expect(res.body).toHaveProperty("usuario")
  })

  // POST /auth/login con datos correctos -> 200
  test("POST /api/auth/login con datos correctos debe retornar token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@example.com",
        password: "123456"
      })
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty("token")
    // Guardamos token para tests siguientes
    token = res.body.token
  })

  // GET /products con token -> 200
  let token = ""
  test("GET /api/products con token debe responder 200", async () => {
    const loginRes = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@example.com",
        password: "123456"
      })
    token = loginRes.body.token

    const res = await request(app)
      .get("/api/products")
      .set("Authorization", `Bearer ${token}`)
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  // PUT /products/:id con token -> 200 o 403 (si no es admin)
  test("PUT /api/products/:id con token debe validar autorización", async () => {
    const res = await request(app)
      .put("/api/products/1")  // asumiendo id 1
      .set("Authorization", `Bearer ${token}`)
      .send({ nombre: "Producto modificado" })
    expect([200, 403]).toContain(res.statusCode)
  })

  // DELETE /products/:id con token -> 200 o 403 (si no es admin)
  test("DELETE /api/products/:id con token debe validar autorización", async () => {
    const res = await request(app)
      .delete("/api/products/1")
      .set("Authorization", `Bearer ${token}`)
    expect([200, 403]).toContain(res.statusCode)
  })
})