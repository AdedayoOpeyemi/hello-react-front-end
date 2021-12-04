import React from 'react';
// import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchApiData } from '../redux/reducer';

const Greeting = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchApiData());
  // }, []);
  const message = useSelector((state) => state.message);

  return (
    <>
      Greeting:
      {' '}
      { message }
    </>
  );
};

export default Greeting;
