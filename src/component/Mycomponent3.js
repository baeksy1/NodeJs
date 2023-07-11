import PropTypes from 'prop-types';



const Mycomponent3=({title,content,writer})=>{


    return(

        <div>
         <h2>함수 형 컴포넌트=============</h2>

            <p>제목 : {title}</p>
            <p>내용 : {content}</p>
            <p>글쓴이 : {writer}</p>
        </div>
    )
}

Mycomponent3.defaultProps={
    writer:'admin으로 선언해주세요'
}
Mycomponent3.propTypes={
    title:PropTypes.string,
    content:PropTypes.string,
    writer:PropTypes.string
}

export default Mycomponent3