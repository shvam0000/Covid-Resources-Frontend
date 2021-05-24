import React, { useEffect, useState } from 'react';
import { stateUT, resourceTypes } from '../utils/utilities';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../actions/resourceActions';

const AddResources = ({ history }) => {
  function sortBy(field) {
    return function (a, b) {
      return (a[field] > b[field]) - (a[field] < b[field]);
    };
  }

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { resourceStatus, resourceError, loading } = useSelector(
    (state) => state.addResource
  );

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
    if (resourceStatus === true) {
      setName('');
      setNumber('');
      setState('');
      setCity('');
      setVerified('');
      setType('');
      setCost('');
      setAddress('');
      setTime('');
      setExtraInfo('');
      setError(false);
    }
  }, [userInfo, history, resourceStatus]);

  const [error, setError] = useState(false);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [verified, setVerified] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [info, setExtraInfo] = useState('');

  const checkValidForm = () => {
    if (!number || !state || !verified || !type) {
      return false;
    }

    return true;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!checkValidForm()) {
      setError(true);
    } else {
      const data = {
        name,
        number,
        state,
        city,
        verified,
        type,
        cost,
        address,
        time,
        info,
      };

      console.log(data);
      dispatch(add(data));
    }
  };

  return (
    <div className="flex flex-col justify-items-center items-center mt-20">
      <div className="bg-white w-96 shadow-2xl rounded p-5">
        <form className="space-y-5 mt-5" onSubmit={submitHandler}>
          {loading && <h2>Loading...</h2>}
          {resourceError && <h2>{resourceError}</h2>}
          {error && <h2>Please fill all the fields!</h2>}
          {resourceStatus === true ? <h2>Resouce Added</h2> : ''}
          <label>Contact Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter Name"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Contact Number</label>
          <input
            type="text"
            value={number}
            placeholder="Enter Number"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setNumber(e.target.value)}
          />
          <label>State</label>
          {/* select for state */}
          <select
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setState(e.target.value)}
            value={state}
          >
            <option> Select</option>
            {stateUT.sort(sortBy('label')).map((option, id) => (
              <option key={id} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <label>City</label>
          <input
            type="text"
            placeholder="Enter City"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label>Verified at</label>
          <input
            type="text"
            placeholder="Enter Date & Time"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setVerified(e.target.value)}
            value={verified}
          />
          <label>Type of Resource</label>
          <select
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option> Select</option>
            {resourceTypes.sort(sortBy('label')).map((option, id) => (
              <option key={id} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <label>Cost of Resource</label>
          <input
            type="text"
            placeholder="Enter Cost"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
          />
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter Address"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <label>Operational Hours</label>
          <input
            type="text"
            placeholder="Enter Operatioanl Hours"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
          <label>Any Extra Information</label>
          <input
            type="text"
            placeholder="Enter Extra Information"
            className="border border-gray-800 w-full h-12 px-3 focus:outline-none"
            onChange={(e) => setExtraInfo(e.target.value)}
            value={info}
          />
          <button
            type="submit"
            className="text-white bg-blue-600 w-full h-10 rounded outline-none focus:outline-none hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResources;
