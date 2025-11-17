import "./App.css";

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
          <div className="col-md-3">
            <h1 className="text-warning text-center">Healthy Food</h1>
            {foodItems.length == 0 && (
              <h3 className="text-center text-danger">I am still Hungry</h3>
            )}
            <ul className="list-group ">
              {foodItems.map((item) => (
                <li
                  key={item}
                  className="list-group-item bg-success text-light border border-dark p-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
