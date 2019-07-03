import { create } from '@storybook/theming'
import { name, homepage } from '../package.json'

export const theme = create({
    base: 'dark',
    brandTitle: name,
    brandUrl: homepage.replace(/.git$/, ''),
    brandImage: null,
})
