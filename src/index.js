import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
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
    <div className="header">
      <h1>Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  console.log(pizzas);

  return (
    <div className="menu">
      <h2> Our Menu </h2>

      {/* first method to call object */}

      {/* 
      <div>
        {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div> */}

      {/* Second method to call object */}

      <>
        <p>
          A paragraph is a self-contained unit of discourse in writing dealing
          with a particular point or idea. Though not required by the
          orthographic conventions of any language with a writing system,
          paragraphs are a conventional means of organizing extended segments of
          prose.
        </p>

        {numPizzas > 0 ? (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : (
          <p> Sorry we're working on our menu :( </p>
        )}
      </>

      {/* third method to call object (manual entering data) */}

      {/*<Pizza
        name="Pizza Spinaci"
        description="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />

      <Pizza
        name="Pizza Funghi"
        description="Tomato, mozarella, mushrooms, and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={16}
        />*/}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours(); // get time in hours (24 format not 12)

  const closeHour = 22;
  const openHour = 10;
  const isOpen = openHour <= hour && closeHour >= hour;
  console.log(isOpen);
  // if (openHour <= hour && closeHour >= hour) {
  //  alert("We're Currently Open");
  // } else alert("Sorry We're Closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're Open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
