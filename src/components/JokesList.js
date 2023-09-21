import React from "react";

const JokesList = (props) => {
  const { jokes } = props;
  return (
    <div className="mainlist">
    <ul>
        {jokes.map((item => (
          <li key={item.id}>
            <strong className="opener">{item.setup}</strong>
            <p>{item.punchline}</p>   
          </li>
        )))}
      </ul>

    </div>      
   
  );
};

export default JokesList;
