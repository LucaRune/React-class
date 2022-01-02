import logo from './logo.svg';
/* eslint-disable */
import React, {useState} from "react";
// {useState} 상단에 첨부 --> 리액트의 데이터 저장공간 state 만드는 법
import './App.css';

function App() {
    // var [a,b] = [10,100];
    // 데이터는 1. 변수에 넣거나 2. state 에 넣거나
    let posts = '강남 고기 맛집';
    let [따봉, 따봉변경] = useState(0);
    //  따봉변경으로 따봉 값을 변경시켜야함
    let [글제목2, 글제목변경2] = useState([ '여자 코트 추천', '덕소 맛집', '쌀국수 맛집 추천'])
    let [글제목, 글제목변경] = useState(['곱창 맛집 추천', '덕소 맛집', '쌀국수 맛집 추천','여자 코트 추천']);
    // useState 는 항상 [state 데이터, state 데이터 변경 함수] 가 들어감
    // state 변경함수로 state 를 변경해야함
    // a 에는 '값' 이 들어가고, b 에는 '값' 을 변경하는 함수가 들어감
    // 웹이 App 처럼 동작하게 만들려면 state 에 데이터를 저장해야함
    // state 는 데이터가 변경될 때 HTML 이 자동으로 재렌더링 된다. = HTML 이 새로고침 없이도 스무스하게 변경됨
    // 자주 바뀌는, 중요한 데이터는 변수말고 state 로 저장해서 사용
    // array, Object state 데이터 수정 방법 : 일단 변경함수 사용, 변경함수(대체할데이터), state 는 직접 변경X, deep copy 해서 그걸 건드려야함
    function 제목바꾸기(){
        var newArray = [...글제목]; // deep copy : 값 공유를 하지않고 서로 독립적인 값을 가지는 복사, state 의 복사본을 만들어서
        newArray[0] = '붕어빵 맛집 추천';    // 수정
        글제목변경(newArray);
    }
    function 정렬(){

    }
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
        <button onClick={ 제목바꾸기 }>제목 변경</button>
        <button onClick={ 정렬 }>정렬</button>
        <div className="list">
            <h3> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1 )} }>👍</span> { 따봉 } </h3>
            {/*이벤트 다루는 법 : onClick={클릭될 때 실행할 함수}, onClick={()=>{실행할 내용}}*/}
            <p>1월 2일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> { 글제목[1] }</h3>
            <p>1월 1일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> { 글제목[2] }</h3>
            <p>1월 1일 발행</p>
            <hr/>
        </div>

        <Modal/>

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
