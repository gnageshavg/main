import './App.css';
import './key';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query,setquery] = useState("");
  const [recipes, setrecipes]=useState([]);
  const [healthlabels, sethealthlabels]=useState("vegan")

  const YOUR_APP_ID= "776fa18a";
  const YOUR_APP_KEY="087e2c4b3b2796581d1ea80a19aa42c4"
 
  var url=`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=${healthlabels}`;
    
 async function getRecipes(){
      var result= await Axios.get(url);
      setrecipes(result.data.hits)
      console.log(result.data)
 }

 const onSubmit=(e)=> {
     e.preventDefault();
     getRecipes();
 }
 
 return (
   <div className='app'>
    <h1>This is Food Recipe</h1>
   
   <form className='app_searchForm' onSubmit={onSubmit}>
    <input type="text"
    className='app_input'
     placeholder="enter ingrident" 
     value={query} 
     onChange={(e)=>setquery(e.target.value)}/>
     <input className="app_submit" type="submit" value="search"/>

     <select className='app_healthlabels'>
      <option value="vegan" onClick={()=>sethealthlabels("vegan")}>Vegan</option>
      <option value="vegeterian" onClick={()=>sethealthlabels("vegan")}>Vegetarian</option>
      <option value="paleo" onClick={()=>sethealthlabels("vegan")}>paleo</option>
      <option value="biryani" onClick={()=>sethealthlabels("vegan")}>biryani</option>
      <option value="chicken" onClick={()=>sethealthlabels("vegan")}>Chicken</option>
      <option value="dairy-free" onClick={()=>sethealthlabels("vegan")}>Dairy-free</option>
      <option value="wheat-free" onClick={()=>sethealthlabels("vegan")}>wheat-free</option>
      <option value="low-sugar" onClick={()=>sethealthlabels("vegan")}>low-sugar</option>
      <option value="Egg-free" onClick={()=>sethealthlabels("vegan")}>Egg-free</option>
     
     </select>
    </form>
    <div className='app_recipes'>
        {recipes.map((recipe) =>{
         return <RecipeTile recipe={recipe} />;
        })}
    </div>
   </div>
  );
}

export default App;
