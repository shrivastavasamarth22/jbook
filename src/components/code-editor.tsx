import React, {FC} from 'react';
import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
    initalValue: string;
}

const CodeEditor: FC<CodeEditorProps> = ({ initalValue }) => {
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
        />
    )
}

export default CodeEditor;