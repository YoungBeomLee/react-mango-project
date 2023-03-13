import {Routes,Route} from 'react-router-dom';
import './component/MainPage.css';
import MainPage from './component/MainPage';
import  "antd/dist/reset.css";
import UploadPage from './component/UploadPage';
import ProductPage from './component/ProductPage';
import  Header  from "./component/Header";
import  Footer  from "./component/Footer";



function App() {
  
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}> </Route>
      <Route path="/ProductPage/:id" element={<ProductPage/>}> </Route>
      <Route path="/UploadPage" element={<UploadPage/>}> </Route>
    </Routes>
    <Footer/>
    
    </div>
      
   
    
  );
}

export default App;
