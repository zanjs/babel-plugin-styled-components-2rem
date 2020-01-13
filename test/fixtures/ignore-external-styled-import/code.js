import { styled } from '@material/ui'
import s from 'styled-components-2rem'

const Paragraph = s.p`
  color: green;
`

const Foo = p => <Paragraph {...p} />
const TestNormal = styled(Foo)({ color: red })
