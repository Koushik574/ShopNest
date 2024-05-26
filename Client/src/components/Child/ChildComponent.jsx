import React, { useContext } from 'react'
import UserContext from '../../context/UserContext';


function ChildComponent(prop) {
    const d = useContext(UserContext);
    const {data} = prop;
  return (
    <>
    <p>ChildComponent {data}</p>
    <p>ChildComponent {d.dummyData}</p>
    </>
  )
}

export default ChildComponent;