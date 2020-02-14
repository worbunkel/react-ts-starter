import '!style-loader!css-loader!sass-loader!../src/app.scss';
import 'storybook-addon-react-docgen/register';

const { addDecorator } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');

addDecorator(withPropsTable);
