import PropTypes from 'prop-types';


const Mycomponent=({name, age,addr, email})=>{
    // const {name, age,addr}=x;//이거랑 똑같음
    return(
        
        <div>
            <br/>
            함수형 컴포넌트
            컴포넌트는 반복되는 작업이
            많은 부분에 사용이됨
            <br/>
            props: {name}<br/>
            props: {age}<br/>
            props: {addr}<br/>
            props: {email}<br/>
            <br/>
        </div>

    )
}
//props값이 넘어오지 않을 때 기본값의 선언
Mycomponent.defaultProps={
    // email:"이메일을 입력 안했습니다"
}

//props값의 타입검증(정적타입 지정)
//컴포넌트명.propTypes={}
Mycomponent.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    addr: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}
export default Mycomponent