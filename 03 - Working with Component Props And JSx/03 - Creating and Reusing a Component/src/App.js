import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Pizza />
    </div>
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
