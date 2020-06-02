import React, {useState, useEffect} from 'react';
import Item from "../Item";
import './index.scss'


interface IGrid {
    cellSize: number
    baseColor: number
    isRandomMargin: boolean
    cellMargin: number
}

const Grid = ({ cellSize, baseColor, isRandomMargin, cellMargin }: IGrid) => {
    const [nbCells, setNbCells] = useState(0);

    const getNbCells = () => {
        const cellSizeWithMargin = isRandomMargin ? cellSize + 2 * cellMargin : cellSize;
        const nbCellsWidth = Math.trunc(window.innerWidth / cellSizeWithMargin);
        const nbCellsHeight = Math.trunc(window.innerHeight * 0.5 / cellSizeWithMargin);

        // console.log('window.innerWidth', window.innerWidth);
        // console.log('cellSizeWithMargin', cellSizeWithMargin);
        // console.log('cellMargin', cellMargin);
        // console.log('nbCellsWidth', nbCellsWidth);
        // console.log('nbCellsHeight', nbCellsHeight);
        // console.log('rest', rest);

        return nbCellsWidth * nbCellsHeight;
    }

    useEffect(() => {
        setNbCells(getNbCells());
    }, []);

    return (
        <div className="grid-container">
            {[...Array(nbCells)].map((_, index: number) => <Item
                size={cellSize}
                baseColor={baseColor}
                margin={cellMargin}
                isRandomMargin={isRandomMargin}
                key={`cell-${index}`}
            />)}
        </div>
    )
};

export default Grid;
