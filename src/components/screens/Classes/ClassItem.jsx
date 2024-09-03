import React from 'react';
import * as Icon from 'react-feather';

function ClassItem({ item }) {
    return (
        <div className='bg' id='class-item'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Icon.Clock size={16} opacity={0.6} />
                <div id='t' style={{marginLeft: '4px'}}>
                    {item.time}
                </div>
            </div>
            <main>
                <div>
                    <div id='h'>{item.subject}</div>
                    <div id='t'>{item.teacher}</div>
                </div>
                <div id='t' style={{fontSize: '16pt'}}>
                    {item.location}
                </div>
            </main>
        </div>
    );
}

export default ClassItem