import React,{useState} from 'react'

export default function Game(){
    const[lives,setLives]=useState(5);
    const lossLife=()=>{
        if(lives>0){
            setLives(lives-1)
        }
    };
    function refreshPage(){
        window.location.reload();
    } 
   
  return (
    <div>
<h1 style={{textAlign:'center'}}>Lives Enemy: {lives}</h1>
   <p style={{textAlign:'center'}}> {lives>0 ? (<button onClick={lossLife} style={{fontSize:'1.5rem',backgroundColor:'green',color:'black',cursor:'pointer'}}>Kill the Enemy</button>):(<p style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',color:'green'}}><h2>Congratulations You Win!!🏆🏆🏆</h2><h3>   <button type="submit" onClick={refreshPage} style={{backgroundColor:'blue',color:'white',fontSize:'1.1rem',border:'1px solid blue',cursor:'pointer'}}>Click to Restart Game</button>
   </h3><p></p><img src='/image/game.gif'/></p>)} </p>
    </div>
  )
}

