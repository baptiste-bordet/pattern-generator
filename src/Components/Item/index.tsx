import React, {useEffect, useState} from 'react';

interface IItem {
    size: number
    baseColor: number
    margin: number
    isRandomMargin?: boolean
    isDynamic?: boolean
}

const Item = ({size, baseColor, margin, isRandomMargin = false, isDynamic = false }: IItem) => {
    const [style, setStyle] = useState({});
    const [transition, setTransition] = useState({});

    const randomColor = () => {
        const h = baseColor;
        const s = Math.floor(Math.random() * 100);
        const l = Math.floor(Math.random() * 100);

        return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    }

    const randomRadius = () => `${Math.random() * 50}%`;

    const updateTransition = () => {
        setTransition({
            borderTopLeftRadius: randomRadius(),
            borderTopRightRadius: randomRadius(),
            borderBottomLeftRadius: randomRadius(),
            borderBottomRightRadius: randomRadius(),
            background: randomColor(),
        })
    }

    useEffect(() => {
        setStyle({
            background: randomColor(),
            width: `${size}px`,
            height: `${size}px`,
            borderTopLeftRadius: randomRadius(),
            borderTopRightRadius: randomRadius(),
            borderBottomLeftRadius: randomRadius(),
            borderBottomRightRadius: randomRadius(),
            margin: isRandomMargin ? `${margin}px` : 0,
            transition: "all 1s linear",
            ...transition
        });

        if (isDynamic) {
            const transitionInterval = Math.random() * 4000 + 2000;
            setInterval(updateTransition, transitionInterval);
        }
    }, []);

    useEffect(() => {
        if (isDynamic && Object.keys(style).length > 0) {
            setStyle({
                ...style,
                ...transition
            });
        }
    }, [transition]);

    return (
        <div className="item" style={style}/>
    )
};

export default Item;
