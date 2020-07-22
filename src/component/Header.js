import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Header.css';
import Home from '../containers/Home';
import About from '../containers/About';
import Posts from '../containers/Posts';

// 아래 중요!
const MenuItem = ({children, to}) => (
    <Link className="menu-item" to={to}>
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <Router>
                <div className="logo">
                    GoodMan
                </div>
                    <div className="menu">
                        <Link className="menu-item" to="/">홈</Link>
                        <Link className="menu-item" to="/About">소개</Link>
                        <MenuItem to="/Posts">포스트</MenuItem>
                    </div>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/About' component={About} />
                        <Route path='/Posts' component={Posts} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default Header;