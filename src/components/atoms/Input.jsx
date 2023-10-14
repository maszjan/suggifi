

export default function Input(props) {
    return (
        <div className="flex flex-col  space-y-3 items-center justfiy-center mx-auto">
        <div className="text-yellowMotive hover:text-darkMotive transition all scale-150" icon={props.icon}>{props.icon}</div>
        <label className="text-2xl text-yellowMotive font-semibold text-left" text={props.text}>
            {props.text}
        </label>
            <input className="bg-darkMotive text-yellowMotive text-left max-w-xl outline-none rounded-xl h-8" type={props.type}>
            </input>
        </div>
    );
}