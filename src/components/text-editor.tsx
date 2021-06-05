import MDEditor from '@uiw/react-md-editor';
import {FC, useState, useEffect, useRef} from "react";

const TextEditor: FC = () => {
    const [editing, setEditing] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (ref.current && event.target && ref.current.contains(event.target as Node)) {
                return;
            }
            setEditing(false)
        };
        document.addEventListener('click', listener, { capture: true });
        return () => {
            document.removeEventListener('click', listener, { capture: true })
        }
    }, [])

    if (editing) {
        return (
            <div ref={ref}>
                <MDEditor />
            </div>
        )
    }

    return (
        <div onClick={() => setEditing(true) }>
            <MDEditor.Markdown source={'# Header'} />
        </div>
    )
}

export default TextEditor