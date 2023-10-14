import Input from '../atoms/Input';
import { BsFillCalendarDateFill, BsPcDisplay } from 'react-icons/bs';
import { MdMood } from 'react-icons/md';

const DATA = [
    {
        id: "1",
        text: "Your Birth date",
        type: 'date',
        icon: <BsFillCalendarDateFill/>
    },
    {
        id: "2",
        text: "Game or Movie?",
        type: 'text',
        icon: <BsPcDisplay/>
    },
    {
        id: "3",
        text: "Your today mood?",
        type: 'text',
        icon: <MdMood/>
    },
]

export default function InputCard() {
    return (
        <div className='flex flex-col space-y-3'>
            {DATA.map((input => (<Input
             key={input.id} 
             text={input.text} 
             type={input.type}
             icon={input.icon} 
             />
             )))}
        </div>
    );
}