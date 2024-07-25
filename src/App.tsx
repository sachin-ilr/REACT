import { Forms1, Forms5, Forms6 } from "./Components/Forms/index";

const App = () => {
  return (
    <>
      <Forms6></Forms6>
      <Forms5></Forms5>
      <Forms1></Forms1>
    </>
  );
};

export default App;

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
