const fs = require('fs-extra')
const tree = []

const readdir = ({ dirName, parentName, pre, ignore }) => {
  const filePath = `${parentName}${dirName}`
  let dirList = []
  try {
    dirList = fs.readdirSync(filePath)
  } catch (error) {}

//   console.log('readdir args', dirName, parentName, pre)
//   console.log('readdir dirList', dirList)

  if (dirList.length) {
    for (let i = 0; i < dirList.length; i++) {
      const newFileName = dirList[i]

      if (!ignore.includes(newFileName)) {
        const isLast = dirList.length - 1 === i
        const preStr = isLast ? '└── ' : '├── '

        tree.push(`${pre}${preStr}${newFileName}`)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        readdir({
          dirName: newFileName,
          parentName: `${filePath}/`,
          pre: `·    ${pre}`,
          ignore
        })
      }
    }
  }
}

const defIgnore = [
    'node_modules',
    '.git',
    '.DS_Store',
    'dist',
    '.temp',
    '.vscode',
    '.github'
]

const mkdirTreeMd = props => {
  const { treeFilePath, entryDirPath, ignore } = props || {}

  console.log('---------- mkdir-file-tree-md start ----------')
  console.log('treeFilePath: ', treeFilePath)
  console.log('entryDirPath: ', entryDirPath)


  readdir({ dirName: entryDirPath, parentName: '', pre: '', ignore: ignore || defIgnore })
  console.log(tree)

  fs.writeFile(treeFilePath, ['```', ...tree, '```'].join('\n'))


  console.log('---------- mkdir-file-tree-md end ----------')
}

module.exports = mkdirTreeMd