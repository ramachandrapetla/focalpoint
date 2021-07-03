import React, { Component } from 'react';


import './PostsManagement.css';
import PostListItem from './PostListItem';
//import {connect} from 'react-redux';

class PostsManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postData: [
                {
                    title: 'Fill Your Big Fat Bellies',
                    postedOn: '10-12-2021',
                    author: 'Ramachandra',
                    postId: '1234567890',
                    status: 'Published'
                },
                {
                    title: 'Fill Your Big Fat Bellies',
                    postedOn: '10-12-2021',
                    author: 'Ramachandra',
                    postId: '1234567890',
                    status: 'Draft'
                }
            ],
            filter: '',
        }
        this.filterData = this.filterData.bind(this);
    }

    filterData(e) {
        this.setState({filter : e.target.value});
    }


    render() {
        return(
            <div className="d-container">
                <h2>POSTS MANAGEMENT</h2>
                <p className="font-bold sub-text">Manage your posts here. You can make any post active or inactive, can edit post data and delete posts as required.</p>
                
                <div>
                    <div className="fiter-container">
                        <input className="posts-search-field" type="text" placeholder="Search with post title" onChange={this.filterData}/>
                        <select className="post-status-filter" onChange={this.filterData}>
                            <option value="all" selected>
                                All
                            </option>
                            <option value="published">
                                Published
                            </option>
                            <option value="draft">
                                Draft
                            </option>
                            <option value="ready">
                                Ready
                            </option>
                        </select>
                    </div>
                    <div className="posts-container">
                        
                        {this.state.postData.filter(item => {

                            if(item.title.includes(this.state.filter)){
                                return true;
                            }
                            return false;
                        }).map(item => {
                            return <PostListItem postData = {item}/>
                        })}
                        

                    </div>
                </div>

                <div className="paginationWrapper">
                    <ul className="crumbs">
                        <li className="crumb prev-crumb">Prev</li>
                        <li className="crumb next-crumb">Next</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PostsManagement;