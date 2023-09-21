import React from "react";

const JokesList = (props) => {
  const { jokes } = props;
  return (
    <>
    <ol>
        {jokes.map((item) => (
          <li>
            <div>
            <strong>{item.setup}</strong>
            <p>{item.punchline}</p> 
            </div>
            
          </li>
        ))}
      </ol>

    </>      
   
  );
};

export default JokesList;
