import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "lajhcb", name: "Max Well", age: 28 },
      { id: "lakssdm", name: "Jhon", age: 29 },
      { id: "laasawksm", name: "abcd", age: 23 }
    ],
    otherState: "Some Other Value",
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log("Was CLickecd!");

    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: "Manu", age: 39 },
        { name: "XYZ", age: 33 }
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonhandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("red", "bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(" ")}>This is really Working</p>
        <button style={style} onClick={this.togglePersonhandler}>
          Toggle Persons
        </button>
        {persons}
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

//   const switchNameHandler = () => {
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
//       <button onClick={switchNameHandler}>Switch Name</button>
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
