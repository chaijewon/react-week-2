import React,{Component} from 'react'

class Menu extends Component{
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Movie Site</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">현재상영/개봉예정</a></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">박스오피스<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">주간</a></li>
                                <li><a href="#">월간</a></li>
                                <li><a href="#">연간</a></li>
                            </ul>
                        </li>
                        <li><a href="#">예매</a></li>
                        <li><a href="#">뉴스</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu