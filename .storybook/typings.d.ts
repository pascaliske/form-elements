declare module '*.md' {
    const content: string
    export default content
}

declare namespace React {
    export type HTMLAttributeAnchorTarget = any
}
