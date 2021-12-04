import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/reducer';

const Greeting = () => {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.message);

  return (
    <>
      <div>
        Greeting:
        {' '}
        { message }
        <button type="button" className="getGreetingBtn" onClick={() => dispatch(fetchData())}>Say Greeting</button>
      </div>
    </>
  );
};

export default Greeting;
