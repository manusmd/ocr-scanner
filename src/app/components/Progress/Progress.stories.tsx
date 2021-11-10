import React from 'react';
import Progress from './Progress';

export default {
  component: Progress,
  title: 'Component/Progress',
};

export const ten = () => <Progress status="blabla" value={10} />;
export const twenty = () => <Progress status="blabla" value={20} />;
export const thirty = () => <Progress status="blabla" value={30} />;
