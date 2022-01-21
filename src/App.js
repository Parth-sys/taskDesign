import "./App.css";
import { Grid } from "@material-ui/core";


import { BsFillCartFill } from 'react-icons/bs';
export default function App() {
  const data = [
    {
      url: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: "420$-450$",
      Rate: "⭐⭐⭐⭐",
      btname: "ADD to cart"
    },

    {
      url: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: "420$-450$",
      Price2: "18$",
      Rate: "⭐⭐⭐⭐",
      btname: "ADD to cart"
    },
    {
      url: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Item sale",
      Rate: "⭐⭐⭐⭐",
      btname: "ADD to cart"
    },

    {
      url: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Popular Item",
      price: "420$-450$",
      Rate: "⭐⭐⭐⭐",
      btname: "ADD to cart"
    },

    {
      url: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: "420$-450$",
      Rate: "⭐⭐⭐⭐",
      btname: "ADD to cart"
    },

    {
      badge:"sale",
      url: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Fancy Product",
      price: "420$-450$",
      Rate: "⭐⭐⭐⭐",
      btname: "ADD to cart"
    }
  ];

  return (
    <div className="App">
      <input placeholder="enter item" type="text"></input>
      <button className="bt">Add </button>
    
      <button className="bt2">    < BsFillCartFill></BsFillCartFill>        Cart <text style={{backgroundColor:"black",color:"white"}}>0</text> </button>
      <div className="banner">
        <h2> SHOP</h2>
      </div>
      
      <Grid style={{ padding: "50px", display: "flex" }} c spacing={2}>

        {data.map((m, index) => (
          <div className="card" key={index}>
            <span class="badge badge-dark" style={{width:"40px" ,marginLeft:"150px" }}>sale</span> 
            <img src={m.url} alt=" " color="action">
              </img>

            <div key={index}>
              <h4 style={{ margin: 0, padding: 0 }}>{m.name} </h4>
              <p style={{ margin: 0, padding: 5 }}> {m.price} </p>
              <span>{m.Price2}</span>
              <p> {m.Rate} </p>
              <button> {m.btname} </button>
            </div>
          </div>
        ))}
      </Grid>
      <Grid className="banner">
        <p> @Copyright Price Card 2021 </p>
      </Grid>
    </div>
  );
}
 