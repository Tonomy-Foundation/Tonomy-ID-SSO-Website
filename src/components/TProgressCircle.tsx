import { CircularProgress } from '@material-ui/core';
import React from 'react';

export default function TProgressCircle(props: React.ComponentProps<typeof CircularProgress>) {
    return <CircularProgress {...props} />;
}
