import { useAppSelector } from "../../hooks/helpersRedux";

const CommentList = () => {
  const { comments } = useAppSelector((state) => state.comments) || [];

  return (
    <div className="mt-4 bg-gray-800 p-4 rounded-lg">
      <h3 className="text-white text-lg mb-2 font-bold">Comments:</h3>
      <ol className="list-decimal ml-5">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <li
              key={comment.id}
              className="text-gray-300 justify-between my-2 font-medium"
            >
              {comment.description}
            </li>
          ))
        ) : (
          <p className="text-gray-400">Not comments yet</p>
        )}
      </ol>
    </div>
  );
};

export default CommentList;
