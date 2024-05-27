import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const loadBlipChat = () => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/blip-chat-widget";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        const customStyle = `
          .blip-container.plain-text .bubble.right { background-color: #FCAE1E !important; } 
          #blip-chat-header { background-color: #FCAE1E !important; }
        `;
        new window.BlipChat()
          .withAppKey(process.env.REACT_APP_BOT_API_KEY)
          .withButton({
            color: "#FCAE1E",
            icon: process.env.REACT_APP_BOT_ICON_URL,
          })
          .withCustomStyle(customStyle)
          .withCustomCommonUrl(process.env.REACT_APP_CUSTOM_URL)
          .build();
      };
      document.body.appendChild(script);
    };

    loadBlipChat();
  }, []);

  return (
    <div className="App">
      {" "}
      <nav>
        <div class="logo">Gatonet</div>
        <ul>
          <li>
            <a href="#planos">Planos</a>
          </li>
          <li>
            <a href="#vagas">Vagas</a>
          </li>
          <li>
            <a href="#suporte">Suporte</a>
          </li>
        </ul>
      </nav>
      <header>
        <h1>Bem-vindo ao Gatonet!</h1>
        <p>Assista aos melhores canais e filmes online.</p>
      </header>
      <section id="planos">
        <h2>Nossos Planos</h2>
        <div class="cards">
          <div class="card">
            <h3>Plano 1: Bronze</h3>
            <p>120 Canais por R$ 10,00</p>
          </div>
          <div class="card">
            <h3>Plano 2: Prata</h3>
            <p>520 Canais por R$ 20,00</p>
          </div>
          <div class="card">
            <h3>Plano 3: Premium Platinum Black</h3>
            <p>1020 Canais e FilmesOnlineFree por R$ 240,00</p>
          </div>
        </div>
      </section>
      <section id="vagas">
        <h2>Vagas</h2>
        <p>Atualmente, não temos vagas disponíveis.</p>
      </section>
      <section id="suporte">
        <h2>Suporte Técnico</h2>
        <p>
          Atualmente, não oferecemos suporte técnico. <br />
          Desliga e liga que funciona!
        </p>
      </section>
      <footer>
        <p>&copy; 2024 Gatonet. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
