import * as React from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const request = async () => {
    setLoading(true);
    const response = await apiFunc();
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
