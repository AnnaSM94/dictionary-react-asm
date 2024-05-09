import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/AnnaSM94"
              target="_blank"
              rel="noreferrer"
            >
              Anna Serra
            </a>
            , code is open-sourced on{" "}
            <a
              href="https://github.com/AnnaSM94/dictionary-react-asm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionary-react-asm.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
