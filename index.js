require("dotenv").config();
const express = require('express');
const path = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const port=process.env.PORT || 3000;

const filmes =[
{
    numero: 1,
    nome: "Star Wars nova esperança",
    tipo: "Ficção científica",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDnDH4nBpREQqcfIgSAuZQ1n4N31hGZo-Dn2jZH3pga-xuo0q",
    sinopse:"A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.Data de lançamento: 18 de novembro de 1977",
},
{
    numero: 2,
    nome: "Charmander",
    tipo: "Ação/Aventura",
    imagem: "https://images.justwatch.com/poster/175288985/s592/gladiador",
    sinopse:"Maximus é um poderoso general romano, amado pelo povo e pelo imperador Marcus Aurelius. Antes de sua morte, o Imperador desperta a ira de seu filho Commodus ao tornar pública a sua predileção em deixar o trono para Maximus. Sedento pelo poder, Commodus mata seu pai, assume a coroa e ordena a morte de Maximus, que consegue fugir antes de ser pego, e passa a se esconder como um escravo e gladiador enquanto vai atrás de vingança. Data de lançamento: 19 de maio de 2000",

},
{
    numero: 3,
    nome: "Top Gun - Ases Indomáveis",
    tipo: "Ação/Aventura",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTGH7bs8ZxfQcxvXoL9D3VpGKZ1klgcpZI7iWquVmhbG-wbYd",
    sinopse:"A escola naval de pilotos é onde o melhor dos melhores treinam para refinar suas habilidades de voo de elite. Quando o piloto Maverick é enviado para a escola, sua atitude irresponsável e comportamento arrogante o colocam em desacordo com os outros pilotos, especialmente Iceman. Porém Maverick não está apenas competindo para ser o piloto superior de caça, ele também está lutando pela atenção de sua bonita instrutora de voo, Charlotte Blackwood.Data de lançamento: 10 de julho de 1986",

}
];

let filme = undefined;

//Rotas
app.get('/', function (req, res) {
    
  res.render("index", {filmes, filme});
});


app.post("/add", (req, res) => {
    filme=req.body;
    filme.numero = filmes.length + 1;
    filmes.push(filme);
    res.redirect("/#card");

});

app.get("/detalhes/:numero", (req,res)=>{
    const numero= +req.params.numero;
    filme = filmes.find((filme) => filme.numero===numero);
    res.redirect("/#cadastro");
});

app.post("/update/:numero", (req, res) => {
    const numero= +req.params.numero-1;
    const newfilme = req.body;
    newfilme.numero=numero+1;
    filmes[numero]=newfilme;
    filme=undefined; 
    res.redirect("/#card");
});

app.get("/delete/:numero", (req, res) =>{
    const numero= +req.params.numero-1;
    delete filmes[numero];
    res.redirect("/#card");
});

app.listen(port, ()=> 
console.log(`Servidor rodando em http://localhost:${port}`));
