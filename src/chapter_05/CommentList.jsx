import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "김민재",
    comment: "나폴리",
  },
  {
    name: "황인범",
    comment: "올림피아코스",
  },
  {
    name: "손흥민",
    comment: "토트넘",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment}></Comment>
        );
      })}
    </div>
  );
}

export default CommentList;
