import { create } from '@storybook/theming'
import { name, repository } from '../package.json'

export const theme = create({
    base: 'dark',
    brandTitle: name,
    brandUrl: repository.url.replace(/.git$/, ''),
    brandImage: null,
})
