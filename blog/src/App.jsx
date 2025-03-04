/* eslint-disable */

import { useState } from "react";
import "./App.css"; // CSS 파일 import

function ProductPage() {
  let [postTitles, setPostTitles] = useState(["갈비찜", "김치볶음밥", "닭갈비"]);
  let [like, setLike] = useState([0,0,0]);
  let [isOpen, setIsOpen] = useState(false);
  let [modalTitle, setModalTitle] = useState("아무거나");
  let [text, setText] = useState("")


  function likeCount(i) {
    const newLikes = [...like]; // 기존 배열 복사 (상태 직접 변경 방지)
    newLikes[i] += 1; // 클릭한 항목의 좋아요 수 증가
    setLike(newLikes); // 새로운 배열로 상태 업데이트
  }

  function posting(){
    setPostTitles([...postTitles, text]);
    setLike([...like, 0]);
  }

  function deleting(title){
    setPostTitles(postTitles.filter(e => e !== title));
  }

  return (
    <div>
      <div className="navigation">myblog</div>
      { 
        postTitles.map(function(title,i){
          return ( <div className="list" key={i}>
            <h4>{title} <span onClick={() => {likeCount(i)}}>👍</span> {like[i]} </h4>
            <p>{title} 레시피는...</p>
            <button onClick={() => {setIsOpen(true); setModalTitle(title);}}>자세히 보기</button>
            <button onClick={() => deleting(title)}>삭제</button>
          </div> )
        }) 
      }

      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={posting}>제출</button>

      {isOpen && <Modal title={modalTitle} setIsOpen={setIsOpen} />}
    </div>
  );
}



function Modal({title, setIsOpen}){
  return(
    <div className="modal">
      <h4>{title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => setIsOpen(false)}>닫기</button>
    </div>
  )
}

export default ProductPage;
