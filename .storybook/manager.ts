import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'
import { name, homepage } from '../package.json'

const theme = create({
    base: 'dark',
    brandTitle: name,
    brandUrl: homepage.replace(/.git$/, ''),
    brandImage: null,
})

addons.setConfig({
    theme: theme,
    panelPosition: 'bottom',
})
