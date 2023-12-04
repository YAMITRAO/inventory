import "./List.css";

export default function List(props){

    let avi_qty = props.sku01 + props.sku02 + props.sku03;
    let det_qty = props.ini_quantity - avi_qty;

    return (
        <>
        <div className="listContainer">
            <div className="listName">{props.compo_name}</div>
            <div className="listLine">--</div>
            <div className="listIntQty">Initial Quantiity
                <div>{props.ini_quantity}</div>
            </div>
            <div className="listLine">__</div>

            <div className="listAviQty">Available Quantity
                <div>{avi_qty}</div>
            </div>
            <div className="listLine">--</div>

            <div className="listDetQty">Detriment Qnt
                <div>{det_qty}</div>
            </div>

        </div>
        </>
    );

}