import React from 'react';
import { Button } from './components/button/button';
import './app.scss';

export const App = () => (
  <div className='app'>
    <Button text='Testing Button' onClick={() => console.log('onClick!')} />
    <Button text='Testing Secondary Button' onClick={() => console.log('onClick!')} secondaryStyle={true} />
  </div>
);
