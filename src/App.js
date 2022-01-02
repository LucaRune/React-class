import logo from './logo.svg';
/* eslint-disable */
import React, {useState} from "react";
// {useState} 상단에 첨부 --> 리액트의 데이터 저장공간 state 만드는 법
import './App.css';
import {findDOMNode} from "react-dom";

function App() {
    // var [a,b] = [10,100];
    // 데이터는 1. 변수에 넣거나 2. state 에 넣거나
    let [like, relike] = useState(0);
    let [like2, relike2] = useState(0);
    let [like3, relike3] = useState(0);
    let [글제목, 글제목변경] = useState(['곱창 맛집 추천', '덕소 맛집', '쌀국수 맛집 추천']);
    // useState 는 항상 [state 데이터, state 데이터 변경 함수] 가 들어감
    // array, Object state 데이터 수정 방법 : 일단 변경함수 사용, 변경함수(대체할데이터), state 는 직접 변경X, deep copy 해서 그걸 건드려야함

    function titleChange(){
        var newArray = [...글제목];
        if(newArray[0] === '곱창 맛집 추천'){
            newArray[0] = '붕어빵 맛집 추천';
            글제목변경(newArray);
        } else {
            newArray[0] = '곱창 맛집 추천';
            글제목변경(newArray);
        }
    }

    var arrLike = [like,like2,like3];
    function LikeSort(){
        var Array = [...글제목];
        var likeArray = [...arrLike];
        if(likeArray[0] < likeArray[1]){
            Array[0] = '덕소 맛집';
            Array[1] = '붕어빵 맛집 추천';
            글제목변경(Array);
        } else if(likeArray[1] < likeArray[2]){
            Array[0] = '쌀국수 맛집 추천';
            Array[1] = '덕소 맛집';
            글제목변경(Array);
        } else {
            글제목변경(Array);
        }
    }


    //console.log(arrLike);
    //function sort(){
        //const newLike = [...arrLike];
        //const map1 = newLike.map();
        //console.log(newLike.sort(function (a,b){{return b-a}}));
    //}
    // 라이크에는 좋아요 숫자가 들어가고
    // arrLike 배열을 그대로 복사해와서
    //
    return (
    <div className="App">
      <div className="black-nav">   {/*태그에 class 를 주고 싶으면 <div className="클래스명"*/}
        <div>Rulu Blog</div>
      </div>
        <br/>
        <button onClick={ titleChange }>제목변경</button>
        <button onClick={ LikeSort }>정렬</button>
        <div className="list">
           <a><h3> { 글제목[0] } <span onClick={ ()=>{ relike( like + 1 )} }>👍</span> { like }</h3>
            {/*이벤트 다루는 법 : onClick={클릭될 때 실행할 함수}, onClick={()=>{실행할 내용}}*/}
            <p>1월 2일 발행</p>
               <hr/></a>
        </div>
        <div className="list">
            <a><h3> { 글제목[1] } <span onClick={ ()=>{ relike2( like2 + 1 )} }>👍</span> { like2 }</h3>
            <p>1월 1일 발행</p>
                <hr/></a>
        </div>
        <div className="list">
           <a><h3> { 글제목[2] } <span onClick={ ()=>{ relike3( like3 + 1 )} }>👍</span> { like3 }</h3>
            <p>1월 1일 발행</p>
               <hr/></a>
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
