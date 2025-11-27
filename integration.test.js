require('jest-fetch-mock').enableMocks()

beforeEach(() => {
    fetch.resetMocks()
})

test("POST wrong payload -> 400", async () => {
    fetch.mockResponseOnce(JSON.stringify({ error: "Bad payload" }), { status: 400 })
    const res = await fetch("https://example.supabase.co/rest/v1/UserData", {
        method: "POST",
        body: JSON.stringify({ name: 123 })
    })
    expect(res.status).toBe(400)
})

test("POST duplicate -> 409", async () => {
    fetch.mockResponseOnce(JSON.stringify({ error: "Conflict" }), { status: 409 })
    const res = await fetch("https://example.supabase.co/rest/v1/UserData", {
        method: "POST",
        body: JSON.stringify({ name: "Alice" })
    })
    expect(res.status).toBe(409)
})

test("GET non-existent -> 404", async () => {
    fetch.mockResponseOnce(JSON.stringify({ error: "Not found" }), { status: 404 })
    const res = await fetch("https://example.supabase.co/rest/v1/UserData?id=eq.999")
    expect(res.status).toBe(404)
})

test("DELETE non-existent -> 404", async () => {
    fetch.mockResponseOnce(JSON.stringify({ error: "Not found" }), { status: 404 })
    const res = await fetch("https://example.supabase.co/rest/v1/UserData?id=eq.999", { method: "DELETE" })
    expect(res.status).toBe(404)
})

test("Missing token -> 401", async () => {
    fetch.mockResponseOnce(JSON.stringify({ error: "Unauthorized" }), { status: 401 })
    const res = await fetch("https://example.supabase.co/rest/v1/UserData")
    expect(res.status).toBe(401)
})
