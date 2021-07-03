import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component { 
    constructor(props) {
        super(props);
        this.renderDashBoardItems = this.renderDashBoardItems.bind(this);
    }

    renderDashBoardItems() {
        const dashBoardNavItems = [
            {
                name: 'Dashboard',
                classList: 'sidebar__link',
                iconClass: 'fa fa-home',
                navId: 'dashboard'
            },
            {
                name: 'New Post',
                classList: 'sidebar__link',
                iconClass: 'fas fa-plus',
                navId: 'newpost'
            },
            {
                name: 'Posts Management',
                classList: 'sidebar__link',
                iconClass: 'fas fa-newspaper',
                navId: 'postsmanagement'
            },
            {
                name: 'Profile',
                classList: 'sidebar__link',
                iconClass: 'fas fa-user-circle',
                navId: 'profile'
            },
            {
                name: 'Settings',
                classList: 'sidebar__link',
                iconClass: 'fa fa-cog',
                navId: 'settings'
            }
        ]

        const activeTab = this.props.active ? this.props.active : 'dashboard';

        return dashBoardNavItems.map((item, index) => { 
            if(item.navId === activeTab) {
                item.classList = "sidebar__link active_menu_link";
            }
            return <div key={index} className={item.classList} onClick={(e) => this.props.handleNavClick(e, item.navId)}>
                        <i className={item.iconClass}></i>
                        <a href="#">{item.name}</a>
                    </div>
        })
    }


    render() {
        return (
            <div className="sidebar-container" id="sidebar">
                <div className="sidebar__menu" >
                    {this.renderDashBoardItems()}
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>    
            </div>
        )
    }
}

export default Sidebar;