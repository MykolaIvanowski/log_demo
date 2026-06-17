import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// Статика, якщо покладеш html у папку templates
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/register", (req, res) => {
  console.log("REGISTER:", req.body);
  // тут потім додаси БД / логіку
  res.redirect("/login");
});

app.post("/login", (req, res) => {
  console.log("LOGIN:", req.body);
  // тут перевірка користувача
  res.send("Успішний вхід (поки що просто текст)");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
