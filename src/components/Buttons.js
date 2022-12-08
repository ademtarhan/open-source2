import Button from "../components/Button";

const Buttons = (props) => {
    return <div className="button-panel">
        <div className="text-line">
            <div className="numbers">
                <div>{props.numbers[0]}</div>
                <div>{props.numbers[1]}</div>
            </div>
            <div>{props.operation}</div>
        </div>
        <div className="panel-line">
            <Button text="C" attr="clear" onClick={props.onClick} />
            <Button text="+/-" attr="opposite" onClick={props.onClick} />
            <Button text="%" attr="percent" onClick={props.onClick} />
            <Button attr="operation" color={"orange"} text="/" onClick={props.onClick} />
        </div>
        <div className="panel-line">
            <Button text="7" attr="number" onClick={props.onClick} />
            <Button text="8" attr="number" onClick={props.onClick} />
            <Button text="9" attr="number" onClick={props.onClick} />
            <Button attr="operation" color={"orange"} text="x" onClick={props.onClick} />
        </div>
        <div className="panel-line">
            <Button text="4" attr="number" onClick={props.onClick} />
            <Button text="5" attr="number" onClick={props.onClick} />
            <Button text="6" attr="number" onClick={props.onClick} />
            <Button attr="operation" text="-" color={"orange"} onClick={props.onClick} />
        </div>
        <div className="panel-line">
            <Button text="1" attr="number" onClick={props.onClick} />
            <Button text="2" attr="number" onClick={props.onClick} />
            <Button text="3" attr="number" onClick={props.onClick} />
            <Button attr="operation" text="+" color={"orange"} onClick={props.onClick} />
        </div>
        <div className="panel-line">
            <Button text="0" attr="number" onClick={props.onClick} />
            <Button text="." attr="decimal" onClick={props.onClick} />
            <Button text="del" attr="clear" onClick={props.onClick} />
            <Button attr="equals" text="=" color={"orange"} onClick={props.onClick} />
        </div>
    </div>;
};

export default Buttons;
