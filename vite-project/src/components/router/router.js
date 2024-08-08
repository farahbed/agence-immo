import "./App.css";
import { Routes, Route } from
 "react-router-dom";
 import acceuil from "./components/acceuil/acceuil";
 
 function App() {
   return (
     <div className="App">
       <Routes>
         <Route path="/" element={<acceuil />} />
       </Routes>
     </div>
   );
 }

 export default App;