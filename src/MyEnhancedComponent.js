import React from 'react';
import MyComponent from './MyComponent.js';
import withDataFetching from './withDataFetching.js';

const MyEnhancedComponent = withDataFetching(
  MyComponent,
  'https://jsonplaceholder.typicode.com/posts/1'
);

export default MyEnhancedComponent;
