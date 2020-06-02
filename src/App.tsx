import React from 'react';
import Grid from "./Components/Grid";


const MAX_CELL_SIZE = 150;
const MIN_CELL_SIZE = 30;

const COLOR_RANGE = 60;

const IS_RANDOM_MARGIN = false;

const MAX_ITEM_MARGIN = 10;

const CELL_MARGIN = Math.trunc(Math.random() * MAX_ITEM_MARGIN);

const App = () => {

    const getCellSize = () => Math.trunc(Math.random() * MAX_CELL_SIZE) + MIN_CELL_SIZE;

    // random between 0, 60, 120, 180, 240, 300
    const getBaseColor = () => Math.trunc(Math.random() * 6) * COLOR_RANGE;

    return (
        <div className="App">
            <Grid cellSize={getCellSize()} baseColor={getBaseColor()} isRandomMargin={IS_RANDOM_MARGIN} cellMargin={CELL_MARGIN}/>
        </div>
    );
}

export default App;
