import React, { useState, useEffect } from 'react';
import Wrapper from "./components/wrapper";
import './index.css';
import Loading from './components/Loader';

function App() {
  // Set up a state to handle loading
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading state and hide after 3 seconds (you can modify this for actual data loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds
    }, 3000); // 3 seconds of loading time

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <Wrapper />}
    </>
  );
}

export default App;
