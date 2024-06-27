import Fastify from "fastify";

const fastify = Fastify({
    logger: true,
})

fastify.get("/", (req, res) => {
    res.send("Hello")
})

fastify.listen({ port: 3000 }, (err, adress) => {
    if (err) {
        fastify.log(err)
        process.exit(1)
    }
    console.log("Server running")
})