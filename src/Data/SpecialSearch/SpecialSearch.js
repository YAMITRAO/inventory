import './SpecialSearch.css'


function SpecialSearch(props){

    return (
        <>
        <div className='specialSearch'>
            <p>Deep Dive</p>
          <select onChange={(e) =>{ 
            props.onSpecialSearch(e.target.value)
            
            }}>
            <option>Select</option>
            <option>Cancle</option>
          </select>
        </div>
        </>
    );

}

export default SpecialSearch;