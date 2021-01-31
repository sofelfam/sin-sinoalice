import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default (props?: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props}>
      <path d="M21 3l-1 4l-10.75 9.75l2 2v1.5h-1.5l-2.25 -2.25l-3 3h-1.5v-1.5l3 -3l-2.25 -2.25v-1.5h1.5l2 2l9.75 -10.75zm-1.25 1.25l-2.5 .8l-9.33 10.33l.25 .25z" />
    </SvgIcon>
  )
};