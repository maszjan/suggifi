import { useState, useEffect } from "react";
import axios from "axios";

export default function GetGamesTitlesTwo() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://suggifi-api.test/api/gamestitlestwo",
          {
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/json",
          }
        );
        setData(response.data.titles);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  let getGamesTitlesTwo = [];

  data.forEach((el) => {
    getGamesTitlesTwo.push(  {
      value: el.name,
      label: el.name
    }
    )
  });

  return getGamesTitlesTwo;
}




