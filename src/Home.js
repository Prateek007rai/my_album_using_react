
import { Link } from 'react-router-dom';

const Home = (props) => {

    const {data ,setData} = props ;

    // ///////////////////////////Sort the Data ////////////////////////////////////
  const sortTheData = (arr) => {
    var i = 1 ;
  arr.forEach(element => {
    element.id = i ;
    i++;
  });
}

/////////////////////////////Delete the Data /////////////////////////////////////
const deleteData = (id) => {
    const arr = data.filter((item) => (item.id !== id));
    setData(arr);
    sortTheData(arr);
}

    return (
        <div className="home">
            {data.map((item)=>(
                <div className='item-div'>
                    <span className='item-id'>{item.id}</span>
                    <span className='item-title'>{item.title}</span> 
                    <div className='item-fun'>
                    <Link to={`/update/${item.id}`} > <button className='update'> Update</button> </Link>
                    <button className='delete' onClick={() => deleteData(item.id)}> Delete </button>
                    </div>    
                </div>       
            ))}
        </div>
    );
}


export default Home;