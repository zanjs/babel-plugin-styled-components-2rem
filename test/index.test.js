import path from 'path'
import { create } from 'babel-test'
import { toMatchFile } from 'jest-file-snapshot'

expect.extend({ toMatchFile })

const { fixtures } = create({ babelrc: true })

fixtures('babel-plugin-styled-components-2rem', path.join(__dirname, 'fixtures'))
