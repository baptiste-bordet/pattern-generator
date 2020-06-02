import React, {useEffect, useState} from 'react';

interface IItem {
    size: number
    baseColor: number
    margin: number
    isRandomMargin: boolean
}

const Item = ({size, baseColor, margin, isRandomMargin }: IItem) => {
    const [style, setStyle] = useState({});

    const randomColor = () => {
        const h = baseColor;
        const s = Math.floor(Math.random() * 100);
        const l = Math.floor(Math.random() * 100);

        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    }

    const randomRadius = () => `${Math.random() * 50}%`;

    useEffect(() => {
        setStyle({
            background: randomColor(),
            width: `${size}px`,
            height: `${size}px`,
            borderTopLeftRadius: randomRadius(),
            borderTopRightRadius: randomRadius(),
            borderBottomLeftRadius: randomRadius(),
            borderBottomRightRadius: randomRadius(),
            margin: isRandomMargin ? `${margin}px` : 0
        })
    }, []);

    return (
        <div className="item" style={style}/>
    )
};

export default Item;
