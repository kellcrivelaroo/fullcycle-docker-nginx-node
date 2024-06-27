import Fastify from "fastify";
import { prisma } from "./prisma.js";
import { seed } from "./seed.js";

const fastify = Fastify({
    logger: true,
})

fastify.get("/", async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        if (!users.length) {
            return res.type("text/html").send("<h1>Full Cycle Rocks!</h1>")
        }
        let userListHTML = `
            <h1>Full Cycle Rocks!</h1>
            <h2>Usuários cadastrados no banco de dados:</h2>
            <ul>`;
        users.forEach(user => {
            userListHTML += `<li>${user.name}</li>`;
        });
        userListHTML += "</ul>";

        res.header('Content-Type', 'text/html; charset=utf-8').send(userListHTML);
    } catch (err) {
        console.error(err)
        throw err
    }
})

fastify.listen({ port: 3000, host: '0.0.0.0' }, async (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    console.log("Server running at", address)

    await seed();
});
