import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co</h1>;
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      We are currently open {new Date().toLocaleTimeString()}
    </footer>
  );
}
function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato,mozarella,spinach,and ricotta</p>
    </div>
  );
}
