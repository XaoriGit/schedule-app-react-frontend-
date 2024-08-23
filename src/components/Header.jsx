import React from 'react';
import * as Icon from 'react-feather';
import { useAppContext } from '../AppContext';

function Header() {
    const { data } = useAppContext()

    return (
        <header className='bg'>
            <div>
                <div id='t'>{data[0].group}</div>
                <div id='h'>{data[0].schedule[0].date}</div>
            </div>
            <Icon.MoreVertical size={32} opacity={0.6} />
        </header>
    );
}

export default Header;