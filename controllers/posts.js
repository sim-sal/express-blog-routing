// importo l'array
const mieiPosts = require("../db/db");
// const { post } = require("../routers/posts");

// index
function index(req, res) {
    res.format({
        html: () => {
            const html = [`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <h1 class="text-center">Lista dei miei Posts</h1>`];

            html.push('<div class="container"><div class="row justify-content-center">');

            for (const post of mieiPosts) {
                html.push(`<div class="col-6 card border-dark my-3 mx-3">
                    <h3 class="text-center">${post.title}</h3>
                    <img src="/imgs/posts/${post.image}" alt="" style="max-width: 100%">
                    <p>${post.content}<p>
                    <ul>
                    <b>Tags:</b>`);

                for (const tag of post.tags) {
                    html.push(`<li>${tag}</li>`);
                }

                html.push(`</ul>
                </div>`);
            }

            html.push("</div></div>");

            res.send(html.join(""));
        },
        json: () => {
            res.type("json").send({
                totalPosts: mieiPosts.length,
                list: mieiPosts
            });
        }
    })
}

// show
function show(req, res) {
    // recupero l'id dalla richiesta
    const postId = req.params.id;

    // recupero il post dalla lista
    const post = mieiPosts.find(post => post.id == postId);

    // verifico se l'id non esiste, lancio lo status 404
    if (!post) {
        res.status(404).send(`Il Post con id ${postId} non esiste!`);
        return; //interrompo esecuzione della funzione
    }

    res.json(post);
}

// create
function create(req, res) {
    res.format({
        html: () => res.send("<h1>Creazione nuovo post</h1>"),

        // Se la richiesta non accetta HTML restituisco un errore 406
        default: () => res.status(406).send("Not Acceptable")
    });
}

// esporto le funzioni:
module.exports = {
    index,
    show,
    create
}