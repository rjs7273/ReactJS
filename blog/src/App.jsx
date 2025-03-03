/* eslint-disable */

import { useState } from "react";
import "./App.css"; // CSS 파일 import

function Modal({setIsOpen}){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => setIsOpen(false)}>닫기</button>
    </div>
  )
}

function ProductPage() {
  let [postTitles, setPostTitles] = useState(["갈비찜", "김치볶음밥", "닭갈비"]);
  let [like, setLike] = useState([0,0,0]);
  let [isOpen, setIsOpen] = useState(false);

  function likeCount(i) {
    const newLikes = [...like]; // 기존 배열 복사 (상태 직접 변경 방지)
    newLikes[i] += 1; // 클릭한 항목의 좋아요 수 증가
    setLike(newLikes); // 새로운 배열로 상태 업데이트
  }

  return (
    <div>
      { 
        postTitles.map(function(title,i){
          return ( <div className="list">
            <h4>{postTitles[i]} <span onClick={() => likeCount(i)}>👍</span> {like[i]} </h4>
            <p>{postTitles[i]} 레시피는...</p>
            <button onClick={() => setIsOpen(true)}>자세히 보기</button>
          </div> )
        }) 
      }
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );



}

export default ProductPage;
