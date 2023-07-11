import PropTypes from 'prop-types';
import React from 'react';

class Mycomponent4 extends React.Component{


    render(){
        const{title, content, writer}=this.props;
        return(
            <div>
                <h2>클래스 형 컴포넌트=============</h2>
            <p>제목 : {title}</p>
            <p>내용 : {content}</p>
            <p>글쓴이 : {writer}</p>
        </div>
        )
    }
}

Mycomponent4.defaultProps={
    writer:'admin을 입력해주세용'
}

Mycomponent4.propTypes={
    title:PropTypes.string,
    writer:PropTypes.string,
    content:PropTypes.string
}

export default Mycomponent4