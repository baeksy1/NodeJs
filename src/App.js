import { Fragment } from "react";
import Mycomponent from "./component/Mycomponent";
import Mycomponent2 from "./component/Mycomponent2";
import Mycomponent3 from "./component/Mycomponent3";
import Mycomponent4 from "./component/Mycomponent4";

const App=()=>{

    return(
        <Fragment>
        <div>나의 새로운 컴포넌트~!</div>
        
        <Mycomponent name={'홍길동'} age={20} addr={'서울시'} email={'baeksy97@naver.com'} />
        <Mycomponent name={'백승용'} age={27} addr={'용인시'} />


        {/* 클래스형 컴포넌트 */}
        <Mycomponent2 name={'신사임당'} age={40} />




        {/* 함수형 컴포넌트 Mycomponent3 를 생성
        props는 title, content, writer를 전달한다. 다 스트링으로 타입 지정
        writer는 기본값으로 'admin으로 선언해주세요' */}
        <Mycomponent3 title={'백승용'} content={'27'} writer={'용인시'} />
        
        {/* 클래스형 */}
        <Mycomponent4 title={'백승용'} content={'27'} />
        
       
        </Fragment>
    )
}

export default App