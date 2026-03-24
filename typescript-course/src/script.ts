//import { PI } from "./utils.js";

let a: number;
let arr: [];

function abcd(v: number | string) {
  if (typeof v === "number") {
    v.toFixed;
  } else if (typeof v === "string") {
    v.endsWith;
  }
}

type City = {
  name: string;
  population: number;
};
type Planet = {
  cities: number;
  name: string;
};
type CitiesInPlanet = City & Planet;

let value: CitiesInPlanet = {
  name: "bhopal",
  population: 1200000,
  cities: 12,
};
let x = 12;

type User = {
  name: string;
  age: number;
  email: string;
};
let user: User = {
  name: "ASH",
  age: 25,
  email: "ash@ash.com",
};

interface Human {
  name: string;
}
interface Human {
  age: number;
}

//console.log(PI);
