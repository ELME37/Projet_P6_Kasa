import React from 'react';
import './tag.scss';

export default function Tag ({ id, content }) {
    return (
            <p key={id} className='tag'>{ content }</p>
    );
};