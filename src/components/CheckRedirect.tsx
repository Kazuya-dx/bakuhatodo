import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { RootState } from '../rootReducer';

type Props = {
    children: any
}

const CheckRedirect: React.FC<Props> = (props) => {
    const user = useSelector((state: RootState) => state.user);

    return (
        (user.isLoggedIn ? props.children : <Redirect to={'/login'} />)
    )
}

export default CheckRedirect;