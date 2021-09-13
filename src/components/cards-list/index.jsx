import React, { useState } from "react";
import Card from "../card";
import "./style.css";

const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    if (e.target.id !== suitFilter) {
      setSuitFilter(e.target.id);
    } else {
      setSuitFilter(false);
      e.target.checked = false;
    }
  };

  return (
    <React.Fragment>
      <div className="filter-container">
      <p>Filtrar por naipe</p>
      <div>
        <input
          onClick={handleSuitFilter}
          type="radio"
          id="SPADES"
          name="suit"
        />
        <label htmlFor="SPADES">Espadas</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="HEARTS"
          name="suit"
        />
        <label htmlFor="HEARTS">Copas</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="CLUBS"
          name="suit"
        />
        <label htmlFor="CLUBS">Paus</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="DIAMONDS"
          name="suit"
        />
        <label htmlFor="DIAMONDS">Ouros</label>
      </div>
    </div>
    <div>
      {!suitFilter &&
        cardsList.map((item, index) => {
          return <Card card={item} key={index} />;
        })}

      {suitFilter &&
        cardsList
          .filter((item) => item.suit === suitFilter)
          .map((item, index) => {
            return <Card card={item} key={index} />;
          })}
    </div>
    </React.Fragment>
  );
};

export default CardsList;
