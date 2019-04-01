#!/usr/bin/env ts-node

import { readFile, writeFile } from 'fs'
import { join, dirname } from 'path'
import { promisify } from 'util'
import chalk from 'chalk'

/* tslint:disable:max-line-length */
const SEARCH = `
    var AnnotatedComponent = template ? createComponentFromTemplate(template, styles) : component;
    var story = {
        component: AnnotatedComponent,
        props: props,
    };
    return getModule([app_component_1.AppComponent, AnnotatedComponent], [AnnotatedComponent], [app_component_1.AppComponent], story, moduleMetadata);
`
const REPLACE = `
    var AnnotatedComponent = template ? createComponentFromTemplate(template, styles) : component;
    var declarations = template ? [app_component_1.AppComponent, AnnotatedComponent] : [app_component_1.AppComponent];
    var story = {
        component: AnnotatedComponent,
        props: props,
    };
    return getModule(declarations, [AnnotatedComponent], [app_component_1.AppComponent], story, moduleMetadata);
`
/* tslint:enable:max-line-length */

async function execute() {
    const path = dirname(require.resolve('@storybook/angular'))
    const file = join(path, 'preview', 'angular', 'helpers.js')
    const contents = await promisify(readFile)(file, 'utf8')

    // only replace the exact search pattern
    if (!contents.includes(SEARCH)) {
        console.warn(
            chalk.yellow(
                '@storybook/angular was not patched as their source code changed or the patch is already applied.',
            ),
        )
    }

    await promisify(writeFile)(file, contents.replace(SEARCH, REPLACE), 'utf8')
}

execute().catch(e => console.error(e.toString()))
