import React from 'react';
import { Link } from 'react-router-dom';

const GroupList = ({ allgroups }) => {

    if (!allgroups || !allgroups.length) {
        return <p>ALL Groups</p>;
    }

    return (
        <div>
            <h5>
                All Groups
            </h5>
            {allgroups.map(group => (
                <button className="btn w-100 display-block mb-2" key={group._id}>
                    <Link to={`/profile/${group.groupName}`}>{group.groupName}</Link>
                </button>
            ))}
        </div>
    );
};

export default GroupList;