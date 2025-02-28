import { CanceledError } from "./Components/Services/apiClient";
import { useEffect, useState } from "react";
import userServices, { User } from "./Components/Services/userServices";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // get -> promise -> res/err (usual method)
    setIsLoading(true);

    const { request, cancel } = userServices.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // .finally(() => setIsLoading(false)); // ddoesnt' work in strict mode so need to duplicate the code
    return () => cancel();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userServices.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "ilr" };
    setUsers([newUser, ...users]);

    userServices
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userServices.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn mb-3 btn-primary" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Danger
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary"
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </>
  );
}

export default App;

//====================================================================================

// // Back End - 1

// import { useState } from "react";
// import { ProductList } from "./Components/BeforeForms";

// function App() {
//   const [category, setCategory] = useState("");

//   return (
//     <>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductList category={category} />
//     </>
//   );
// }

// export default App;
// ===================================================================================
// Expoense Tracker

// import { useState } from "react";
// import {
//   ExpenseFilter,
//   ExpenseList,
//   ExpenseForm,
// } from "./ExpenseTracker/Components/index";

// function App() {
//   const [selectedCategory, setSlectedCatagory] = useState("");

//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 10, category: "Utilities" },
//     { id: 3, description: "ccc", amount: 10, category: "Utilities" },
//     { id: 4, description: "ddd", amount: 10, category: "Utilities" },
//   ]);

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(newExpense) =>
//             setExpenses([
//               ...expenses,
//               { ...newExpense, id: expenses.length + 1 },
//             ])
//           }
//         />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSlectedCatagory(category)}
//         ></ExpenseFilter>
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       ></ExpenseList>
//     </>
//   );
// }

// export default App;

//===============================================================================
//Forms

// import {
//   Forms1,
//   Forms5,
//   Forms6,
//   Forms8,
//   Forms9,
// } from "./Components/Forms/index";

// const App = () => {
//   return (
//     <>
//       <Forms9></Forms9>
//       <Forms8></Forms8>
//       <Forms6></Forms6>
//       <Forms5></Forms5>
//       <Forms1></Forms1>
//     </>
//   );
// };

// export default App;

//==============================================================================
// Before Forms

// import {
//   // Alert,
//   // ArrayUpd,
//   // Button,
//   // Count,
//   // Immer,
//   // Like,
//   // ListGroup,
//   // Sample,
//   // SharingState,
//   // NavBar,
//   // Cart,
//   // Game,
//   ExpandableText,
// } from "./Components/BeforeForms/index";

// function App() {
//   // let items = ["india", "usa", "france", "japan"];

//   // const handleSelectItem = (item: string) => {
//   //   console.log(item);
//   // };

//   // const [alertVisible, setAlertVisibility] = useState(false);

//   // const [cartItem, setCartItem] = useState(["Product1", "Product2"]);

//   // const [game, setGame] = useState({
//   //   id: 1,
//   //   player: {
//   //     name: "john",
//   //   },
//   // });

//   // const handleClick = () => {
//   //   // essentially we need game.player.name = 'bob'; -> here we are trying to change the name of the player on click.
//   //   setGame({ ...game, player: { ...game.player, name: "bob" } });
//   // };

//   // const [pizza, setPizza] = useState({
//   //   name: "cheese loaded",
//   //   toppings: ["cheese"],
//   // });

//   // const handleClick = () => {
//   //   setPizza({ ...pizza, toppings: [...pizza.toppings, "tomato"] });
//   // };

//   // const [cart, setCart] = useState({
//   //   discount: 0.1,
//   //   items: [
//   //     { id: 1, title: "product1", quantity: 1 },
//   //     { id: 2, title: "product2", quantity: 1 },
//   //   ],
//   // });

//   // const handleClick = () => {
//   //   setCart(
//   //     produce((draft) => {
//   //       const item = draft.items.find((item) => item.id === 1);
//   //       if (item) item.quantity++;
//   //     })
//   //   );
//   // };

//   return (
//     <div>
//       <ExpandableText maxChars={10}>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
//         perspiciatis aspernatur est, eum voluptatum ex dolore labore ratione a
//         culpa veniam nesciunt beatae facere illo non architecto corrupti minus.
//         Numquam facere ut a velit officiis maiores aspernatur neque autem enim,
//         dolorum eveniet nisi deserunt quasi et quia nemo placeat id, debitis
//         dolorem ea? Adipisci quam molestias vero unde delectus debitis, officia
//         vitae voluptas nam neque animi aspernatur incidunt in harum velit nobis
//         blanditiis facilis, placeat eligendi facere quisquam, eum pariatur
//         labore atque? Odio quidem dolores fugiat eum quisquam hic reprehenderit
//         nisi, porro delectus aliquid totam laboriosam inventore nam
//         necessitatibus perspiciatis?
//       </ExpandableText>
//       {/* {cart.items.map((item) => (
//         <p key={item.id}>
//           {item.title} {item.quantity}
//         </p>
//       ))}
//       {pizza.toppings}
//       <button onClick={handleClick}>Click Me</button>
//       {game.player.name}
//       <Game onChange={handleClick} />
//       <br />
//       <br />
//       <NavBar cartItemsCount={cartItem.length} />
//       <Cart cartItems={cartItem} onClear={() => setCartItem([])} />
//       <br />
//       <Like onClick={() => console.log("Clicked")} />
//       <br />
//       <ListGroup
//         heading="countries"
//         items={items}
//         onSelectItem={handleSelectItem}
//       />
//       <br />
//       <Button
//         onClick={() => {
//           setAlertVisibility(true);
//         }}
//         color="danger"
//       >
//         My Button
//       </Button>
//       <br />
//       {alertVisible == true && (
//         <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
//       )}
//       <br />
//       <Sample initialPrice={5} />
//       <br />
//       <Count initialCount={5} />
//       <br />
//       <ArrayUpd />
//       <br />
//       <Immer />
//       <br />
//       <SharingState /> */}
//     </div>
//   );
// }

// export default App;
