import { useState, useEffect } from "react";
import axios from "axios";

export default function GetGamesTitlesOne() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://suggifi-api.test/api/gamestitlesone",
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

  let getGamesTitlesOne = [];

  data.forEach((el) => {
    getGamesTitlesOne.push(  {
      value: el.name,
      label: el.name
    }
    )
  });

  return getGamesTitlesOne;
}




