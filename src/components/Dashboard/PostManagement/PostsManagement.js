import React, { Component } from 'react';
import './PostsManagement.css';
import BarChart from '../../Charts/BarChart';
import LineChart from '../../Charts/LineChart';
//import {connect} from 'react-redux';

class PostsManagement extends Component {
    //https://s3-us-west-2.amazonaws.com/gaso1/godot-blogging.svg
    // https://www.peppercontent.io/static/0c6a00235c95566fb7daea97c6e9b75a/individual_writer.svg
    // https://pngimage.net/wp-content/uploads/2018/05/content-writing-png-8.png
    //https://www.aiidevelop.com.sg/wp-content/uploads/2020/06/content-writing-banner-vector_Artboard-12.png
    render() {
        return(
            <div className="d-container">
                Posts Management
            </div>
        )
    }
}

export default PostsManagement;