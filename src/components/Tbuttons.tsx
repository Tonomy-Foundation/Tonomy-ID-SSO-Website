import React from 'react';
import './buttons.css';

export function TA(props: React.HtmlHTMLAttributes<HTMLAnchorElement>) {
    // eslint-disable-next-line react/prop-types
    return <a {...props} className="button-link"></a>;
}
