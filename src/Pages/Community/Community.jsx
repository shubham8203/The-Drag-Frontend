import React ,{useContext}from 'react'
import bundeli from '../../assets/bundeli.png'
import DragContext from '../../Context/Dragcontext'
import Card from '../../components/card/Card';
import './Community.css'
const Community = () => {
    const {communities}=useContext(DragContext);
  return (
    <div className='community-container'>
    <div className='community-carousel'>
        <img src={bundeli} alt="" />
    </div>
    <div className="community-list">
        <h2>Our Communities</h2>
        <div className="community-list-items">
            {
              communities.map((item)=>{
              return <Card item={item}/>
              })
            }
        </div>
    </div>
      
    </div>
  )
}

export default Community
