import express from "express";

const posts = [
  {
    descricao: "Foto de teste",
    img: "https://picsum.photos/400/200",
  },
  {
    descricao: "Foto de teste 1",
    img: "https://picsum.photos/400/200",
  },
  {
    descricao: "Paisagem deslumbrante",
    img: "https://picsum.photos/800/600",
  },
  {
    descricao: "Gato fofo dormindo",
    img: "https://placekitten.com/400/300",
  },
  {
    descricao: "Cachorro brincando no parque",
    img: "https://placehold.co/600/400",
  },
];

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à imersão!");
});
