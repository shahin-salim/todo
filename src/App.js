import "./App.css";
import { useState } from "react";

function App() {
     const [toDos, setToDos] = useState([]);
     const [toDo, setToDo] = useState("");

     const textInp = (e) => {
          setToDo(e.target.value);
          console.log(toDo);
     };
     const setForTodos = () => {
          setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
          console.log(toDos);
     };

     const checkItem = (id) => {
          console.log(toDos);
          console.log(typeof toDos);
          let arr = toDos.filter((values) => values.id != id);
          setToDos(arr);
     };

     return (
          <div className="app">
               <div className="mainHeading">
                    <h1>ToDo List</h1>
               </div>
               <div className="subHeading">
                    <br />
                    <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
               </div>
               <div className="input">
                    <input value={toDo} onChange={textInp} type="text" placeholder="🖊️ Add item..." />
                    <i onClick={setForTodos} className="fas fa-plus"></i>
               </div>

               <div className="todos">
                    {toDos.map((a, i) => {
                         console.log(a);
                         return (
                              <div>
                                   <div className="todo" key={i}>
                                        <div className="left">
                                             <input
                                                  type="checkbox"
                                                  onChange={(e) => {
                                                       console.log(e.target.value);
                                                       console.log(a.status);
                                                       setToDos(
                                                            toDos.filter((obj) => {
                                                                 if (a.id === obj.id) {
                                                                      obj.status = e.target.checked;
                                                                 }
                                                                 return obj;
                                                            })
                                                       );
                                                  }}
                                                  value={a.status}
                                             />
                                             <p style={{ margin: "0", marginLeft: "4px" }}>{a.text}</p>
                                        </div>
                                        <div className="right" onClick={(e) => checkItem(a.id)}>
                                             <i className="fas fa-times"></i>
                                        </div>
                                   </div>
                              </div>
                         );
                    })}
               </div>

               <div style={{ color: "white", width: "20rem" }}>
                    <h1 style={{ marginTop: "5px" }}>selected input</h1>
                    {toDos.map((c, i) => {
                         return c.status == true ? (
                              <p style={{ backgroundColor: "white", color: "black" }} key={i}>
                                   {c.text}
                              </p>
                         ) : (
                              ""
                         );
                    })}
               </div>
          </div>
     );
}

export default App;
