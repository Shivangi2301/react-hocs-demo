import React from 'react';
import './style.css';
import MyEnhancedComponent from './MyEnhancedComponent.js';
import ComplexComponent from './ComplexComponent.js';

export default function App() {
  return (
    <div>
      <h1>HOC Demo</h1>
      <h4>Original Component Example</h4>
      <ComplexComponent />
      <h4>Higher Order Component Example</h4>
      <MyEnhancedComponent />
    </div>
  );
}
