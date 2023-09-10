



export const Item = (props) => {
    const {name, id, number} = props.contact
    return (
      <li>
        <p>{name}</p>
        <p>{number}</p>

        <button
          type="button"
          onClick={() => {
            props.onDelete(id);
          }}
        >
          remove
        </button>
      </li>
    );
}