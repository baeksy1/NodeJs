import { Fragment } from "react";


function App1() {

  const name='홍길동';
  const age=20;



  return (/* 소괄호 안에서는 반드시 하나의 상위 태그만 들어감 */
            /* 상위폴더를 하나 더 만들어서 쓰기.  */
   <>
   <Fragment>
   <div className="App">
     <ui>
        <li>1. JSX의 규칙 - 주석은 alt+shift+a</li>
        <li>2. JSX에서는 반드시 하나의 jsx형태를 ()로 리턴해야된다.</li>
        <li>3. div태그를 사용하기 싫다면 Fragment 태그 or
             없는 모형<></>을 사용 할 수 있다.</li>
        <li>4. 함수 안에서 만들어진 변수는 중괄호 참조를 사용한다. 바로 {name}이렇게{age}</li>
        <li>5. jsx에서 if문을 사용하고 싶으면 if문 대신 3항 연산자를 쓴다</li>
        <li>6. 화면에 보여주고 싶은게 없는 경우에는 null을 반환시킨다.</li>
        <li>7. undefined를 반환하는 상황을 만들면 안됨</li>
        <li style={{color:'red',fontSize:20}}>8. DOM요소(태그)에 스타일을 직접 넣을때는 반드시 객체형으로 묶고 카멜표기법을 사용</li>
        {/* 밖에 있는 중괄호 참조 숫자는 따옴표 안써도 되고 px도 안적어도 되는거같음 */}
        <li>9. class대신 className속성을 사용한다.</li>
        <li>10. HTML5의 문법을 정확하게 지킨다.(홀로 사용되는 태그는 반드시 닫는 태그를 적는다 ex-br/)</li>
    </ui>
    <img/>{/* 이미지 태그는 반드시 src alt태그를 가져야된다. */}
    <br/>
    <br/>
    {name ==='홍길동'? '홍길동 입니다':'홍길동이 아닙니다.'}
    {name ==='홍길똥'?<p>홍길동입니다</p>:<button>홍길동이 아닙니다 ㅠㅠ</button>}
    {age !==20?<p>20세입니다</p>:null}
    </div>
    </Fragment>
    </>
  );
}

export default App;
