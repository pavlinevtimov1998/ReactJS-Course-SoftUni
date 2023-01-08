import { useState } from "react";

export const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState("");

  const onChangeHandler = (e) => setComment((state) => e.target.value);

  const createCommentHandler = (e) => {
    e.preventDefault();

    if (comment.length === 0) {
      return;
    }

    addComment(comment);
  };
  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" onSubmit={createCommentHandler}>
        <textarea
          name="comment"
          placeholder="Comment......"
          value={comment}
          onChange={onChangeHandler}
        />
        <input
          className="btn submit"
          type="submit"
          defaultValue="Add Comment"
        />
      </form>
    </article>
  );
};
