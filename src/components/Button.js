const Button = (props) => {
    return (<button className={`button${props.color ? " " + props.color : ""}`}
        onClick={props.onClick}
        data-attr={props.attr}>
        {props.text}
    </button>);
}

export default Button;