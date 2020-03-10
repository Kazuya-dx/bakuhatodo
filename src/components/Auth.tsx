import React, { useEffect, useState } from 'react';
import Img from "../statics/explosion.gif";
import './Auth.scss';
import '../components/Animation.scss';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";

// Redux関連
import { useDispatch } from 'react-redux'
import { setGuest } from '../modules/userModule'

const Auth: React.FC = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(false);
    const [subTitle, setSubTitle] = useState(false);
    const [cover, setCover] = useState(true);

    useEffect(() => {
        setTitle(true);
    }, [title])
    useEffect(() => {
        setTimeout(() => {
            setSubTitle(true);
        }, 800)
    }, [subTitle])
    useEffect(() => {
        setTimeout(() => {
            setCover(false);
        }, 1500)
    })
    return (
        <div>
            <div className="login-top">
                <CSSTransition
                    in={cover}
                    classNames='cover'
                    timeout={2000}
                    unmountOnExit
                >
                    <div className="cover"></div>
                </CSSTransition>
                <CSSTransition
                    in={title}
                    classNames='title'
                    timeout={1200}
                    unmountOnExit
                >
                    <h1>爆発するTodoアプリ</h1>
                </CSSTransition>
                <CSSTransition
                    in={subTitle}
                    classNames='title'
                    timeout={1200}
                    unmountOnExit
                >
                    <h2>If you skipped your tasks, the tasks would explode. </h2>
                </CSSTransition>
                <div className="button-area">
                    <button>会員登録</button>
                    <button>ログイン</button>
                    <p><Link to="/"><button onClick={() => { dispatch(setGuest()); }}>ゲストログイン</button></Link></p>
                </div>
            </div>
            <div className="login-text">
                <h1>あなたがサボった時、タスクが爆発します。</h1>
                <div className="img-area"><img src={Img} alt="" /></div>
                <p>タスクを追加してから 1日後 にタスクが爆発します。</p>
                <p>爆発する前にタスクを終わらせるようにしてください。</p>
            </div>
            <div className="login-footer">

            </div>
        </div>
    )
}

export default Auth;