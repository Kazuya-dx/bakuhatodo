import React, { useEffect, useState } from 'react';
import './Header.scss';
import './Animation.scss';
import { CSSTransition } from 'react-transition-group';

const Header: React.FC = () => {
    const [wrap, setWrap] = useState(false);
    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false);

    useEffect(() => {
        setWrap(true);
    }, [wrap])

    useEffect(() => {
        setTimeout(() => {
            setCheck(true);
        }, 400);
    }, [check])

    useEffect(() => {
        setTimeout(() => {
            setCheck2(true);
        }, 800);
    }, [check2])
    return (
        <header>
            <CSSTransition
                in={wrap}
                classNames='wrap'
                timeout={800}
                unmountOnExit
            >
                <div className="wrap"></div>
            </CSSTransition>
            <CSSTransition
                in={check}
                classNames='fade'
                timeout={800}
                unmountOnExit
            >
                <h1>爆発するTodoアプリ</h1>
            </CSSTransition>
            <CSSTransition
                in={check2}
                classNames='fade'
                timeout={800}
                unmountOnExit
            >
                <h2>あなたがサボった時、タスクが爆発します。</h2>
            </CSSTransition>
        </header>
    )
}

export default Header;