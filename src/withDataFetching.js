import React, { useState, useEffect } from 'react';

const withDataFetching = (WrappedComponent, url) => {
  const EnhancedComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Simulating an API call
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    // Pass the fetched data as a prop to the WrappedComponent
    return <WrappedComponent data={data} />;
  };

  return EnhancedComponent;
};
export default withDataFetching;
