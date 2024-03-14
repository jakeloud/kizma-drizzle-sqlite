import { add } from '../db'
const create = (text: string) => {
  add(text)
  return 'ok'
}
export default create
