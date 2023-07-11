import React from 'react';


//클래스형 컴포넌트
class Mycomponent2 extends React.Component{
    /* 랜더 함수를 오버라이딩 시키고 그 안에서 return을 실행해야됨. */




    render(){

        //클래스형 컴포넌트는 멤버변수 props로 자동전달이 된다.
        const{name,age}=this.props;

        return(
            <div>나의 클래스형 컴포넌트 키키키
                <br/>
                클래스형 프롭스:{name}<br/>
                클래스형 프롭스:{age}<br/>
            </div>
        )
    }
}

export default Mycomponent2