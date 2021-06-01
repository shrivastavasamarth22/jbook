import 'bulmaswatch/cyborg/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import CodeCell from "./components/code-cell";

const App = (): JSX.Element => {
    return (
        <div>
            <CodeCell />
            <CodeCell />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))