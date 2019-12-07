import React,{Component,Fragment} from 'react'
import axios from 'axios'
// 서버연결 => 데이터 읽기
// axios / fetch
class News extends Component{
    // 데이터 받기 => state
    constructor(props) {
        super(props);
        this.state={
            news_data:[],
            news_pop:[]
        }
    }
    // this => 자신의 객체 주소(News)
    // super => 상위 클래스 (Component)
    componentDidMount() {
        var _this=this;
        axios.get('http://localhost:3355/news').then(function (response) {
            _this.setState({news_data:response.data})
            // response : header,data
        })
        axios.get('http://localhost:3355/news_pop').then(function (response) {
            _this.setState({news_pop:response.data}) // ==> render()
            // response : header,data
        })
    }

    render() {
        // //img~~/.jpg);
        const newsHtml=this.state.news_data.map((m)=>
          <table className={"table"}>
              <tbody>
              <tr>
                  <td width={"30%"} className={"text-center"} rowSpan={"3"}>

                      <img src={m.poster.substring(0,m.poster.lastIndexOf(")"))} width={"100%"}/>
                  </td>
                  <td className={"text-center"}>
                      <a href={m.link}>{m.title}</a>
                  </td>
              </tr>
              <tr>
                  <td>{m.content}</td>
              </tr>
              <tr>
                  <td className={"text-right"}>{m.author}</td>
              </tr>
              </tbody>
          </table>
        )
        return (
            <Fragment>
             <h1 className={"text-center"}>영화 뉴스</h1>
                <div className={"row"}>
                    <div className={"col-sm-8"}>
                      <table className={"table"}>
                          <tbody>
                            <tr>
                                <td>{newsHtml}</td>
                            </tr>
                          </tbody>
                      </table>
                    </div>
                    <div className={"col-sm-4"}>
                        <table className={"table"}>
                            <tbody>
                            <tr>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default News