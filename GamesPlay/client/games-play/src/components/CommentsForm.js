import { useState } from "react";

export const CommentForm = () => {
  const [comment, setComment] = useState("");

  const onChangeHandler = (e) => setComment((state) => e.target.value);

  const createCommentHandler = (e) => {
    e.preventDefault();

    console.log(comment);
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
