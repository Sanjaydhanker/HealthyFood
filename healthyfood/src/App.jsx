import { useState } from "react";
import AppName from "./components/AppName";
import FoodItems from "./components/FoodItems";
import Input from "./components/Input";
import ListContainer from "./components/ListContainer";

function App() {
  // const foodList = ["Roti", "Dal", "Ghee", "Green Vegetable", "Salad"];
  const [foodList, setFoodList] = useState(["Roti", "Dal", "Ghee"]);
  const [textToShow, setTextToShow] = useState("Milk");

  const handleOnChange = (e) => {
    setTextToShow(e.target.value);
  };
  const handleFoodItem = (e) => {
    let newFood = textToShow;
    let newFoodItems = [...foodList, newFood];
    setFoodList(newFoodItems);
    // setTextToShow("New Food");
  };

  return (
    <>
      <ListContainer>
        <AppName />
        <Input
          inputType="text"
          handleOnChange={handleOnChange}
          handleFoodItem={handleFoodItem}
        />
        <FoodItems foodList={foodList} />
      </ListContainer>
    </>
  );
}

export default App;
