import { useEffect, useState } from "react";

const URL = "https://fakestoreapi.com/products";

function Shop() {
  console.log("Shop rendered");
  const [shopItems, setShopItems] = useState([]);
  // Kai tik uzsikraus komponentas
  // pasissiusti prekes is https://fakestoreapi.com/products
  // sudeti jas i state,
  // atvaizduoti state prekes dom
  useEffect(() => {
    // iife - (()=>{})()
    (async () => {
      const resp = await fetch(URL);
      const dataArr = await resp.json();
      // console.log({ dataArr });
      setShopItems(dataArr);
    })();
  }, []);

  return (
    <section>
      <h2>Our shop</h2>

      {shopItems.length === 0 && <h3>Loading ...</h3>}

      <ul>
        {shopItems.map(({ id, title, price }) => (
          <li key={id}>
            {" "}
            {title} <strong>${price}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Shop;
