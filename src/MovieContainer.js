import React, {Component, Fragment} from 'react'
import Menu from "./components/Menu";
import MovieMain from "./components/MovieMain";
/*
    1. React
       = JSX (XML형식) => 계층구조 (트리) => React.createElement() => 가상 돔 <==> 실제 돔
                                                                             diff
       = 변수
         props  => 값 변경이 없다
         state  => 값을 변경 ==> setState() ==> render() (화면 변경)

       = 생명주기
                            (*****)                                    (*****)       (*****)
         생성  =========> constructor() ===> componentWillMount() ===> render() ====> componentDidMount()
                                            ================(X)
         props변경  ===> shouldComponentUpdate() ===> render() =====> componentDidUpdate()
                            (*****)
         state변경  ===>    setState() ==> render() ==> componentDidUpdate()
                                                                              (*****)
         ================================================================== componentWillUnmount()
            render()는 생략이 불가능

       = 컴포넌트와 컴포넌트의 통신 (데이터 전송)
          Main => state로 값을 받는다
          Sub => Main(state) => props로 전송을 한다 ===> 단방향 통신 (props=> state값, 이벤트)
 */
class MovieContainer extends Component{
    render() {
        return (
        <Fragment>
            <Menu/>
            <MovieMain/>
        </Fragment>
        )
    }
}
export default MovieContainer