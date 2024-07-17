import React from "react";
import "./Resources.css";

import BlogsImage from './Images/blogs_img2.png';
import BooksImage from './Images/book_reviews_img.png';
import YoutubeImage from './Images/yt_img2.png';
import ShareMarketImage from './Images/sharemarket_img2.png';

const Resources = () => {

    return (
        <div className="resources">
            <div className="header">
            <h1>Resources</h1>
            <p>Access the wealth of knowledge and tools in our resource library.</p>
            </div>
    
            <div className="resourcesbox">

                <div className="boxsmall" href="resources/blogs">
                    <div className="img">
                        <img src={BlogsImage} alt="Blogs" />
                    </div>
                    <div className="text">
                        <h2>Blogs</h2>
                        <p>Blogs offer a mix of academic insights and relatable student experiences, including stories on budgeting and financial decisions.</p>
                    </div>
                </div>
    
                <div className="boxsmall">
                    <div className="img">
                        <img src={BooksImage} alt="Book Reviews"/>
                    </div>
                    <div className="text">
                        <h2>Book Reviews</h2>
                        <p>Book reviews on Finance and Entrepreneurship delve into the latest literary treasures unlocking the secrets to wealth creation and business success.</p>
                    </div>
                </div>

                <div className="boxsmall">
                    <div className="img">
                        <img src={YoutubeImage} alt="Youtube Channels" />
                    </div>
                    <div className="text">
                        <h2>Youtube Channels</h2>
                        <p>Top youtube channels on finance, Bringing you expert insights, Investment strategies, Personal finance advice all in one convenient platform.</p>
                    </div>
                </div>
    
                <div className="boxsmall">
                    <div className="img">
                        <img src={ShareMarketImage} alt="Stock Market & Trading" />
                    </div>
                    <div className="text">
                        <h2>Stock Market & Trading</h2>
                        <p>Diverse collection of trading resources, Encompassing day trading, forex, cryptocurrency, to equip you with tools for succeeding in trading.</p>
                    </div>
                </div>

            </div>
        
        </div>

        
    );
};

export default Resources;