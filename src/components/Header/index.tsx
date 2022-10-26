// import './index.scss'
import { devDependencies } from '../../../package.json'
export function Header() {
  return <div className="p-20px text-center">vite {devDependencies.vite}</div>
}
