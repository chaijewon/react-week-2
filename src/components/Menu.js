import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class Menu extends Component{
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Movie Site</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink exact to={"/movie_home"}>Home</NavLink></li>
                        <li><NavLink to={"/movie_released"}>현재상영</NavLink></li>
                        <li><NavLink to={"/movie_scheduled"}>개봉예정</NavLink></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">박스오피스<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">주간</a></li>
                                <li><a href="#">월간</a></li>
                                <li><a href="#">연간</a></li>
                            </ul>
                        </li>
                        <li><a href="#">예매</a></li>
                        <li><NavLink to={"/movie_news"}>뉴스</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu