import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Grid from "./Components/Grid";


const MAX_CELL_SIZE = 150;
const MIN_CELL_SIZE = 30;

const COLOR_RANGE = 60;

const IS_RANDOM_MARGIN = true;

const IS_DYNAMIC = true;

const MAX_ITEM_MARGIN = 10;

const CELL_MARGIN = Math.trunc(Math.random() * MAX_ITEM_MARGIN);

const App = () => {

    const getCellSize = () => Math.trunc(Math.random() * MAX_CELL_SIZE) + MIN_CELL_SIZE;

    // random between 0, 60, 120, 180, 240, 300
    const getBaseColor = () => Math.trunc(Math.random() * 6) * COLOR_RANGE;

    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Grid
                        cellSize={getCellSize()}
                        baseColor={getBaseColor()}
                        isRandomMargin={IS_RANDOM_MARGIN}
                        isDynamic={IS_DYNAMIC}
                        cellMargin={CELL_MARGIN}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
