import React from 'react';
import ImageInput from './ImageInput';

export default {
  component: ImageInput,
  title: 'Component/ImageInput',
};

export const Default = () => <ImageInput onUpload={console.log} />;
