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
      <Pizza name='Pizza Spinachi'
        ingredients='Tomato,mozerella, spinacha and ricotta cheese'
        photoName='pizzas/spinaci.jpg'
        price={12}
      />
      <Pizza name='Pizza Funghi'
        ingredients='Tomato,mushrooms'
        photoName='pizzas/funghi.jpg'
        price={10}
      />
     
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
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName } alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
  );
}
