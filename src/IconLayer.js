import React from 'react'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import './IconLayer.css';

function IconLayer() {
    return (
        <div className="iconlayer">
            <PlayCircleFilledIcon className="body__shuffle layerIcon"/>
            <FavoriteIcon className="layerIcon" fontSize="large" />
            <MoreHorizIcon className="layerIcon" />
        </div>
    )
}

export default IconLayer
