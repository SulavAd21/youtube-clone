import React, { useEffect, useState } from 'react'
import './feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'



const Feed = ({ category }) => {

    const [data, setData] = useState([])
    const fetchData = async () => {
        const videoListUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2ContentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=%${API_KEY}`
        try {
            const response = await fetch(videoListUrl)
            const videoList = await response.json()

            setData(videoList.items)

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchData()

    }, [category])



    return (
        <div className="feed">
            <Link to={'/vide/20/4521'} className='card'>
                <img src={thumbnail1} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </Link>
            <div className='card'>
                <img src={thumbnail2} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail1} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail2} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail3} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail4} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail5} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail6} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail7} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
            <div className='card'>
                <img src={thumbnail8} alt="" />
                <h2>Travel Vlogs - Outback Australia</h2>
                <h3>Sulav Adhikari</h3>
                <p>15k views &bull; 2 days ago</p>
            </div>
        </div>

    )
}

export default Feed