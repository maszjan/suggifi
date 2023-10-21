import { useState, useEffect } from "react";
import axios from "axios";

export default function GetGamesTitlesThree() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://suggifi-api.test/api/gamestitlesthree",
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

  let getGamesTitlesThree = [];

  data.forEach((el) => {
    getGamesTitlesThree.push(  {
      value: el.name,
      label: el.name
    }
    )
  });

  return getGamesTitlesThree;
}




