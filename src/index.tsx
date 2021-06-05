import 'bulmaswatch/cyborg/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import TextEditor from "./components/text-editor";

const App = () => {
  return (
    <div>
        <TextEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
