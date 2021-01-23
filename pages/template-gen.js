import { useEffect, useState } from 'react';
import templateData from './/__files/templateData.json';
import Link from 'next/link'

export default function templateGenerator() {
    // States
    const [templateName, setTemplateName] = useState('');
    const [copypasta, setCopypasta] = useState('');
    const [replaceWith, setReplaceWith] = useState('');
    const [output, setOutput] = useState();
    const [copied, setCopied] = useState(false);

    // Variables
    let lowerCaseReplace = copypasta.replace(new RegExp(replaceWith !== '' && replaceWith.toLowerCase(), 'g'), "${name}");
    let upperCaseReplace = lowerCaseReplace.replace(new RegExp(replaceWith !== '' && replaceWith.toUpperCase(), 'g'), "${nameCaps}")

    let template1 = [{
        "templateName": templateName,
        "copypasta": upperCaseReplace
    }]

    let finalOutput = [
        ...templateData,
        ...template1
    ]

    // Function to copy code
    const copyCode = () => {
        const code = document.querySelector('.code');
        const tempElement = document.createElement('textarea');
        tempElement.value = code.innerHTML
        document.body.appendChild(tempElement)
        tempElement.select();
        document.execCommand('copy')
        document.body.removeChild(tempElement)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 1000);
    }
    
    // Updates output whenever template name, copypasta, and the name to replace with changes
    useEffect(() => {
        setOutput(JSON.stringify(finalOutput, undefined, 4));
    }, [templateName, copypasta, replaceWith])

    return (
        <>
        <Link href="/"><h3 className="back">{'Back'}</h3></Link>
        <div className="main-container">
            <h1>template generator</h1>
            <div className="container">
                <span className="title">Template Name</span>
                <input type="text" value={templateName} onChange={e => setTemplateName(e.target.value.toLowerCase())}></input>
            </div>
            <div className="container">
                <span className="title">Copypasta</span>
                <input type="text" value={copypasta} onChange={e => setCopypasta(e.target.value)}></input>
            </div>
            <div className="container">
                <span className="title">Replace Name</span>
                <input type="text" value={replaceWith} onChange={e => setReplaceWith(e.target.value.replace(/[\*\\\[\]\{\}\(\)\|\+\.\$\^\?\/]/g, ''))}></input>
            </div>
            <div className="code-container">
            <pre className="code">{output}</pre>
            <button className="copy-button" onClick={copyCode}>{copied ? 'Copied' : 'Copy'}</button>
            </div>
        </div>
        </>
    )
}