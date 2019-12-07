import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Menu from "./components/Menu";
import MovieMain from "./components/MovieMain";
import Released from "./components/Released";
import Scheduled from "./components/Scheduled";
import News from "./components/News";
import MovieDetail from "./components/MovieDetail";
class MovieApp extends Component{
    render() {
        return (
                <Router>
                    <div>
                    <Menu/>
                    <Switch>
                        <Route exact path={"/movie_home"} component={MovieMain}/>
                        <Route path={"/movie_released"} component={Released}/>
                        <Route path={"/movie_scheduled"} component={Scheduled}/>
                        <Route path={"/movie_news"} component={News}/>
                        <Route path={"/movie_detail/:no"} component={MovieDetail}/>
                    </Switch>
                    </div>
                </Router>
        )
    }
}
export default MovieApp