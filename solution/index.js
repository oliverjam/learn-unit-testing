// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

// "name=oliver&email=hello@oliverjam.es" -> { name: "oliver", email: "hello@oliverjam.es"}
function searchParamsToObject(paramString) {
  const searchParams = new URLSearchParams(paramString);
  let searchObject = {};
  for (const entry of searchParams) {
    const [key, value] = entry;
    searchObject[key] = value;
  }
  return searchObject;
}

function isLeapYear(year) {
  if (typeof year !== "number") return "Please enter a number";
  if (year < 0) return "Year cannot be negative";
  if (year % 400 === 0) return true; // 2000 was a leap year
  if (year % 100 === 0) return false; // 1900 was not
  if (year % 4 === 0) return true; // 2020 was
  return false; // all other years are not leap years
}
