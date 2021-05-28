import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./cityes.css";

export default function Cityes() {
  const [population, setPopulatin] = useState(50000);
  const list = sortedCities.map((item) => {
    if (item.population > population) {
      return <option key={nanoid()}>{item.city}</option>;
    }
    return null;
  });

  return (
    <>
      <select>{list}</select>
      <div>число жителей от</div>
      <input
        type="number"
        value={population}
        onChange={(e) => setPopulatin(e.target.value)}
      ></input>
    </>
  );
}

const cities = [
  {
    city: "Артёмовск",
    population: "1688",
  },
  {
    city: "Ачинск",
    population: "105259",
  },
  {
    city: "Боготол",
    population: "19819",
  },
  {
    city: "Бородино",
    population: "16061",
  },
  {
    city: "Дивногорск",
    population: "29195",
  },
  {
    city: "Дудинка",
    population: "21015",
  },
  {
    city: "Енисейск",
    population: "17805",
  },
  {
    city: "Железногорск",
    population: "83857",
  },
  {
    city: "Заозёрный",
    population: "10286",
  },
  {
    city: "Зеленогорск",
    population: "61915",
  },
  {
    city: "Игарка",
    population: "4417",
  },
  {
    city: "Иланский",
    population: "14967",
  },
  {
    city: "Канск",
    population: "89111",
  },
  {
    city: "Кодинск",
    population: "15911",
  },
  {
    city: "Красноярск",
    population: "1095286",
  },
  {
    city: "Лесосибирск",
    population: "59525",
  },
  {
    city: "Минусинск",
    population: "68007",
  },
  {
    city: "Назарово",
    population: "49825",
  },
  {
    city: "Норильск",
    population: "179554",
  },
  {
    city: "Сосновоборск",
    population: "40614",
  },
  {
    city: "Ужур",
    population: "15563",
  },
  {
    city: "Уяр",
    population: "11981",
  },
  {
    city: "Шарыпово",
    population: "37136",
  },
];

const sortedCities = cities.sort((a, b) => {
  if (a.city < b.city) return -1;
  if (a.city > b.city) return 1;
  return 0;
});
