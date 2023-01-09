import { Link, useParams } from 'react-router-dom';
import {useState } from 'react';


function Update(props) {

    const {id} = useParams();
    const {data , setData} = props;
    const [message, setMessage] = useState('');


       // ///////////////////////////Input field value ////////////////////////////////////
    const handleChange = (event) => {
        setMessage(event.target.value);
        console.log('------------' , message);
    };


    
    // ///////////////////////////updated the Data ////////////////////////////////////
    
    const updated = () => {
      data[id-1].title = message ;
      setData(data);
      console.log('_data_________' , data  );
    }

    return (
        <div className="update-div">
            <Link to={'/'}> <img className='back-btn' src='https://cdn-icons-png.flaticon.com/128/122/122637.png' alt='back-btn'/> </Link>
            <div>
                <input type='text'
                 placeholder="Enter New Title ...." 
                 className="update-input" 
                 onChange={handleChange} 
                 value={message}/>
            </div>
            <div>  
                <Link to={'/'} >
                    <button className = 'updation-btn' onClick={() => updated(id)}>Update</button>
                </Link>    
            </div>
        </div>
    );
}

export default Update;