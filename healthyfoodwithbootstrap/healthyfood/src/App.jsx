import "./App.css";
import AppName from "./components/AppName";
import ErrorMassege from "./components/ErrorMassege";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Ghee", "Roti", "Salad", "Veg"];
  // let foodItems = [];
  // let errorMassege =
  //   foodItems.length == 0 ? (
  //     <h3 className="text-center text-danger">I am still Hungry</h3>
  //   ) : null;

  // if (foodItems.length == 0) {
  //   return <h3>I am Still Hungry</h3>;
  // }

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <AppName />
            <ErrorMassege foodItems={foodItems} />
            <FoodItems foodItems={foodItems} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
