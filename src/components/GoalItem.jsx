import React from 'react';

function GoalItem(props) {
    return (
        <div className={'goal'}>
            <div>
                {new Date(props.goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{props.goal.text}</h2>
        </div>
    );
}

export default GoalItem;