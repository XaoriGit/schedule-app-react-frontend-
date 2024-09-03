import React, { useRef, useState } from 'react';
import { useAppContext } from '../../../AppContext';
import SegmentedControl from '../../segmented-control/SegmentedControl';

function Settings() {
    const { onSettings } = useAppContext()
    const [selectedValue, setSelectedValue] = useState('group');

    return (
        <div id='settings-screen'>
            <SegmentedControl
                name='change'
                callback={(val) => setSelectedValue(val)}
                controlRef={useRef()}
                segments={[
                    {
                        label: 'Группа',
                        value: 'group',
                        ref: useRef()
                    },
                    {
                        label: 'Преподаватель',
                        value: 'teacher',
                        ref: useRef()
                    }
                ]}
            />
        </div>
    );
}

export default Settings;