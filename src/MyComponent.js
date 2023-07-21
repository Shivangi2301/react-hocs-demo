import React from 'react';

const MyComponent = ({ data }) => {
  // Your component logic using the fetched data
  return <div>Data: {JSON.stringify(data)}</div>;
};
export default MyComponent;
