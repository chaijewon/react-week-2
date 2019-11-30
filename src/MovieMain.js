import React,{Component,Fragment} from 'react'

class MovieMain extends Component{
    constructor(props) {
        super(props);
        this.state={
            title:'박스오피스'
        }
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
       return (
           <Fragment>
               <div className={"row"} style={style}>
                  <h1 className={"text-center"}>{this.state.title}</h1>
               </div>
               <div className={"row"} style={style}>
                  <div className={"col-sm-5"}>

                  </div>
                   <div className={"col-sm-7"}>

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