import React, {FC, useRef, useEffect} from 'react';

interface PreviewProps {
    code: string;
}

const html = `
        <html>
            <head></head>
            <body>
                <div id="root">
                    <script>
                        window.addEventListener('message', (event) => {
                            try {
                                eval(event.data)
                            } catch (e) {
                                const root = document.querySelector("#root");
                                root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>>' + e + '</div>'
                            }
                        }, false)
                    </script>   
                </div>
            </body>
        </html>
    `

const Preview: FC<PreviewProps> = ({ code }): JSX.Element => {
    const iframe = useRef<any>()

    useEffect(() => {
        iframe.current.srcdoc = html;
        iframe.current.contentWindow.postMessage(code, '*')
    }, [code])

    return (
        <iframe
            title={"preview"}
            ref={iframe}
            srcDoc={html}
            sandbox={"allow-scripts"}
        />
    )
};

export default Preview;