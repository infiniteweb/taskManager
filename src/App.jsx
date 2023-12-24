import { useEffect, useState } from "react";
import mobileLogo from "./assets/logo-mobile.svg";
import chevronDown from "./assets/icon-chevron-down.svg";
import addTaskMobile from "./assets/icon-add-task-mobile.svg";
import verticalEllipsis from "./assets/icon-vertical-ellipsis.svg";

const baseUrl = "http://localhost:8080/taskmanager/taskManagerBackEnd/";

export default function App() {
  console.log;
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    fetchToDos();
  }, []);

  const fetchToDos = async () => {
    const todos = await fetch(baseUrl + "getall.php");
    console.log(await todos.json());
  };

  

  /* platform Launch fs-l  */
  return (
    <>
      <div className="container">
        <div id="topbar">
          <img src={mobileLogo} alt="" id="mobile-logo" />
          <h2 className="fs-l" id="board-name" >Platform Launch</h2>
          <img src={chevronDown} alt="" id="chevron-down"/>
          <button id="add-task-btn">
            <img src={addTaskMobile} alt="" />
          </button>
          <img src={verticalEllipsis} alt=""id="vertical-ellipsis"/>
        </div>

        <div id="board">
          <div className="board-column">
            <h4 className="fs-s">
              <ul className="board-list">
                <li className="board-list-item">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officiis, exercitationem.
                </li>
                <li className="board-list-item">
                  Itaque, adipisci reprehenderit a ratione labore voluptas quasi
                  nam debitis!
                </li>
                <li className="board-list-item">
                  Saepe nemo omnis nisi sed blanditiis eligendi incidunt ullam
                  dolore!
                </li>
              </ul>
            </h4>
          </div>
          <div className="board-column">
            <h4 className="fs-s">
              <ul className="board-list">
                <li className="board-list-item">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo, minus?
                </li>
                <li className="board-list-item">
                  Delectus sequi excepturi maxime. Temporibus magnam quae
                  aliquam harum quam.
                </li>
                <li className="board-list-item">
                  Nostrum at maiores earum adipisci reprehenderit autem
                  architecto necessitatibus commodi!
                </li>
              </ul>
            </h4>
          </div>
          <div className="board-column">
            <h4 className="fs-s">
              <ul className="board-list">
                <li className="board-list-item">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Architecto, necessitatibus.
                </li>
                <li className="board-list-item">
                  Qui magni, harum debitis totam officiis nesciunt placeat?
                  Ipsam, mollitia.
                </li>
                <li className="board-list-item">
                  Quas voluptatum tenetur quo quia architecto eaque quam
                  blanditiis expedita!
                </li>
              </ul>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
