import React,{Component } from "react";
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class MovieDetail extends Component{
    constructor(props) {
        super(props);
        this.state={
            detail_data:{}
        }

    }
    componentDidMount() {
        var _this=this
        axios.get('http://localhost:3355/detail',{
            params:{
                no:this.props.match.params.no
            }
        }).then(function (response) {
            _this.setState({detail_data:response.data[0]})
        })
    }

    render() {
        var m=this.state.detail_data
        //var p=String(m.poster)
        //p=p.substring(0,p.indexOf(")"))
        return (
            <React.Fragment>
              <div className={"row"} style={{"margin":"0px auto","width":"960px"}}>
                <h1 className={"text-center"}>{m.title} 상세보기</h1>
                <iframe src={"http://youtube.com/embed/"+m.key} width={"800"} height={"450"}></iframe>
              </div>
              <div className={"row"} style={{"margin":"0px auto","width":"960px"}}>
                  <table className={"table"}>
                      <tbody>
                        <tr>
                            <td width={"30%"} className={"text-center"}
                                rowSpan={"6"}>
                                <img src={m.poster}/>
                            </td>
                            <td width={"70%"}>{m.title}</td>
                        </tr>
                        <tr>
                            <td>장르:{m.genre}</td>
                        </tr>
                        <tr>
                            <td>개봉:{m.regdate}</td>
                        </tr>
                        <tr>
                            <td>감독:{m.director}</td>
                        </tr>
                        <tr>
                            <td>출연:{m.actor}</td>
                        </tr>
                        <tr>
                            <td>등급:{m.grade}</td>
                        </tr>
                      </tbody>
                  </table>
              </div>
                {/* background-color: #E6E6FA;
                    padding:10px;
                    overflow: auto;
                    white-space: pre-wrap;*/}
                <div className={"row"} style={{"margin":"0px auto","width":"960px"}}>
                    <pre style={{"backgroundColor":"#E6E6FA",
                        "padding":"10px","overflow":"auto",
                        "whiteSpace":"pre-wrap"}}>{m.story}</pre>
                </div>
                <div className={"row"} style={{"margin":"0px auto","width":"960px"}}>
                  <NavLink to={"/movie_released"} className={"btn btn-sm btn-danger"}>목록</NavLink>
                </div>

            </React.Fragment>
        );
    }
}
export default MovieDetail

