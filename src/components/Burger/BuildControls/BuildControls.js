import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' },
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => {
            return <BuildControl key={ctrl.label} label={ctrl.label}/>
        })}
    </div>
)

export default buildControls;