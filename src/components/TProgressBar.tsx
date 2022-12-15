import { LinearProgress } from '@material-ui/core';
import React from 'react';

export default function TProgressBar(props: React.ComponentProps<typeof LinearProgress>) {
    return <LinearProgress variant="determinate" {...props} />;
}
