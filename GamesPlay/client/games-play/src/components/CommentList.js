export const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((c) => (
        <li key={c._id} className="comment">
          <p>{c.comment}</p>
        </li>
      ))}
    </ul>
  );
};
