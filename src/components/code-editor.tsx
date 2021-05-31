import React, {FC} from 'react';
import MonacoEditor, { EditorDidMount } from '@monaco-editor/react';

interface CodeEditorProps {
    initalValue: string;
    onChange(input: string): void
}

const CodeEditor: FC<CodeEditorProps> = ({ initalValue, onChange }) => {

    const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
        monacoEditor.onDidChangeModelContent(() => {
            onChange(getValue());
        });

        monacoEditor.getModel()?.updateOptions({ tabSize: 2 })
    }

    return (
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
            value={initalValue}
            editorDidMount={onEditorDidMount}
        />
    )
}

export default CodeEditor;