import "./InventoryDetails.css"
import { useState } from "react";

function InventoryDetails(props){

    const [valueBack, setValueBack] = useState("All")

    let data = props.dataToinventoryDetails;

    let TotalQuantity = 0
    for(let i=0; i<data.length;i++){
        TotalQuantity+=data[i].initial_quantity
    }


    const [categoryDisplay, setCategoryDisplay] = useState("All");


    let selectionItemForP1 = <div>
        <span className="spanCategory">Category</span>
    <select  value= {valueBack} onChange={(e) => {
        props.onFilterCategory(e.target.value);
        setValueBack(e.target.value);
       }}>
        <option>All</option>
        <option>Microcontroller</option>
        <option>Display</option>
        <option>Sensor</option>
        <option>Prototype</option>
        <option>Development</option>
        <option>Cables</option>
        <option>Power</option>
        <option>Ic&Component</option>
        <option>Communication</option>
        <option>Actuator</option>
        <option>STEM Kits</option>
       </select>
       </div>

       const selectionItemForP2 = 
       <div>
        <span className="spanCategory">Category</span>
       <select value={valueBack}  onChange={(e) => {
        // console.log(e.target.value);
        props.onFilterCategory(e.target.value)
        setValueBack(e.target.value);

       }}>
        
        <option>All</option>
        <option>Rapid Prototyping Tools</option>
        <option>Arts and Crafts</option>
        
       </select>
       </div>

const selectionItemForP3 = 
<div>
 <span className="spanCategory">Category</span>
<select value={valueBack}  onChange={(e) => {
 // console.log(e.target.value);
 props.onFilterCategory(e.target.value)
 setValueBack(e.target.value);

}}>
 
 <option>All</option>
 <option>Mechanical Tools</option>
 <option>Electric Tools</option>
 <option>Measurement Tools</option>
 <option>Extra Kits</option>
 
</select>
</div>

const selectionItemForP4 =
<div>
 <span className="spanCategory">Category</span>
<select value={valueBack}  onChange={(e) => {
 // console.log(e.target.value);
 props.onFilterCategory(e.target.value)
 setValueBack(e.target.value);

}}>
 
 <option>All</option>
 <option>Accessories</option>
 <option>Safety Equipments</option>
 
</select>
</div>


 const selectionItemForNone = <div>
    
        <span className="spanCategory">Category</span>
    <select  value={valueBack} onChange={(e) => {
        props.onFilterCategory(e.target.value);
        setValueBack(e.target.value);
       }}>
        <option>All</option>
        <option>Microcontroller</option>
        <option>Display</option>
        <option>Sensor</option>
        <option>Prototype</option>
        <option>Development</option>
        <option>Cables</option>
        <option>Power</option>
        <option>Ic&Component</option>
        <option>Communication</option>
        <option>Actuator</option>
        <option>STEM Kits</option>
        <option>Rapid Prototyping Tools</option>
        <option>Arts and Crafts</option>
        <option>Mechanical Tools</option>
        <option>Electric Tools</option>
 <option>Measurement Tools</option>
 <option>Extra Kits</option>
 <option>Accessories</option>
 <option>Safety Equipments</option>
       </select>
       </div>


  

       
       

    return(
        <div className="InventoryDetailsContainer">
          
          <div className={props.viewdetails.filterclass}>
                <div className="filter">
                  <span className="spanPackage">Package </span> 
                   <select onChange={(e) => {
                    // console.log(e.target.value)
                    props.onFilterPackage(e.target.value);
                    setCategoryDisplay(e.target.value);
                    props.onFilterCategory("All");
                    setValueBack("All");


                   }}>
                    <option>All</option>
                    <option>P1</option>
                    <option>P2</option>
                    <option>P3</option>
                    <option>P4</option>
                    
                    {/* <option>Extra</option> */}
                   </select><br/>
                   
                   {/* <span className="spanCategory">Category</span> */}
                   {(categoryDisplay === "P1") ? selectionItemForP1 : (categoryDisplay === "P2") ? selectionItemForP2 : (categoryDisplay === "P3") ? selectionItemForP3 : (categoryDisplay === "P4") ? selectionItemForP4 : selectionItemForNone}
                   
                  

                </div>
            </div>
          
            <div className = {props.viewdetails.detailclass}>
                <p>Total Items :- {data.length}</p>
                <p>Quantity- {TotalQuantity}</p>
               
            </div>
            
        </div>
    );
}

export default InventoryDetails;