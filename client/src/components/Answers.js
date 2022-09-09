import React from 'react';
import { Link } from 'react-router-dom';

const Answers = ({ answers, title }) => {
//   if (!group.answers.length) {
//     return <h3>No Answers Yet</h3>;
//   }

  return (
    <div>
      <h3>{title}</h3>
      {answers &&
        answers.map(answer => (
          <div key={answer._id} className="card mb-3">
            <p className="card-header">
                <Link
                    to={`/profile/${answer.username}`}
                    style={{ fontWeight: 700 }}
                    className="text-dark"
                >
                    {answer.username}
                </Link>{' '}
                answer on {answer.createdAt}
            </p>
            <div className="card-body">
                <Link to={`/answer/${answer._id}`}>
                    <p>{answer.answerText}</p>
                    <p className="mb-0">
                        Reactions: {answer.reactionCount} || Click to{' '}
                        {answer.reactionCount ? 'see' : 'start'} the discussion!
                    </p>
  </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Answers;