import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const [Flag, setFlag] = useState(true);
    const Change = () => {
        setFlag(!Flag)
    }
    return (<div>
        <div>

                <h1>Counter : {count}</h1>
                <button type="button" onClick={increment}>+</button>
                <button type="button" onClick={decrement}>-</button>
            </div>
        {(count%2)!==0
        ?
            <div>
                <p>Odd</p>
            </div>
            :
            <div>
                <p>Even</p>
            </div>
        }
        <button type="button" onClick={Change}>Change Flag</button>
    </div>
    )
}