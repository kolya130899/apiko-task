export const initialState = () => {
  const animalsFromStorage = localStorage.getItem("animals");
  const animalsParsed = JSON.parse(animalsFromStorage);

  return animalsParsed || [];
};
