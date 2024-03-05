import React from 'react';
import './App.css';

import * as BasicTasks from './aufgaben/BasicTasks';
import * as MediumTasks from './aufgaben/MediumTasks';
import * as HardTasks from './aufgaben/HardTasks';

function App() {
  return (
    <div>
      <h1>React Tasks</h1>
      <h2>Basic Tasks</h2>
      <h5>happy hacking!</h5>
      <h3>Task 1: Hello world</h3>
      <BasicTasks.Task1 />
      <hr />
      <br />
      <h3>Task 2: Ternary</h3>
      <BasicTasks.Task2 />
      <hr />
      <br />
      <h3>Task 3: Props</h3>
      <BasicTasks.Task3 message="This is the prop message!" />
      <hr />
      <br />
      <h3>Task 4: Arrow functions</h3>
      <BasicTasks.Task4 />
      <hr />
      <br />
      <h3>Task 5: Function Button</h3>
      <BasicTasks.Task5 />
      <hr />
      <br />
      <h3>Task 6: useState</h3>
      <BasicTasks.Task6 />
      <hr />
      <br />
      <h3>Task 7: Conditional rendering</h3>
      <BasicTasks.Task7 />
      <hr />
      <br />

      
      <br />
      <br />
      <h2>Medium Tasks</h2>
      <h3>Task 1: Spread operators</h3>
      <MediumTasks.Task1Parent />
      <MediumTasks.Task1Child />
      <hr />
      <br />
      <h3>Task 2: List rendering with keys</h3>
      <MediumTasks.Task2 />
      <hr />
      <br />
      <h3>Task 3: Form Input</h3>
      <MediumTasks.Task3 />
      <hr />
      <br />
      <h3>Task 4: useEffect</h3>
      <MediumTasks.Task4 />
      <hr />
      <br />
      
      <br />
      <br />
      <h2>Hard Tasks</h2>
      <h3>Task 1: Data fetching!</h3>
      <HardTasks.Task1 />
      {/* Implementation for other tasks is left as a task in itself */}
    </div>
  );
}

export default App;
