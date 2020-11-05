import React from 'react'
import './Body.css';
import Header from './Header';
import Banner from './Banner';
import IconLayer from './IconLayer';
import { useDataLayerValue } from "./DataLayer";
import Songs from './Songs';


export default function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    console.log("heyooo ",discover_weekly?.tracks?.items[0]?.track?.name);
    console.log("heyooo ",discover_weekly?.tracks?.items[0]?.track?.album?.images[0]?.url);
    return (
        <div className="body">
            <Header spotify={spotify}/>
            <Banner/>
            <IconLayer/>

            {discover_weekly?.tracks?.items.map((item) => (
                <Songs name={item?.track?.name} source={item?.track?.album?.images[0]?.url}/> 
            ))}

            
        </div>
    )
}
