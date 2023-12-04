import "./Card.css"
import { useState } from "react";

function Card(props){

    let avi_qyt = props.sku01 + props.sku02 +props.sku03;
    let det_qty = props.ini_quantity - avi_qyt;
    // console.log(det_qty)

    let display = <div className="normalDisplay">
    <div className="nameOfComponent">
        <p>{props.compo_name}</p>
    </div>
    <div className="detailsOfComponent">
        <p >{props.ini_quantity}</p>
    </div>
    </div>

    let display1 = <div className="onClick">
    <div className="nameOfComponent">
      <p>{props.compo_name}</p>
   </div>
   <div className="onClick1">
      <div className="detailsOfComponentClick">
          <p className="initialQuantityClick">Initial Quantity:-{props.ini_quantity}</p>
          <p className="availableQuantityClick"> Availabe Quantity :- {avi_qyt} </p>
           <div className="sku">
              <p>SKU-01:- {props.sku01}</p>
              <p>SKU-02:- {props.sku02}</p>
              <p>SKU-03:- {props.sku03}</p>
            </div>

          <p className="lostClick">Detriment Qnt:- {det_qty}</p>
      </div>

  </div>
 </div>

    
    // const [name, setName] = useState("")
    const [isDisplay, setIsDisplay] = useState(true)

  
    return (
        
        <div className="Card" style={props.imgPath}  onMouseEnter={ () => {
            setIsDisplay(false)
            // console.log("I am clicked")
        }}  onMouseLeave={ () => {
            setIsDisplay(true)
            // console.log("I am clicked")
        }}>
            { (isDisplay) ? display : display1};
        </div>

        );
}

export default Card;