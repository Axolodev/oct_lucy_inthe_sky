import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import imgList from '../../public/assets/img_list.json'
import PictureList from '../presentators/PictureList';
import ShapedPicture from '../presentators/ShapedPicture';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Picture list', module)
  .add('with pictures', () => <PictureList pictures={imgList} />);

storiesOf('Shaped picture', module)
  .add('with click', () => <ShapedPicture picture={imgList[0]} onClick={action('clicked')}/>)