import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer/footer";
import NewsContent from "./components/NewsContent/NewsContent";
import Header from "./components/Header/Header";

function App() {
  const [category, setcategory] = useState("business");
  const [newsArray, setnewsArray] = useState([]);

  useEffect(() => {
    async function fetchData(){
    try {
      const getResponse = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=04059151f2bf472b82dbb7e214edcfee`
      );
      setnewsArray(getResponse.data.articles);
    } catch (error) {
      alert(error);
    }
  }
  fetchData();
  },[newsArray , category]);

  return (
    <div>
      <Header setcategory={setcategory}></Header>
      <NewsContent newsArray={newsArray}></NewsContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
