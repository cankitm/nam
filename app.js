import React from "react";
import ReactDOM from "react-dom/client";


const ContainerComponent = () =>{
 return (<div className="container">
  <ChildComponent />
  <div className="child2">I am child 2</div>

 </div>)
}

const ChildComponent = () =>{
 return (<div className="child">I am child</div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContainerComponent></ContainerComponent>)