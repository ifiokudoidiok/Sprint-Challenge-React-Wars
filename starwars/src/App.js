import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";

import Person from "./Person";

// const Body = styled.div`
//  margin: 0;
//   padding: 0;
//   font-family: sans-serif;
//   background-image: url('./sw-bg.jpg');
//   background-size: cover;

// `;
const StyledApp = styled.div`
 text-align: center;
 .Header {
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
}
  
  table {
  background-color: rgba(0, 0, 0, 0.363);
  color: whitesmoke;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
}

th{
  font-size: 2rem;
  color: aqua;
}
  
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width:130px;
  font-size: 1.25rem;
  /* max-width: 10%; */
 
}

table:nth-child(even) {
  background-color: #413a3aa6;
}
 
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
        console.log(response);
        setPeople(response.data.results);
      })
      .catch(error => console.error(error))
      return(
        console.log('clear')
      )
  }, []);
  return (
    <StyledApp>
    <h1 className="Header">React Wars</h1>
    <table>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Height</th>
        <th>Hair Color</th>
        <th>Skin Color</th>
        <th>Birth Year</th>
      </tr>
    </table>

    {people
      ? people.map(person => <Person data={person} key={person.url} />)
      : null}
  </StyledApp>
  );
};

export default App;
