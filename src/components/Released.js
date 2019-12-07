import React,{Component} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
/*
      React :
         1) 화면 UI 라이브러리  => render()
         2) 상태 (state=> 데이터) 관리
         3) 각컴포넌트마다 별도로 state를 관리 (컴포넌트와 컴포넌트의 데이터 전송 어렵다)
      Redux
        => state만 관리 (효율적인 관리)  ==> 필요한 데이터 한곳에 모아서
                                           모든 컴포넌트가 사용이 가능
                                           => store
                                           => 컴포넌트마다 => 이벤트 등록
                                              actions
                                           => 이벤트 처리 => state를 변경
                                               reducer
                                           => 전송
                                               dispatch
 */
class Released extends Component{
    // 데이터 => 저장 공간 ==> state
    constructor(props) {
        super(props);
        this.state={
            movie_data:[],
            page:1,
            total:0
        }
        // 이벤트 선언
        this.prevBtnClick=this.prevBtnClick.bind(this);
        this.nextBtnClick=this.nextBtnClick.bind(this);
    }
    prevBtnClick(e){
        //e.preventDefault()
        this.state.page=this.state.page>1?Number(this.state.page)-1:this.state.page
        //this.setState({page:this.state.page>1?Number(this.state.page)-1:this.state.page})
        this.post(e)
    }
    nextBtnClick(e){
        //e.preventDefault()
        //this.setState({page:this.state.page<this.state.total?Number(this.state.page+1):this.state.page})
        this.state.page=this.state.page<this.state.total?Number(this.state.page+1):this.state.page
        this.post(e)
    }
    post(e){
        //e.preventDefault()

        var _this=this
        // /released?page=1 aa
        axios.get('http://localhost:3355/released',{
            params:{
                page:_this.state.page
            }
        }).then(function (response) {
            _this.setState({movie_data:response.data})
        })

       /* axios.get("http://localhost:3355/total").then(function (response) {
            _this.setState({total:response.data.total})
        })*/

    }
    componentDidMount() {
        var _this=this
        // /released?page=1 aa
        axios.get('http://localhost:3355/released',{
            params:{
                page:_this.state.page
            }
        }).then(function (response) {
            _this.setState({movie_data:response.data})
        })

        axios.get("http://localhost:3355/total").then(function (response) {
            _this.setState({total:response.data.total})
        })
    }

    render() {
        const html=this.state.movie_data.map((m)=>
            <div className="col-md-3">
                <div className="thumbnail">
                    <NavLink to={"/movie_detail/"+m.no}>
                        <img src={m.poster} alt="Lights" style={{"width":"200","height":"250"}}/>
                            <div className="caption">
                                <p>{m.title.substring(0,13)}</p>
                            </div>
                    </NavLink>
                </div>
            </div>
        )
        return (
            <React.Fragment>
            <h1 className={"text-center"}>현재 상영 영화</h1>
                <div className={"row"} style={{"margin":"0px auto","width":"960px"}}>
                    {html}
                </div>
                <div className={"row text-center"}>
                  <input type={"button"} className={"btn btn-lg btn-primary"}
                         value={"이전"} onClick={this.prevBtnClick}/>
                    {this.state.page} page / {this.state.total} pages
                    <input type={"button"} className={"btn btn-lg btn-success"}
                           value={"다음"} onClick={this.nextBtnClick}/>
                </div>
            </React.Fragment>
        )
    }
}
export default Released