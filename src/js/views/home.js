import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Planets } from "../component/planets";
import { Characters } from "../component/characters";
import { Vehicles } from "../component/vehicles";
import { getPeople } from "../api.js";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [characters, setCharacters] = useState([]);
  const [planets, setplanets] = useState([]);
  useEffect(
    () => {
      setplanets(store.planets);
      setCharacters(store.characters);
    },
    [store.characters],
    [store.planets]
  );
  console.log(characters);
  console.log(planets);
  return (
    <div className="text-center mt-5">
      <div className="d-flex overflow-auto">
        {characters.length > 0 &&
          characters.map((item, index) => {
            return <Characters key={index} obj={item} id={index} />;
          })}
        <Vehicles />
      </div>

      <div className="d-flex overflow-auto">
        {planets.length > 0 &&
          planets.map((item, index) => {
            return <Planets key={index} obj={item} id={index} />;
          })}
      </div>
    </div>
  );
};
