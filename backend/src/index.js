import express from "express";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: '*' }))

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Juanitossaaa" },
    { id: 2, name: "Ana" },
  ]);
});

app.post("/users", (req, res) => {
  const user = req.body;
  res.status(201).json({ message: "Usuario creado", user });
});

app.listen(PORT, () => {
  console.log(`✅ Users service running on port ${PORT}`);
});

console.log('express instalado')