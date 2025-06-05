import { useState } from "react";

const versiculos = [
  { livro: "João", cap: 3, vers: 16, texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." },
  { livro: "Salmos", cap: 23, vers: 1, texto: "O Senhor é o meu pastor, nada me faltará." }
];

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", textAlign: "center" }}>
      <h1>Bíblia Online</h1>
      <p>
        <b>{versiculos[index].livro} {versiculos[index].cap}:{versiculos[index].vers}</b> - {versiculos[index].texto}
      </p>
      <button onClick={() => setIndex((index + 1) % versiculos.length)}>
        Próximo versículo
      </button>
    </div>
  );
}

export default App;
