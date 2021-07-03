import React from 'react';

const PostListItem = ({postData}) => {
    const renderStatus = () => {
        let statusIcon;
        switch(postData.status) {
            case 'Published' : statusIcon = <i className="fas fa-check-circle"></i>;
                               break;
            case 'Ready' : statusIcon = <i className="fa fa-circle"></i>;
                               break;
            case 'Draft' : statusIcon = <i className="fas fa-pen-square"></i>;
                               break;
            default : statusIcon = <i className="fa fa-circle"></i>;
                            
        }
        return (
            <div className={"post-item-cell post-status post-status-"+postData.status.toLowerCase()}>
                <div className="post-item-status">
                    {statusIcon}
                    <span>&nbsp;&nbsp;{postData.status}</span>
                </div>
                <div className="mobile-container">
                    <div id="post-item-mobile-actions">
                        <i className="fa fa-edit"></i>
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
                
            </div>
        )
    }
    
    return (
            <div className="post-list-item">
                {renderStatus()}
                <div className="post-item-details">
                    <div className="post-item-featured-image">
                        <img src="https://s3-us-west-2.amazonaws.com/gaso1/godot-blogging.svg"/>
                    </div>
                    <div>
                        <h2>{postData.title}</h2>
                        <p>This is something I dont know</p>
                    </div>
            
                </div>
                <div className="post-item-cell font-bold post-item-btns">
                    <button className="post-publish-btn">Unpublish</button>
                    <button className="post-unpublish-btn">Preview</button>
                </div>
                <div className="post-item-cell post-item-actions">
                    <i className="fa fa-edit post-item-edit"></i>
                    <i className="fa fa-trash post-item-delete"></i>
                </div>
            </div>
    )
}

export default PostListItem;