import express from "express";

const app = express();
app.use(express.json());

let users = [
  { id: 1, nome: "João Vitor" },
  { id: 2, nome: "Luis Eduardo" },
  { id: 3, nome: "Caue" },
  { id: 4, nome: "Guilherme" }
];

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});