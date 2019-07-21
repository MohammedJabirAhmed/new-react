import React from "react";
import "./styles/newsListItemStyles.css";

const NewsListItem =()=> {
    return (
        <div className="parentContainer">
            <div className="mainContainer">
            <img src="https://bitcoinist.com/wp-content/uploads/2019/06/shutterstock_768532498.png"
            width="125px"
            height="125px"
            />

                <div className="textWrapper">
                <p className="newsTitle">
                "title": "Bitcoin Retests $11k But Remains in ‘the Chop Zone’",


                </p>
                <p className="newsDescription">
                "description": "Crypto markets have been relatively flat this weekend but bitcoin has made it back to the $11,000 level, albeit very briefly. The altcoin market has been slowly shifting but weekend activity has been poor for many of them. Bitcoin Returns to $11K BTC returned…",

                </p>
                <p>-tech2 News Staff</p>

                </div>
            </div>
        </div>
    )
}

export default  NewsListItem;