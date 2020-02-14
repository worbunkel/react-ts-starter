import React from 'react';

import { action } from '@storybook/addon-actions';
import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
};

export const Standard = () => <Button onClick={action('clicked')} text={'Get Free Delivery'} />;

export const Secondary = () => <Button onClick={action('clicked')} text={'Log In'} secondaryStyle={true} />;
