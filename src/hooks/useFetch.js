import { useState, useEffect } from "react";

/**
 * This custom hook is useful to fetch data from an API.
 * @param {String} url
 * @returns {Object} {data, loading, error}
 */
export const useFetch = (url) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then(json => {
      setItems(json);
      setLoading(false);
      setError({ err: false });
    })
    .catch(err => {
      setLoading(true);
      setError(err);
    })
  }, [url]);
  return { items, loading, error };
};