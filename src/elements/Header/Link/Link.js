import "./Link.css";

function Link({ id, text }) {
  return (
    <li className="navElement">
      <a className="navLink" href={id}>
        {text}
      </a>
    </li>
  );
}

export default Link;
