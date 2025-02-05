import RestoCard from "./RestaurentCard"
import { useState } from "react"
import restData from "../utils/restData"

const Body=()=>{
    const [listOfRestaurent,setListOfRestaurent]=useState(restData)
    const [searchText,setSearchText]=useState("");
    const filterRestaurent=()=>{
        const filteredData=listOfRestaurent.filter(restaurent=>
            restaurent.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setListOfRestaurent(filteredData)
    }
    
    return (
        <div className='body'>
            <div className='search'>
                <input type="text" placeholder="Enter Restaurent name" className="search-bar" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                <button className="search-btn" onClick={filterRestaurent}>Search</button>
            </div>
            <div className='card-container'>
        {listOfRestaurent.map(restaurent=><RestoCard key={restaurent.info.id} restaurentData={restaurent}/>)}
            </div>
        </div>
    )
}

export default Body