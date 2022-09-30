
// import { Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Card.css";


const API_URL = "https://programming-quotes-api.herokuapp.com/Quotes?count=0";
// const Card = ({handleClick}) =>{
    function Card (){
    const [quotes, setQuotes] = useState(" ");
    useEffect(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
         setQuotes(data);
        });
    }, []);
  
return quotes.length > 0 ?(
    <div className="container"> 
     <form action="">
    <div className="card">
      {/* <div className="img"><img src="https://i.pinimg.com/736x/e0/55/7a/e0557a7d8728c968f4a5af02ba8b6e84.jpg" width="100" height="100" ></img></div> */}
      <div className="authors">{quotes[12].author}</div>
      <div className="quote">{quotes[12].en}</div>
      <div className="save"><input type="image" src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></div>
      {/* <button className="save"></button> */}

  </div>

  <div className="card">
      {/* <div className="img"><img src="https://i.pinimg.com/736x/e0/55/7a/e0557a7d8728c968f4a5af02ba8b6e84.jpg" width="220" height="220"></img></div> */}
      <div className="authors">{quotes[1].author}</div>
      <div className="quote">{quotes[1].en}</div>
      <div className="save"><input type="image" src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></div>
      {/* <button className="save" ><img src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></button> */}
      </div>
  <div className="card">
      {/* <div className="img"><img src="https://i.pinimg.com/736x/e0/55/7a/e0557a7d8728c968f4a5af02ba8b6e84.jpg" width="200" height="200"></img></div> */}
      <div className="authors">{quotes[13].author}</div>
      <div className="quote">{quotes[13].en}</div>
      <div className="save"><input type="image" src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></div>
      {/* <button className="save" ><img src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></button> */}
  </div>

  <div className="card">
      {/* <div className="img"><img src="https://i.pinimg.com/736x/e0/55/7a/e0557a7d8728c968f4a5af02ba8b6e84.jpg" width="220" height="220"></img></div> */}
      <div className="authors">{quotes[30].author}</div>
      <div className="quote">{quotes[30].en}</div>
      <div className="save"><input type="image" src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></div>
      {/* <button className="save" ><img src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></button> */}
  </div>

  <div className="card">
      {/* <div className="img"><img src="https://i.pinimg.com/736x/e0/55/7a/e0557a7d8728c968f4a5af02ba8b6e84.jpg" width="220" height="220"></img></div> */}
      <div className="authors">{quotes[31].author}</div>
      <div className="quote">{quotes[31].en}</div>
      <div className="save"><input type="image" src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></div>
      {/* <button className="save"><img src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></button> */}
  </div>

  <div className="card">
      {/* <div className="img"><img src="https://i.pinimg.com/736x/e0/55/7a/e0557a7d8728c968f4a5af02ba8b6e84.jpg" width="220" height="220"></img></div> */}
      <div className="authors">{quotes[11].author}</div>
      <div className="quote">{quotes[11].en}</div>
      <div className="save"><input type="image" src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></div>
      {/* <button className="save" ><img src="https://www.shareicon.net/data/512x512/2017/05/24/886404_save_512x512.png" /></button> */}
  </div>
  <button className="saved"> VIEW SAVED POSTS </button>
  </form>
  </div>
): (
    <h2 className='text-2xl text-white font-bold'>Loading...</h2>
  );
// return(
//     <div><h1>hi</h1></div>
// );
}

export default Card;