import React, {FC, useRef} from 'react';
import MonacoEditor, {EditorDidMount} from '@monaco-editor/react';
import prettier from 'prettier'
import parser from 'prettier/parser-babel'

interface CodeEditorProps {
    initialValue: string;

    onChange(input: string): void
}

const CodeEditor: FC<CodeEditorProps> = ({initialValue, onChange}) => {
    const editorRef = useRef<any>()

    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        editorRef.current = monacoEditor;
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        monacoEditor.getModel()?.updateOptions({tabSize: 2})
    }

    const onFormatClick = () => {
        // get current value from the editor
        const unformatted = editorRef.current.getModel().getValue();

        // format that value
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true
        })

        // set the formatted value back in the editor
        editorRef.current.setValue(formatted)
    }

    return (
        <div>
            <button className={"button button-format is-primary is-small"} onClick={onFormatClick}>Format</button>
            <MonacoEditor
                height={"500px"}
                theme={"vs-dark"}
                language={"typescript"}
                options={{
                    minimap: {
                        enabled: false
                    },
                    cursorSmoothCaretAnimation: true,
                    wordWrap: "on",
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true
                }}
                value={initialValue}
                editorDidMount={onEditorDidMount}
            />
        </div>
    )
}

export default CodeEditor;