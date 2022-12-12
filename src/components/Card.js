import React from "react";
// import image from "../images/katie-zaferes.png";
// import star from "../images/star.png";

export default function Card(props) {
    let badgeText
    if (props.ele.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.ele.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.ele.coverImg}`} className="card--image"></img>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.ele.stats.rating}</span>
                <span className="gray">({props.ele.stats.reviewCount}) •</span>
                <span className="gray">{props.ele.location}</span>
            </div>
            <p>{props.ele.title}</p>
            <p><span className="bold">From ${props.ele.price}</span> / person</p>
        </div>
    )
}