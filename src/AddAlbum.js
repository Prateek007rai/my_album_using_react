import { Link } from 'react-router-dom';
import {useState } from 'react';


function AddAlbum(props) {

    const {data , setData} = props;
    const [message, setMessage] = useState('');


    const handleChange = (event) => {
        setMessage(event.target.value);
        console.log('------------' , message);
    };


    const albumAdded = () => {
        var arr = data;
      arr.push({
        id: arr.length + 1 ,
        title: message
    });
      setData(arr);
      console.log('======' , data , arr);
    }

    return (
        <div className="update-div">
            <Link to={'/'}> <img className='back-btn' src='https://cdn-icons-png.flaticon.com/128/2028/2028276.png' alt='back-btn'/> </Link>
            <div>
                <input type='text'
                 placeholder="Enter New Title ...." 
                 className="update-input" 
                 onChange={handleChange} 
                 value={message}/>
            </div>
            <div>  
                <Link to={'/'} >
                    <button className = 'album-added-btn' onClick={() => albumAdded()}>Add New Album</button>
                </Link>
            </div>
        </div>
    );
}

export default AddAlbum;