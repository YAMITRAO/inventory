import Card from "../Card/Card";
import List from "../Card/List";
import InventoryDetails from "../InventoryDetails/inventoryDeatils";
import "./InventoryItems.css"


function InventoryItems(props){
  // console.log(props.viewstyle)

    return(
        <>
      
    <div className="container">
      
      {(props.viewstyle == "Card View") ? props.dataToInventoryItems.map((value,index)=>{
        return <Card imgPath={value.path} compo_name = {value.name} ini_quantity = {value.initial_quantity} path={value.url}     key ={index} sku01={value.available_Quantity.sku01} sku02={value.available_Quantity.sku02} sku03 = {value.available_Quantity.sku03}></Card>
      }): props.dataToInventoryItems.map((value,index)=>{
        return <List imgPath={value.path} compo_name = {value.name} ini_quantity = {value.initial_quantity} path={value.url}     key ={index} sku01={value.available_Quantity.sku01} sku02={value.available_Quantity.sku02} sku03 = {value.available_Quantity.sku03}></List>
      }) }
    </div>
    

        </>
    );
}

export default InventoryItems;