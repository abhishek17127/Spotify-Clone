import React from 'react'
import { useDataLayerValue } from "./DataLayer";
import './Banner.css';

function Banner() {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="banner">
            <img src="https://newjams-images.scdn.co/v2/discover-weekly/mMBJ8cCJwUoLijQQXguVOP8gAP-SeppptUCaobIxtFO2jESv1_FI04uXnzJr_MxHvaQnNz6Kxsi9wPnBi9MCst84zZhaNQHT5hRgOv5aBcMRWBgo_xXBgBMhY4xr2tOnM3iVCIKVG5vyRwbJbwG4On0VwFVFhwwMVIjWF4k7-M-VRkZZ6t6VxalfW0UZMVaSMvYs_hZY7P2nMXatS6ixh_J9rcgLL13M9-__oUNtOF3RUfhk57qdLO6-Q72ne53uVdBqAVkhjmJy6-3_pyIg6ou18MN0IgB5EFh4GWSwbNdMNH42bPOojdaJZCsJVOuR_M7Xa4opQbLxisBoFdjAsvt5CaN8bdOl5C3z3f0Tsr0=/MzM6MjE6OTBUOTAtMTEtMA==/default" alt=""/>
            <div className="banner_content">
                <p>PLAYLIST</p>
                <h2>Discover Weekly</h2>
                <p>Your weekly mixtape of fresh music and daaa cuts picked for you. Updates every Monday.</p>
            </div>
        </div>
    )
}

export default Banner
