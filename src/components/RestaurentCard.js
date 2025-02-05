
import { CDN_RESTURL } from "../utils/server"

const RestoCard=(props)=>{
    const {name,avgRating,cuisines,sla,cloudinaryImageId
    }=props.restaurentData.info
  return (
    <div className='resto-card'>
        <img className='res-logo' src={CDN_RESTURL+cloudinaryImageId}></img>
                <h2>{name}</h2>
                <h5>{cuisines.join(',')}</h5>
                <h5>{avgRating}</h5>
                <h5>{sla.deliveryTime}</h5>
    </div>
  )
}

export default RestoCard