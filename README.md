# mkdir-file-tree-md

file tree as .md file

## Install

``` bash
pnpm add mkdir-file-tree-md
```

## Use

```js
const { resolve } = require('path')
const mkdirTreeMd = require('mkdir-file-tree-md')

async function run() {
    mkdirTreeMd({
        entryDirPath: resolve(__dirname, '.'),
        treeFilePath: resolve(__dirname, './DIR_TREE.md'),
        ignore: [
        'node_modules',
        '.git',
        '.DS_Store',
        'dist',
        '.temp',
        '.vscode',
        '.github'
        ]
    })
}

run()
```

## Args

```js
defIgnore = [
    'node_modules',
    '.git',
    '.DS_Store',
    'dist',
    '.temp',
    '.vscode',
    '.github'
]
```
