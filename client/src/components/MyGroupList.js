import React from 'react';
import { Link } from 'react-router-dom';

const MyGroupList = ({ groups }) => {

    if (!groups || !groups.length) {
        return <p>No Groups Yet</p>;
    }

    return (
        <div>
            <h5>
                My Groups
            </h5>
            {groups.map(group => (
                <button className="btn w-100 display-block mb-2" key={group._id}>
                    <Link to={`/group/${group.groupName}`}>{group.groupName}</Link>
                </button>
            ))}
        </div>
    );
};

export default MyGroupList;