import React,{Component,Fragment} from 'react'
import axios from 'axios'
// 외부서버에서 데이터 읽기
class MovieMain extends Component{
    constructor(props) {
        super(props);
        this.state={
            title:'박스오피스',
            movie_data:[],
            movie_detail:{},
            open:false
        }
    }
    // state에 대한 초기값 ==> movie?no=1
    /*
           class A
           {
               A(){
                  this => A
               }
               B b=new B(){
                  this => B
               }
           }
           class B
           {
           }
     */
    componentDidMount() {
        var _this=this;
       axios.get('http://localhost:3355/movie',{
           params:{
               no:1
           }
       }).then(function (response) {
          console.log(response.data)
           _this.setState({movie_data:response.data}) // render()

       })
    }

    onBtnClick(no){
        if(no===1){
           this.setState({title:'박스오피스'})
        }
        else if(no===2){
            this.setState({title:'실시간 예매율'})
        }
        else if(no===3){
            this.setState({title:'좌석 점유율'})
        }
        else if(no===4){
            this.setState({title:'온라인 이용순위'}) // render()
        }

    }
   render() {
       const style={
           "margin":"0px auto",
           "width":"960px"
       }
       /*
         "thumbUrl":"/common/mast/movie/2019/11/thumb/thn_5658
          d961585b46dd8b05225665af2c5a.jpg"
        */
       const html=this.state.movie_data.map((m,index)=>
          <tr key={index}>
              <td><img src={"http://www.kobis.or.kr/"+m.thumbUrl} width={"35"} height="35"/></td>
              <td>{m.movieNm}</td>
              <td>{m.genre}</td>
              <td>{m.openDt}</td>
          </tr>
       )
       return (
           <Fragment>
               <div className={"row"} style={style}>
                  <h1 className={"text-center"}>{this.state.title}</h1>
               </div>
               <div className={"row"} style={style}>
                  <div className={"col-sm-5"}>

                  </div>
                   <div className={"col-sm-7"}>
                     <table className={"table table-striped"}>
                         <thead>
                           <tr className={"success"}>
                               <th></th>
                               <th>영화명</th>
                               <th>장르</th>
                               <th>개봉일</th>
                           </tr>
                         </thead>
                         <tbody>
                         {html}
                         </tbody>
                     </table>
                   </div>
               </div>
               <div className={"row"} style={style}>
                   <input type={"button"} className={"btn btn-sm btn-primary"} value={"박스오피스"}
                     onClick={this.onBtnClick.bind(this,1)}
                   />
                   <input type={"button"} className={"btn btn-sm btn-primary"} value={"실시간 예매율"}
                          onClick={this.onBtnClick.bind(this,2)}
                   />
                   <input type={"button"} className={"btn btn-sm btn-primary"} value={"좌석 점유율"}
                          onClick={this.onBtnClick.bind(this,3)}
                   />
                   <input type={"button"} className={"btn btn-sm btn-primary"} value={"온라인 이용순위"}
                          onClick={this.onBtnClick.bind(this,4)}
                   />
               </div>
           </Fragment>
       )
   }
}

class MovieDetail extends Component{

}

export default MovieMain