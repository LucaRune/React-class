import logo from './logo.svg';
/* eslint-disable */
import React, {useState} from "react";
// {useState} 상단에 첨부 --> 리액트의 데이터 저장공간 state 만드는 법
import './App.css';

function App() {
    // var [a,b] = [10,100];
    // 데이터는 1. 변수에 넣거나 2. state 에 넣거나
    const [post, setPost] =useState([
        {
            id:0,
            title:'여자 코트 추천',
            postDate:'1월 2일',
            like: 0,
        },{
            id:1,
            title:'여자 코트 추천',
            postDate:'1월 1일 '
            like: 0,
        },{
            id:2,
            title:'여자 코트 추천',
            postDate:'1월 2일 '
            like: 0,
        },{
            id:3,
            title:'여자 코트 추천',
            postDate:'1월 3일 '
            like: 0,
        },
    ]);
    return (
    <div className="App">
      <div className="black-nav">   {/*태그에 class 를 주고 싶으면 <div className="클래스명"*/}
        <div>Rulu Blog</div>
        {/* 스타일은 무조건 {} 사용, JSX 에서 style 속성 집어넣을 때 style={ object 자료형으로 만든 스타일} */}
      </div>
        {/*<img src={logo}/>*/}
        {/*리액트에서 데이터 바인딩 쉽게 하는 법 --> {변수명}*/}
        {/*src,id,href 등의 속성에도 {변수명,함수등} 사용 가능, 대부분의 곳에 {} 사용 가능*/}
        {/*<h4>{ posts }</h4>*/}
        {
            post.map((data, id)=>(
                <div key={id}>
                    <div className="list">
                        <h3> {data.title} <span>👍</span> {data.like } </h3>
                        {/*이벤트 다루는 법 : onClick={클릭될 때 실행할 함수}, onClick={()=>{실행할 내용}}*/}
                        <p>{data.postDate}발행</p>
                        <hr/>
                    </div>
                    <Modal/>
                </div>
            ))
        }


    </div>
  );
}

function Modal(){
    return(
        <div className={"modal"}>
            <h2>제목</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
// Component 만드는 법
// 1. 함수 만들고 이름짓고 , 함수 이름은 대문자로 시작
// 2. return() 안에 축약을 원하는 HTML 넣고 // return() 안에 있는건 태그 하나로 묶어야함
// 3. 원하는 곳에서 <함수명/>
// * return() 내부를 묶을 때 의미없는 <div> 쓰기 싫으면 대신 <> </> 사용 : 프레그먼트
// function App() 와 나란히 만들것, function App() 도 하나의 컴포넌트
// 컴포넌트를 만들어두면 관리가 편해짐
// 어떤걸 Component 로 만드는게 좋을까
// - 반복 출현하는 HTML 덩어리들
// - 자주 변경되는 HTML UI들
// - 다른 페이지 만들 때도 컴포넌트로 만듦
// Component 많이 만들면 단점 : state 쓸 때 복잡해짐 (상위 component 에서 만든 state 쓰려면 props 문법 이용해야함)
export default App;
