import React, { useState, useEffect } from "react";
import classes from "./Facts.module.css";
// import ErrorMessage from "./Error";

interface Facts {
  fact: string;
}

interface Res {
  data: Facts[];
  fact: string;
}

const API_URL = "https://catfact.ninja/facts";

const FactsList: React.FC = () => {
  const [data, setData] = useState<Array<Res>>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const pullData = async () => {
      try {
        const { data } = await fetch(API_URL).then((res) => res.json());
        if (data.length !== 0) {
          setData(data);
          // .then((response) => {
          //   console.log("re", response);
          //   return response.json();
          // }) // returns
          // .then((json) => {
          //   console.log("json", json);
          //   setData(json.data);
          // })
          // .catch((err) => {
          //   console.log("err", err);
          // });
        }
      } catch (err) {
        console.log("err", err);
        setError(true);
      }
    };

    pullData();
  }, []);

  return (
    <>
      {error && <div>Error</div>}
      {!error && (
        <div className={classes.list}>
          <h2>{data[0]?.fact}</h2>
          <ul>
            {data?.map((item) => (
              <li key={item.fact}>&#128571; {item.fact}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FactsList;
