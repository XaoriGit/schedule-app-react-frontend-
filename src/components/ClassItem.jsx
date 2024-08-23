import React from 'react';
import * as Icon from 'react-feather';

function ClassItem() {
    return (
        <div className='bg' id='class-item' >
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Icon.Clock size={16} opacity={0.6} />
                <div id='t' style={{marginLeft: '4px'}}>
                    1 пара — Лекция, 08:45-10:15
                </div>
            </div>
            <main>
                <div>
                    <div id='h'>Математика</div>
                    <div id='t'>Шертман А. А.</div>
                </div>
                <div id='t' style={{fontSize: '16pt'}}>
                    50
                </div>
            </main>
        </div>
    );
}

export default ClassItem