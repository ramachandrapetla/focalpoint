import React from 'react'
import './PostHero.css';
import moment from 'moment';

const PostHero = ({postTitle, postAuthor, postDate, featuredImage, postCategories}) => {
    return (
        <div class="post-hero">
            <div className="hero-inner">
                <div className="hero-feature-image-wrapper">
                    <div className="hero-feature-image">
                        <img className="featuredImage" src={featuredImage.name} alt="post featured"/> 
                    </div>
                </div>
                <div className="hero-header">
                    <header>
                        <h1 className="hero-title">{postTitle}</h1>
                        <p className="post-author">
                            <i className="fas fa-at"></i>
                            {`${postAuthor.firstname} ${postAuthor.lastname}`}
                            <br/><br/>
                            <i class="fas fa-calendar-alt"></i>
                            <span className="date">
                                {
                                    moment(postDate).format('MMMM Do YYYY')
                                }
                            </span>
                        </p>
                        <div className="categories-container">
                            {
                                postCategories.map((category, index) => {
                                    return <div key={index} className={category.categoryName.toLowerCase()+'-category'}>{category.categoryName}</div>
                                })
                            }
                        </div>
                    </header>
                </div>
            </div>    
        </div>
    )
}

export default PostHero;