// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const source = axios.CancelToken.source();
//     const fetchData = async () => {
//       // setData(null);
//       setLoading(true);
//       // setError(null);
//       try {
//         const res = await axios.get(url, { cancelToken: source.token });
//         if (Math.random() > 0.5) throw new Error("slick ez");
//         if (res) setData(res);
//         // setError(null);
//       } catch (e) {
//         setError(e);
//       } finally {
//         // setData(null);
//         setLoading(false);
//         // setError(null);
//       }
//     };
//     fetchData();
//     return () => {
//       source.cancel();
//     };
//   }, []);
//   return { data, loading, error };
// }
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url, { cancelToken: source.token });
        // if (Math.random() > 0.5) throw new Error("slick ez");
        setResponse(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
    return () => {
      source.cancel();
    };
  }, []);
  return { response, error, loading };
};

export default useFetch;
