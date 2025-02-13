import RestoCard from "./RestaurentCard"
import { useEffect, useState } from "react"
import Shimmer from "./shimmer"
const Body=()=>{
    const [listOfRestaurent,setListOfRestaurent]=useState([])
    const [filteredRestaurents,setFilteredRestaurent]=useState([])
    const [searchText,setSearchText]=useState("");
    const filterRestaurent=()=>{
        const filteredData=listOfRestaurent.filter(restaurent=>
            restaurent.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setFilteredRestaurent(filteredData)
    }

    useEffect(()=>{
        fecthData()
    },[])
    const fecthData=async ()=>{
        const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4919733&lng=78.54691969999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json=await data.json();
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    return listOfRestaurent.length===0 ? <Shimmer />:(
        <div className='body'>
            <div className='search'>
                <input type="text" placeholder="Enter Restaurent name" className="search-bar" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                <button className="search-btn" onClick={filterRestaurent}>Search</button>
            </div>
            <div className='card-container'>
        {filteredRestaurents.map(restaurent=><RestoCard key={restaurent.info.id} restaurentData={restaurent}/>)}
            </div>
        </div>
    )
}

export default Body