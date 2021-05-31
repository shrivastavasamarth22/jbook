import React, {FC, useRef} from 'react';
import MonacoEditor, {EditorDidMount} from '@monaco-editor/react';
import prettier from 'prettier'
import parser from 'prettier/parser-babel'
import codeShift from 'jscodeshift';
import Highlighter from 'monaco-jsx-highlighter';

import './code-editor.css'
import './16.1 syntax.css'

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

        monacoEditor.getModel()?.updateOptions({tabSize: 2});

        const highlighter = new Highlighter(
            // @ts-ignore
            window.monaco,
            codeShift,
            monacoEditor
        );
        highlighter.highLightOnDidChangeModelContent(
            () => {},
            () => {},
            undefined,
            () => {},
        );
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
        }).replace(/\n$/, '');

        // set the formatted value back in the editor
        editorRef.current.setValue(formatted)
    }

    return (
        <div className={"editor-wrapper"}>
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