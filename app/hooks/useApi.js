import * as React from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
    } else {
      setError(false);
    }

    setData(response.data);
  };

  return { request, data, error, loading };
};
