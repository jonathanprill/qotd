import { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

function LogoLoading() {

    const [items, setItems] = useState([])
    //REACT SPRING
    const transition = useTransition(items, {
        from: { x: 25, y: 25, width: 48, height: 48, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, delay: 1000, rotate: 0, backgroundColor: 'rgb(0, 0, 0)' }, //start
        enter: item => async (next) => {
            await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 10, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
            await next({ x: item.left3, y: item.top3, height: item.height3, width: item.width3, borderRadius: item.borderRadius3, borderBottomLeftRadius: item.borderBottomLeftRadius3, borderBottomRightRadius: item.borderBottomRightRadius3, delay: 500,rotate: item.rotate3, backgroundColor: item.backgroundColor3, borderTopRightRadius: item.borderTopRightRadius3 }); //three
            await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 500, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
            await next({ x: item.left4, y: item.top4, height: item.height4, width: item.width4, borderRadius: item.borderRadius4, borderBottomLeftRadius: item.borderBottomLeftRadius4, borderBottomRightRadius: item.borderBottomRightRadius4, delay: 700, rotate: item.rotate4, backgroundColor: item.backgroundColor4, borderTopRightRadius: item.borderTopRightRadius4 }); // 4
            // await next({ x: item.left1, y: item.top1, height: item.height1, width: item.width1, borderRadius: item.borderRadius1, borderBottomLeftRadius: item.borderBottomLeftRadius1, borderBottomRightRadius: item.borderBottomRightRadius1, delay: 500, rotate: item.rotate1, backgroundColor: item.backgroundColor1, borderTopRightRadius: item.borderTopRightRadius1 }); //one
            // await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 500, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
            // await next({ x: item.left2, y: item.top2, height: item.height2, width: item.width2, borderRadius: item.borderRadius2, borderBottomLeftRadius: item.borderBottomLeftRadius2, borderBottomRightRadius: item.borderBottomRightRadius2, delay: 500, rotate: item.rotate2, backgroundColor: item.backgroundColor2, borderTopRightRadius: item.borderTopRightRadius2 }); //two
            // await next({ x: item.left, y: item.top, height: item.height, width: item.width, borderRadius: item.borderRadius, borderBottomLeftRadius: item.borderBottomLeftRadius, borderBottomRightRadius: item.borderBottomRightRadius, delay: 500, rotate: item.rotate, backgroundColor: item.backgroundColor, borderTopRightRadius: item.borderTopRightRadius }); //start
        },
        leave: { left: 1, top: 1, width: 48, height: 48, borderRadius: 50, borderBottomLeftRadius: 50, delay: 10, backgroundColor: 'rgb(255, 255, 255)' }
    });



    useEffect(() => {
        setItems([
            // ////////////////////////////Q/////////////////////////////////
            {
                left: 1, top: 1, width: 48, height: 48, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, backgroundColor: 'rgb(176, 190, 197)', // start
                left1: 0, top1: 0, height1: 50, width1: 20, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, backgroundColor1: 'rgb(176, 190, 197)', // one
                left2: 0, top2: 0, width2: 20, height2: 50, borderRadius2: 0, borderBottomLeftRadius2: 25, borderTopRightRadius2: 0, borderBottomRightRadius2: 0, backgroundColor2: 'rgb(176, 190, 197)', // two
                left3: 0, top3: 0, width3: 20, height3: 50, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, backgroundColor3: 'rgb(176, 190, 197)', // three
                left4: 0, top4: 0, width4: 20, height4: 50, borderRadius4: 25, borderBottomLeftRadius4: 25, borderTopRightRadius4: 25, borderBottomRightRadius4: 25, backgroundColor4: 'rgb(176, 190, 197)', // 4
            },
            // ////////////////////////////Q/////////////////////////////////
            {
                left: 32, top: 36, width: 16, height: 9, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, rotate: 45, backgroundColor: 'rgb(245, 245, 245)', // start
                left1: 20, top1: 0, height1: 50, width1: 30, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(245, 245, 245)',  // one
                left2: 20, top2: 0, width2: 30, height2: 50, borderRadius2: 50, borderBottomLeftRadius2: 50, borderTopRightRadius2: 50, borderBottomRightRadius2: 50, rotate2: 0, backgroundColor2: 'rgb(245, 245, 245)', // two
                left3: 20, top3: 0, width3: 30, height3: 50, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(245, 245, 245)', // three
                left4: 20, top4: 0, width4: 40, height4: 50, borderRadius4: 25, borderBottomLeftRadius4: 25, borderTopRightRadius4: 25, borderBottomRightRadius4: 25, rotate4: 0, backgroundColor4: 'rgb(245, 245, 245)', // 4
            },
            // ////////////////////////////O/////////////////////////////////
            {
                left: 51, top: 1, width: 48, height: 48, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, rotate: 0, backgroundColor: 'rgb(155, 93, 229)', // start
                left1: 50, top1: 0, height1: 100, width1: 50, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(155, 93, 229)',  // one
                left2: 50, top2: 0, width2: 50, height2: 100, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 50, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(155, 93, 229)', // two
                left3: 50, top3: 0, width3: 50, height3: 100, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(155, 93, 229)', // three
                left4: 50, top4: 0, width4: 50, height4: 100, borderRadius4: 25, borderBottomLeftRadius4: 25, borderTopRightRadius4: 25, borderBottomRightRadius4: 25, rotate4: 0, backgroundColor4: 'rgb(155, 93, 229)', // 4
            },
            // ////////////////////////////Top-T/////////////////////////////////
            {
                left: 1, top: 51, width: 48, height: 20, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, rotate: 0, backgroundColor: 'rgb(241, 91, 181)', // start
                left1: 0, top1: 50, height1: 50, width1: 30, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(241, 91, 181)',  // one
                left2: 0, top2: 50, width2: 30, height2: 50, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 25, borderBottomRightRadius2: 25, rotate2: 0, backgroundColor2: 'rgb(241, 91, 181)', // two
                left3: 0, top3: 50, width3: 30, height3: 50, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(241, 91, 181)', // three
                left4: 0, top4: 50, width4: 40, height4: 50, borderRadius4: 25, borderBottomLeftRadius4: 25, borderTopRightRadius4: 25, borderBottomRightRadius4: 25, rotate4: 0, backgroundColor4: 'rgb(241, 91, 181)', // 4
            },
            // ////////////////////////////T/////////////////////////////////
            {
                left: 16, top: 52, width: 20, height: 47, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0, rotate: 0, backgroundColor: 'rgb(241, 91, 181)', // start
                left1: 30, top1: 50, height1: 50, width1: 20, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(254, 228, 64)',  // one
                left2: 30, top2: 50, width2: 20, height2: 50, borderRadius2: 0, borderBottomLeftRadius2: 12, borderTopRightRadius2: 0, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(254, 228, 64)', // two
                left3: 30, top3: 50, width3: 20, height3: 50, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(254, 228, 64)', // three
                left4: 40, top4: 50, width4: 20, height4: 50, borderRadius4: 25, borderBottomLeftRadius4: 25, borderTopRightRadius4: 25, borderBottomRightRadius4: 25, rotate4: 0, backgroundColor4: 'rgb(254, 228, 64)', // 4
            },
            // ////////////////////////////D///////////////////////////////6
            {
                left: 51, top: 51, width: 48, height: 48, borderRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: 50, borderBottomRightRadius: 50, rotate: 0, backgroundColor: 'rgb(0, 187, 249)', // start
                left1: 60, top1: 60, height1: 40, width1: 40, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(0, 187, 249)',  // one
                left2: 60, top2: 60, width2: 40, height2: 40, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 25, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(0, 187, 249)', // two
                left3: 60, top3: 60, width3: 40, height3: 40, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(0, 187, 249)', // three
                left4: 60, top4: 60, width4: 40, height4: 40, borderRadius4: 25, borderBottomLeftRadius4: 25, borderTopRightRadius4: 25, borderBottomRightRadius4: 25, rotate4: 0, backgroundColor4: 'rgb(0, 187, 249)', // 4
            },
            // // //////////////////////////./////////////////////////////////
            {
                left: 92, top: 92, width: 7, height: 7, borderRadius: 50, borderBottomLeftRadius: 50, borderTopRightRadius: 50, borderBottomRightRadius: 50, rotate: 0, backgroundColor: 'rgb(0, 245, 212)', // start
                left1: 75, top1: 75, height1: 25, width1: 25, borderRadius1: 0, borderBottomLeftRadius1: 0, borderTopRightRadius1: 0, borderBottomRightRadius1: 0, rotate1: 0, backgroundColor1: 'rgb(0, 245, 212)',  // one
                left2: 75, top2: 75, width2: 25, height2: 25, borderRadius2: 0, borderBottomLeftRadius2: 0, borderTopRightRadius2: 25, borderBottomRightRadius2: 0, rotate2: 0, backgroundColor2: 'rgb(0, 245, 212)', // two
                left3: 75, top3: 75, width3: 25, height3: 25, borderRadius3: 25, borderBottomLeftRadius3: 25, borderTopRightRadius3: 25, borderBottomRightRadius3: 25, rotate3: 0, backgroundColor3: 'rgb(0, 245, 212)', // three
                left4: -400, top4: -500, width4: 800, height4: 1000, borderRadius4: 50, borderBottomLeftRadius4: 50, borderTopRightRadius4: 50, borderBottomRightRadius4: 50, rotate4: 0, backgroundColor4: 'rgb(0, 0, 0)', // 4
            }
        ])
    }, []);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "rgb(10 10 10)",
            overflow: 'hidden'
        }}>
            <div style={{
                height: "100px",
                width: "100px",
                position: "relative",
                backgroundColor: "transparent"
            }}>
                {transition((style) =>
                    <animated.div style={style} className="logo-items" />
                )}
            </div>
        </div>
    );
}

export default LogoLoading;
