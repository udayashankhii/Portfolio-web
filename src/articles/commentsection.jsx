import React, { useState, useEffect } from 'react';

const CommentSection = ({ postId, initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate user authentication
    setUser({
      id: 'user123',
      name: 'Current User',
      avatar: 'https://ui-avatars.com/api/?name=Current+User&background=random'
    });
  }, []);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !user) return;

    const comment = {
      id: Date.now(),
      userId: user.id,
      author: user.name,
      avatar: user.avatar,
      content: newComment,
      date: new Date(),
      likes: 0,
      replies: [],
      isLiked: false
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const handleSubmitReply = (parentId) => {
    if (!replyText.trim() || !user) return;

    const reply = {
      id: Date.now(),
      userId: user.id,
      author: user.name,
      avatar: user.avatar,
      content: replyText,
      date: new Date(),
      likes: 0,
      isLiked: false
    };

    setComments(comments.map(comment => 
      comment.id === parentId 
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    ));

    setReplyText('');
    setReplyingTo(null);
  };

  const handleLike = (commentId, isReply, parentId) => {
    setComments(comments.map(comment => {
      if (isReply && comment.id === parentId) {
        return {
          ...comment,
          replies: comment.replies.map(reply =>
            reply.id === commentId
              ? { 
                  ...reply, 
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked 
                }
              : reply
          )
        };
      } else if (comment.id === commentId) {
        return {
          ...comment,
          likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
          isLiked: !comment.isLiked
        };
      }
      return comment;
    }));
  };

  const CommentItem = ({ comment, isReply = false, parentId = null }) => (
    <div className={`flex space-x-3 ${isReply ? 'ml-12 mt-4' : 'mb-6'}`}>
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src={comment.avatar}
          alt={comment.author}
        />
      </div>
      
      <div className="flex-grow">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">{comment.author}</h4>
            <span className="text-xs text-gray-500">
              {new Date(comment.date).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-2 text-sm">
          <button
            onClick={() => handleLike(comment.id, isReply, parentId)}
            className={`flex items-center space-x-1 ${
              comment.isLiked ? 'text-blue-600' : 'text-gray-500'
            } hover:text-blue-600 transition-colors`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{comment.likes}</span>
          </button>
          
          {!isReply && (
            <button
              onClick={() => setReplyingTo(comment.id)}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              Reply
            </button>
          )}
        </div>

        {/* Reply Form */}
        {replyingTo === comment.id && (
          <div className="mt-4 ml-12">
            <div className="flex space-x-3">
              <img
                className="h-8 w-8 rounded-full"
                src={user?.avatar}
                alt={user?.name}
              />
              <div className="flex-grow">
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="2"
                  placeholder={`Reply to ${comment.author}...`}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
                <div className="flex justify-end space-x-2 mt-2">
                  <button
                    onClick={() => setReplyingTo(null)}
                    className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSubmitReply(comment.id)}
                    className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4">
            {comment.replies.map(reply => (
              <CommentItem
                key={reply.id}
                comment={reply}
                isReply={true}
                parentId={comment.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="mt-12 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Comments ({comments.length})
      </h2>

      {/* Comment Form */}
      {user && (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="flex space-x-3">
            <img
              className="h-10 w-10 rounded-full"
              src={user.avatar}
              alt={user.name}
            />
            <div className="flex-grow">
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                placeholder="Share your thoughts..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
              />
              <div className="flex justify-between items-center mt-3">
                <p className="text-sm text-gray-500">
                  Be respectful and constructive in your comments.
                </p>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        ) : (
          <div className="text-center py-8">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 16c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No comments yet</h3>
            <p className="mt-1 text-sm text-gray-500">Be the first to share your thoughts!</p>
          </div>
        )}
      </div>

      {/* Ad Section */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
        <p className="text-sm text-gray-500 mb-2">Advertisement</p>
        <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-gray-400"><!-- Google AdSense Ad --></span>
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
