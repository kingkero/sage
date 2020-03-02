import { registerBlockType } from '@wordpress/blocks'

registerBlockType('foo/test', {
  title: 'Testblock',
  description: 'This is purely to test if blocks get registered',
  category: 'common',
  edit: () => <div>Hello Editor!</div>,
  save: () => <div>Hello Vistior!</div>,
});

