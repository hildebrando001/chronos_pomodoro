import { Heading } from './components/Heading';

import './styles/theme.css'
import './styles/global.css'
import { TimerIcon } from 'lucide-react';

export function App() {

    return (
    <>
      <Heading>
      Olá mundo 1 
      <button>
        <TimerIcon/>
      </button>
      </Heading>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati laboriosam numquam natus, ipsa nam architecto rerum tempora non 
        laborum hic minima possimus, maiores libero, labore quae nesciunt perferendis 
        recusandae sapiente?
        </p>
    </>)
}