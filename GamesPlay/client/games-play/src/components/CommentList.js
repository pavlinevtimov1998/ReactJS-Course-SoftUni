export const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((c) => (
        <li className="comment">
          <p>{c.text}</p>
        </li>
      ))}
    </ul>
  );
};
