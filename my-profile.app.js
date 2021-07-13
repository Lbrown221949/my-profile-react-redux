import React,{useState} from 'react';
import './App.css';
import photo from "./Linda-CU (1) (2).jpg";
 function App () {
 
 
    const[update, setUpdate]=useState("frontend developer")
     

    const[count, setCount]=useState(1)

    let handleSkill= () => {
    setUpdate("I am a Frontend Developer")
    }   
    let handleName= () => {
     setUpdate("My Name is Linda Brown")
   }
     let handleCount=( ) =>{
     setCount(count+1)
   }

    return (
    <div className="container">
   

      <div className="photo">
     <img src= {photo} alt =""></img>
     <p>{update}</p>
      </div>
       <div>
      <div className="button">
      <button className="butn-edit"></button>
      <button onClick={handleSkill}>Skill</button>
      <button onClick={handleName}>Name</button>
      </div>
      </div>

      <div>
       <p>{count}</p>
       <button onClick={handleCount}>Likes</button>
       <a href="https://www.facebook.com/profile.php?id=100053572084027" >facebook</a>
      
            
      </div>
      </div>
       )
    }
 export default App;
 npm run deploy
 