import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterSelection from "./CharacterSelection";

export default function CharacterDropDown() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://chess-tournament-api.devtest.ge/api/grandmasters", { cancelToken: source.token });
        // if (Math.random() > 0.5) throw new Error("slick ez");
        if (res) setData(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <div className="w-[391px] h-[419px] bg-[#FFFFFF] border-solid border-[1px] border-[rgba(0, 0, 0, 0.1)]
     rounded shadow absolute"
    >
      {(loading && !data) && <p className="text-center pt-4">Loading...</p>}
      {(error && !data) && <p className="text-center pt-4">Something went wrong...</p>}
      {data && data.data.map(({ name, image, id }) => <CharacterSelection name={name} url={image} key={id} />) }
    </div>
  );
}
