import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max Well", age: 28 },
      { name: "Jhon", age: 29 },
      { name: "abcd", age: 23 }
    ]
  };

  switchClick = newName => {
    // console.log("Was CLickecd!");

    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: "Manu", age: 39 },
        { name: "XYZ", age: 33 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 27 },
        { name: "XYZ", age: 26 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p>This is really Working</p>
        <button style={style} onClick={() => this.switchClick("Maxmilian!!")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchClick.bind(this, "Max..!")}
          changed={this.nameChangeHandler}
        >
          Racing is My hobby
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";

// const app = props => {
//   const [personState, setPersonsState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Jhon", age: 29 },
//       { name: "abcd", age: 23 }
//     ]
//   });

//   const [otherState, setOtherState] = useState("some other value");

//   console.log(personState, otherState);

//   const switchClick = () => {
//     console.log("Was CLickecd!");

//     setPersonsState({
//       persons: [
//         { name: "Maxiler", age: 38 },
//         { name: "Manu", age: 39 },
//         { name: "XYZ", age: 33 }
//       ]
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm React App</h1>
//       <p>This is really Working</p>
//       <button onClick={switchClick}>Switch Name</button>
//       <Person
//         name={personState.persons[0].name}
//         age={personState.persons[0].age}
//       />
//       <Person
//         name={personState.persons[1].name}
//         age={personState.persons[1].age}
//       >
//         Racing is My hobby
//       </Person>
//       <Person
//         name={personState.persons[2].name}
//         age={personState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default app;
