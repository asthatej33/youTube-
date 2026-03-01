import { comment } from "postcss";
import React from "react";

const commentsData = [
  {
    name: "Ankit Sharma",
    comment: "This project structure is very clean.",
    replies: [
      {
        name: "Meera Iyer",
        comment: "Yes! Especially the Redux setup.",
        replies: [
          {
            name: "Rohit Kulkarni",
            comment: "I struggled with Redux at first.",
            replies: [
              {
                name: "Pooja Desai",
                comment: "Same here, but practice helped.",
                replies: [
                  {
                    name: "Vikram Rao",
                    comment: "Practice and debugging both 😄",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Simran Kaur",
    comment: "Can someone explain useMemo?",
    replies: [
      {
        name: "Harsh Trivedi",
        comment: "useMemo is for memoizing expensive calculations.",
        replies: [
          {
            name: "Simran Kaur",
            comment: "When should we use it exactly?",
            replies: [
              {
                name: "Nikhil Jain",
                comment: "When recalculation affects performance.",
                replies: [
                  {
                    name: "Ayesha Khan",
                    comment: "Mostly in large lists or heavy computations.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Manav Gupta",
        comment: "But don't overuse it.",
        replies: [],
      },
    ],
  },
  {
    name: "Tanvi Bhatt",
    comment: "Recursive components are confusing at first.",
    replies: [
      {
        name: "Yash Malhotra",
        comment: "Think of it like a function calling itself.",
        replies: [
          {
            name: "Tanvi Bhatt",
            comment: "Ohh, like factorial example?",
            replies: [
              {
                name: "Yash Malhotra",
                comment: "Exactly! Same concept.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, comment } = data;
  // console.log(data);
  return (
    <div className="flex bg-slate-100 p-2 m-4 rounded-lg shadow-lg">
      <img
        className="h-14 mr-3"
        src="https://i.pinimg.com/736x/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg"
        alt="userimg"
      />
      <div className="font-bold">
        <p>{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

const CommentList = (props) => {
  const { comments } = props;
  // console.log(props);
  // console.log(comments);
  return (
    <div>
      {comments.map((comment) => (
        <div>
          <Comment data={comment} />
          <div className="ml-10 border-l-4">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl m-5">Comments :</h1>

      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
