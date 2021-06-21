import React from 'react';
import SideBar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './Dashboard.css';
import queryString from 'query-string';

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {pageView : 'dashboard'}
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search, { ignoreQueryPrefix: true });
        console.log(parsed);
        console.log(parsed.pageview);
        if(parsed.pageview !== null || parsed.pageview !== "") {
            this.setState({pageView : parsed.pageview});
        }
    }

    handleNavClick(e, pageView) {
        e.preventDefault();
        this.setState({pageView : pageView});
        this.props.history.push({
            pathname: '/dashboard',
            search: '?'+ new URLSearchParams({pageview : pageView}).toString()
        });
    }

    render() {
        return(
            <div className='dashboard-container'>
                <SideBar handleNavClick={this.handleNavClick} active={this.state.pageView}/>
                <Main pageView={this.state.pageView}/>
            </div>
        )
    }

}

export default Dashboard;