export default function FunctionalButton(props) {
  return (
    <button
      className="bg-darkMotive text-yellowMotive hover:bg-yellowMotive hover:text-darkMotive rounded-md font-semibold transiton-all text-center w-[250px] p-2"
      text={props.text}
      onClick={props.function}
    >
      {props.text}
    </button>
  );
}
