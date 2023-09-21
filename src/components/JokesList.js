import React from "react";

const JokesList = (props) => {
  const { jokes } = props;
  return (
    
    
    <div className="mainlist">
    <h2> 10 Random Jokes: </h2>
    <ol> 
        {jokes.map((item => (
          <li key={item.id}>
            <strong className="opener">{item.setup}</strong>
            <ul> 👏 {item.punchline} </ul>   
          </li>
        
        )))}
       
      </ol>

     <button>More Jokes</button>

    </div>      

  );
};

export default JokesList;
