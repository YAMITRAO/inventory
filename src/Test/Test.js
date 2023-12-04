import "./Test.css"


function Test(){
    const data = [
      {
        name:"Arduino",
        int_qun: 30,
        path: { 
          backgroundImage: `url("https://i.postimg.cc/zv1ZPPKg/ardu.jpg")`,
           
        }
      }
    ]

    return(
      <div className="Card" style={data[0].path} >
      <div className="nameOfComponent">
          <p>{data[0].name}</p>
         
      </div>
      <div className="detailsOfComponent">
          {/* <div className="onHover"><p className="initialQun">Initial: 1000</p>
          <p >Avilable: 400</p></div> */}
          <p >{data[0].int_qun}</p>
      </div>
  </div>
    )
}

export default Test;