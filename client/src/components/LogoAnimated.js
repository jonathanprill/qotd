import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { Link } from "react-router-dom"

function LogoAnimated() {

    const [items, setItems] = useState([])
    //REACT SPRING
    const transition = useTransition(items, {
        from: { x: 13, y: 13, width: 24, height: 24, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, delay: 500, rotate: 0, backgroundColor: 'rgb(0, 0, 0)' }, //start
        enter: item => async (next) => {
            await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 0, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
            await next({ x: item.left1, y: item.top1, height: item.height1, width: item.width1, borderRadius: item.borderRadius1, borderBottomLeftRadius: item.borderBottomLeftRadius1, borderBottomRightRadius: item.borderBottomRightRadius1, delay: 5000, rotate: item.rotate1, backgroundColor: item.backgroundColor1, borderTopRightRadius: item.borderTopRightRadius1 }); //one
            await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 1000, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
            await next({ x: item.left2, y: item.top2, height: item.height2, width: item.width2, borderRadius: item.borderRadius2, borderBottomLeftRadius: item.borderBottomLeftRadius2, borderBottomRightRadius: item.borderBottomRightRadius2, delay: 5000, rotate: item.rotate2, backgroundColor: item.backgroundColor2, borderTopRightRadius: item.borderTopRightRadius2 }); //two
            await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 1000, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
            await next({ x: item.left3, y: item.top3, height: item.height3, width: item.width3, borderRadius: item.borderRadius3, borderBottomLeftRadius: item.borderBottomLeftRadius3, borderBottomRightRadius: item.borderBottomRightRadius3, delay: 5000, rotate: item.rotate3, backgroundColor: item.backgroundColor3, borderTopRightRadius: item.borderTopRightRadius3 }); //three
            await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 1000, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
        },
        leave: { left: 1, top: 1, width: 48, height: 48, borderRadius: 50, borderBottomLeftRadius: 50, delay: 10, backgroundColor: 'rgb(255, 255, 255)' }
    });



    useEffect(() => {
        setItems([
            // ////////////////////////////Q/////////////////////////////////
            {
                left: 1, top: 1, width: 24, height: 24, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: 'rgb(176, 190, 197)', // start
                left1: 0, top1: 0, height1: 25, width1: 25, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, backgroundColor1: 'rgb(176, 190, 197)', // one
                left2: 0, top2: 0, width2: 10, height2: 25, borderRadius2: 0, borderBottomLeftRadius2: 25, borderTopRightRadius2: 0, borderBottomRightRadius2: 0, backgroundColor2: 'rgb(176, 190, 197)', // two
                left3: 0, top3: 0, width3: 10, height3: 25, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, backgroundColor3: 'rgb(176, 190, 197)', // three
            },
            // ////////////////////////////Q/////////////////////////////////
            {
                left: 16, top: 18, width: 8, height: 4.5, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, rotate: 45, backgroundColor: 'rgb(245, 245, 245)', // start
                left1: 10, top1: 0, height1: 25, width1: 15, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(245, 245, 245)',  // one
                left2: 10, top2: 0, width2: 15, height2: 25, borderRadius2: 50, borderBottomLeftRadius2: 50, borderTopRightRadius2: 50, borderBottomRightRadius2: 50, rotate2: 0, backgroundColor2: 'rgb(245, 245, 245)', // two
                left3: 10, top3: 0, width3: 15, height3: 25, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(245, 245, 245)', // three
            },
            // ////////////////////////////O/////////////////////////////////
            {
                left: 25.5, top: 1, width: 24, height: 24, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, rotate: 0, backgroundColor: 'rgb(155, 93, 229)', // start
                left1: 25, top1: 0, height1: 50, width1: 25, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(155, 93, 229)',  // one
                left2: 25, top2: 0, width2: 25, height2: 50, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 50, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(155, 93, 229)', // two
                left3: 25, top3: 0, width3: 25, height3: 50, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(155, 93, 229)', // three
            },
            // ////////////////////////////Top-T/////////////////////////////////
            {
                left: 1, top: 25.5, width: 24, height: 10, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, rotate: 0, backgroundColor: 'rgb(241, 91, 181)', // start
                left1: 0, top1: 25, height1: 25, width1: 15, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(241, 91, 181)',  // one
                left2: 0, top2: 25, width2: 15, height2: 25, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 25, borderBottomRightRadius2: 25, rotate2: 0, backgroundColor2: 'rgb(241, 91, 181)', // two
                left3: 0, top3: 25, width3: 15, height3: 25, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(241, 91, 181)', // three
            },
            // ////////////////////////////T/////////////////////////////////
            {
                left: 8, top: 26, width: 10, height: 23.5, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, rotate: 0, backgroundColor: 'rgb(241, 91, 181)', // start
                left1: 15, top1: 25, height1: 25, width1: 10, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(254, 228, 64)',  // one
                left2: 15, top2: 25, width2: 10, height2: 25, borderRadius2: 0, borderBottomLeftRadius2: 12, borderTopRightRadius2: 0, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(254, 228, 64)', // two
                left3: 15, top3: 25, width3: 10, height3: 25, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(254, 228, 64)', // three
            },
            // ////////////////////////////D///////////////////////////////6
            {
                left: 25.5, top: 25.5, width: 24, height: 24, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 50, borderBottomRightRadius: 50, rotate: 0, backgroundColor: 'rgb(0, 187, 249)', // start
                left1: 30, top1: 30, height1: 20, width1: 20, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(0, 187, 249)',  // one
                left2: 30, top2: 30, width2: 20, height2: 20, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 25, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(0, 187, 249)', // two
                left3: 30, top3: 30, width3: 20, height3: 20, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(0, 187, 249)', // three
            },
            // // //////////////////////////./////////////////////////////////
            {
                left: 46, top: 46, width: 3.5, height: 3.5, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, rotate: 0, backgroundColor: 'rgb(0, 245, 212)', // start
                left1: 37.5, top1: 37.5, height1: 12.5, width1: 12.5, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(0, 245, 212)',  // one
                left2: 37.5, top2: 37.5, width2: 12.5, height2: 12.5, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 25, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(0, 245, 212)', // two
                left3: 37.5, top3: 37.5, width3: 12.5, height3: 12.5, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(0, 245, 212)', // three
            }
        ])
    }, []);

    return (
        <Link to={'/'} >
        <div style={{
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            <div style={{
                height: "50px",
                width: "50px",
                position: "relative",
                backgroundColor: "transparent",
            }}>
                {transition((style) =>
                    <animated.div style={style} className="logo-items" />
                )}
            </div>
        </div>
        </Link>
    );
}

export default LogoAnimated;