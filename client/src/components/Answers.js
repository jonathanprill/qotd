import React from 'react';
import { Link } from 'react-router-dom';

const Answers = ({ answers, title }) => {
  if (!answers.length) {
    return <h3>No Answers Yet</h3>;
  }

console.log(answers[0].answerBody)

  return (
    <div>
      <h3>Answers</h3>
      {answers.map(group => (
                <div key={group._id}>
                    <p>{group.answerBody}</p>
                </div>
            ))}
    </div>
  );
};

export default Answers;