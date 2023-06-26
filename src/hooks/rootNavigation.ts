/**
 * Hook created for navigation via header
 */

import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name: string) {
    navigationRef.current?.navigate(name);
}
