import 'bulmaswatch/cyborg/bulmaswatch.min.css';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import bundle from './bundler'
import CodeEditor from "./components/code-editor";
import Preview from "./components/Preview";

const App = (): JSX.Element => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('')

    const onClick = async () => {
        const output = await bundle(input)
        setCode(output)
    }

    return (
        <div>
            <CodeEditor
                initialValue={""}
                onChange={(value) => {
                    setInput(value)
                }}
            />
            <div>
                <button onClick={onClick}>Submit</button>
                <Preview code={code}/>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))