import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Fast React Pizza Co</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>We are currently open {new Date().toLocaleTimeString()}</footer>
  );
}
function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" srcset="" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato,mozarella,spinach,and ricotta</p>
    </div>
  );
}
