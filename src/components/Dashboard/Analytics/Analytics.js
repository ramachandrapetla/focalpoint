import React, { Component } from 'react';
import './Analytics.css';
import BarChart from '../../Charts/BarChart';
import LineChart from '../../Charts/LineChart';
//import {connect} from 'react-redux';

class Analytics extends Component {
    //https://s3-us-west-2.amazonaws.com/gaso1/godot-blogging.svg
    // https://www.peppercontent.io/static/0c6a00235c95566fb7daea97c6e9b75a/individual_writer.svg
    // https://pngimage.net/wp-content/uploads/2018/05/content-writing-png-8.png
    //https://www.aiidevelop.com.sg/wp-content/uploads/2020/06/content-writing-banner-vector_Artboard-12.png
    render() {
        return(
            <div className="d-container">
                <div className="welcome-wrapper">
                    <img src="https://s3-us-west-2.amazonaws.com/gaso1/godot-blogging.svg" />
                    <div>
                        <h1>Hello Ramachandra Petla</h1>
                        <p>Welcome to your Admin Dashboard</p>
                    </div>
                </div>
                <div>
                    <h2>STATS</h2>
                    <div className="statistics-wrapper">
                    <div className="card">
                        <i class="fas fa-blog fa-2x card-icon"></i>
                        <div className="card_inner">
                            <p className="card-desc">Number of Subscribers</p>
                            <span className="font-bold card-value">657</span>
                        </div>
                    </div>

                    <div className="card">
                        <i class="fas fa-blog fa-2x card-icon"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Views</p>
                            <span className="font-bold text-title">657</span>
                        </div>
                    </div>

                    <div className="card">
                        <i class="fas fa-blog fa-2x card-icon"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">No of Something</p>
                            <span className="font-bold text-title">657</span>
                        </div>
                    </div>
                    
                </div>
                </div>
                <div className="charts-container">
                    <h2 className="section-title">ANALYTICS</h2>
                    <div className="charts-grid">
                        <BarChart />
                        <LineChart />
                    </div>
                </div>
                
            
            </div>
        )
    }
}

export default Analytics;