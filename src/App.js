import {  BrowserRouter, Routes ,Route} from "react-router-dom";
import {useState , useEffect} from 'react';
import Navbar from "./Navbar";
import Home from './Home';
import  AddAlbum  from './AddAlbum';
import Update from './Update';


const App = () => {

  const [data , setData] = useState([]);

  useEffect(()=> {
     const url = 'https://jsonplaceholder.typicode.com/albums';

     fetch(url)
     .then(response => response.json())
     .then(data => {                               //this 'data' is the array of all fetched albums id and title .
        setData(data);
     });
  }, []);

  // const handleChangeInData = (newData) => {
  //   setData(newData);
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home data={data} setData={setData} />} />
          <Route path="/addAlbum" element={ <AddAlbum data={data} setData={setData}/>} />
          <Route path="/update/:id" element={ <Update data={data} setData={setData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
