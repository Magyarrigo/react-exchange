import "./Textarea.css";

function Textarea({classname, contents}) {
  return <p className={classname}>{contents}</p>;
}

export default Textarea;
