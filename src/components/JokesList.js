import React from "react";

const JokesList = (props) => {
  const { jokes } = props;
  return (
    <>
    <ol class="list-group list-group-numbered">
        {jokes.map((item) => (
          <li className="list-group-item d-flex justify-content-between align-items-start"  key={item.id}>
            <div>
            <strong class='fw-bold'>{item.setup}</strong>
            <p>{item.punchline}</p> 
            </div>
            
          </li>
        ))}
      </ol>

    </>      
   
  );
};

export default JokesList;
