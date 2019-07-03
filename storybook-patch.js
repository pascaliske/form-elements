#!/usr/bin/env node
const { readFile, writeFile } = require('fs')
const { join, dirname } = require('path')
const { promisify } = require('util')

const SEARCH = `
    var decoratorKey = '__annotations__';
    var decorators = Reflect && Reflect.getOwnPropertyDescriptor
        ? Reflect.getOwnPropertyDescriptor(importItem, decoratorKey).value
        : importItem[decoratorKey];
`
const REPLACE = `
    var target = importItem && importItem.ngModule ? importItem.ngModule : importItem;
    var decoratorKey = '__annotations__';
    var decorators = Reflect && Reflect.getOwnPropertyDescriptor && Reflect.getOwnPropertyDescriptor(target, decoratorKey)
        ? Reflect.getOwnPropertyDescriptor(target, decoratorKey).value
        : target[decoratorKey];
`

async function execute() {
    const path = dirname(require.resolve('@storybook/angular'))
    const file = join(path, 'preview', 'angular', 'helpers.js')
    const contents = await promisify(readFile)(file, 'utf8')
    const colorize = color => {
        try {
            return require('chalk')[color]
        } catch {
            return message => message
        }
    }

    // only replace the exact search pattern
    if (contents.includes(SEARCH)) {
        await promisify(writeFile)(file, contents.replace(SEARCH, REPLACE), 'utf8')
    } else {
        console.warn(
            colorize('yellow')(
                '@storybook/angular was not patched as their source code changed or the patch is already applied.',
            ),
        )
    }
}

execute().catch(e => console.error(e.toString()))
