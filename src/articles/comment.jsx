const Comment = ({ comment, onReply }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  
  const handleReply = () => {
    if (!replyText.trim()) return;
    onReply(comment.id, replyText);
    setReplyText('');
    setIsReplying(false);
  };
  
  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
        </div>
        <div className="flex-grow">
          <p className="font-medium">{comment.author}</p>
          <p className="text-gray-700">{comment.content}</p>
          
          <div className="mt-2 flex space-x-4 text-sm">
            <button 
              className="text-gray-500 hover:text-blue-600"
              onClick={() => setIsReplying(!isReplying)}
            >
              Reply
            </button>
          </div>
          
          {isReplying && (
            <div className="mt-3">
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows="2"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
              ></textarea>
              <div className="mt-2 flex justify-end space-x-2">
                <button 
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => setIsReplying(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-3 py-1 bg-blue-600 text-white rounded"
                  onClick={handleReply}
                >
                  Reply
                </button>
              </div>
            </div>
          )}
          
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-4 ml-6">
              {comment.replies.map(reply => (
                <Comment key={reply.id} comment={reply} onReply={onReply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
