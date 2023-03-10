import React, { useState, useEffect } from "react";
import Error from "../Error/Error";
import classes from "./FactsList.module.css";

interface Fact {
  fact: string;
}

const API_URL = "https://catfact.ninja/facts";

const FactsList: React.FC = () => {
  const [data, setData] = useState<Fact[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const pullData = async () => {
      try {
        const { data } = await fetch(API_URL).then((res) => res.json());

        if (data.length !== 0) {
          setData(data);
        }
      } catch (err) {
        setError(true);
      }
    };

    pullData();
  }, [setData, setError]);

  return (
    <>
      {error && <Error message="Error" />}
      {!error && (
        <div className={classes.list}>
          <h2>{data[0]?.fact}</h2>
          <ul>
            {data?.map(({ fact }) => (
              <li key={fact}>&#128571; {fact}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default FactsList;
