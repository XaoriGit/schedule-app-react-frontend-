import React from 'react';
import * as Icon from 'react-feather';

function Header({ group, date }) {
    return (
        <header className='bg'>
            <div>
                <div id='t'>{group}</div>
                <div id='h'>{date}</div>
            </div>
            <Icon.MoreVertical
                id='settings-button'
                size={32}
                opacity={0.6}
                onClick={() => console.log('click')}/>
        </header>
    );
}

export default Header;