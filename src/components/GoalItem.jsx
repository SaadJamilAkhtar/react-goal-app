import React from 'react';
import {useDispatch} from "react-redux";
import {deleteGoal} from '../features/goals/goalSlice'
function GoalItem(props) {
    const dispatch = useDispatch()
    return (
        <div className={'goal'}>
            <div>
                {new Date(props.goal.createdAt).toLocaleString('en-US')}
            </div>
            <h2>{props.goal.text}</h2>
            <button onClick={() => dispatch(deleteGoal(props.goal._id))} className="close">X</button>
        </div>
    );
}

export default GoalItem;