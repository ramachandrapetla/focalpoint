import React, { Component } from 'react';
import Settings from '../Settings/Settings';
import PostsManagement from '../PostManagement/PostsManagement';
import Footer from '../../Footer/Footer';
import './Main.css';

class Main extends Component { 
    constructor(props) {
        super(props);
        this.renderMainPane = this.renderMainPane.bind(this);
    }

    renderMainPane() {
        switch(this.props.pageView) {
            case 'dashboard' : return <Settings />
            case 'postsmanagement' : return <PostsManagement />
            default: return <Settings />
        }
    }

    render() {
        
        return (
            <div className="main-container" >
                {this.renderMainPane()}
                <Footer />
            </div>
        )
    }
}
export default Main;