import logo from './logo.svg';
import './App.css';
import React, {useReducer, useState} from 'react';

let initialState ={photo: null};

function reducer(state, action){
  let newState;
  switch (action.type){
    case "UploadPhoto1":
      newState = URL.createObjectURL(action.e.target.files[0])        
      break;
    case "UploadPhoto2":
      newState = URL.createObjectURL(action.e.target.files[0])       
      break;    
      
    default:
      throw new Error();
  }
  return newState;
}

function GenerateMorph(){
  let img = document.getElementById("img3");
  img.src = require('./res/book4.jpg');
}

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  

  const action1 = {
    type: "UploadPhoto1",
    e : Event
  }

  const action2 = {
    type: "UploadPhoto2",
    e : Event
  }



  //console.log(`${typeof(photo)} ${setPhoto1}`);

  function OnPhotoSelected(photoNum, event) {
    switch(photoNum){
      case "photo1":
        setPhoto1(URL.createObjectURL(event.target.files[0]));
        break;
      case "photo2":
        setPhoto2(URL.createObjectURL(event.target.files[0]));
        break;      
      default:
        throw new Error("Invalid option");
    }
  }

  // function OnPhoto1Selected(event){
  //   setPhoto1(URL.createObjectURL(event.target.files[0]))
  // }

  // function OnPhoto2Selected(event){
  //   setPhoto2(URL.createObjectURL(event.target.files[0]))
  // }

  

  // const onSelected = (i, e)=>{
  //   dispatch({type:i, event:e})
  // }
  return (
    <div className="App">

      <div class="row">
        <div class="col-sm-4">
          <h2>Photo 1</h2>        
        </div>
        <div class="col-sm-4">
          <h2> Photo 2 </h2>
        </div>
        <div class="col-sm-4">
          <h2>Get Morphed Photo</h2>
        </div>
      </div>

      
      <div class="row">
        <div class="col-sm-4">          
          <input type="file" onChange={(event)=>{OnPhotoSelected("photo1", event)}}/>      
          {/* <input type="file" onChange={()=>{dispatch(action1)}}/> */}
          <img src={photo1} />
          {/* <img src = {state.photo}/> */}
        </div>
        <div class="col-sm-4">          
          <input type="file" onChange={(event)=>OnPhotoSelected("photo2", event)}/>      
          {/* <input type="file" onChange={()=>{dispatch(action2)}}/> */}
          <img src={photo2} />
          {/* <img src={state.photo} /> */}
        </div>
        <div class="col-sm-4">          
          {/* <input type="button" onChange={(event)=>OnPhotoSelected("photo3", event)}/>       */}
          <button onClick={GenerateMorph}>Generate Morphing</button>
          {/* <input type="file" onChange={()=>{dispatch(action2)}}/> */}
          <br></br>
          <img id="img3" />
          {/* <img src={state.photo} /> */}
        </div>
        
        

      </div>
      
      
    </div>
  );
}



export default App;
