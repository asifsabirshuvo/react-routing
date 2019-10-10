
import React, {useState, useEffect} from 'react';
import './App.css';
function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const APP_ID = '43992b09';
        const APP_KEY = '531078582b665814fe2db1641c992cec';
        
        const data = await fetch(`https://api.edamam.com/search?q="chicken"&app_id=${APP_ID}&app_key=${APP_KEY}`);

        const items = await data.json();
        console.log(items);
        setItems(items.hits); //because hits is an array

    }

    return (
    <div>
            {items.map(item => (
                <div className="item-parent">
                    <h1 key={item.recipe.label}>
                            {item.recipe.label}
                    </h1>
                    <img src={item.recipe.image} alt=""></img>     
                    </div>

        ))}    
    </div>
  );
}

export default Shop;
