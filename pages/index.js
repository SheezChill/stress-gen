import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import templateData from './/__files/templateData.json'
import Link from 'next/link'

export default function Home() {
const bold = (strings, ...values) => {
        return values.reduce((finalString, value, index) => {
            return `${finalString}<strong>${value}</strong> ${strings[index + 1]}`
        }, strings[0])
}

  // States
  const [name, setName] = useState('keqing');
  let nameCaps = name.toUpperCase();
  const [currentTemplate, setCurrentTemplate] = useState('wangy');
  const [rawCopypasta, setRawCopypasta] = useState('${nameCaps} ${nameCaps} ${nameCaps} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${name} wangi aku mau nyiumin aroma wanginya ${name} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${nameCaps} AAAAA LUCCUUUUUUUUUUUUUUU............${nameCaps} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${name} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${name} gw ...${name} di laptop ngeliatin gw, ${name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${name} aku gak mau merelakan ${name} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${nameCaps} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH');
  const [copypasta, setCopypasta] = useState(bold`${nameCaps} ${nameCaps} ${nameCaps} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${name} wangi aku mau nyiumin aroma wanginya ${name} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${nameCaps} AAAAA LUCCUUUUUUUUUUUUUUU............${nameCaps} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${name} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${name} gw ...${name} di laptop ngeliatin gw, ${name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${name} aku gak mau merelakan ${name} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${nameCaps} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`);

  // Functions
  let changeCopyPasta = copyPastaContent => {
    setRawCopypasta(copyPastaContent);
    setCopypasta(eval('`' + copyPastaContent + '`'));
  }

  // changes copypasta if the name state changes
  useEffect(() => {
    changeCopyPasta(rawCopypasta);
  }, [name])

  return (
    <div>
      <Head>
        <title>Stress Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="Stress Generator" />
        <meta name="description" content="Horny copypasta generator." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stress-gen.vercel.app/" />
        <meta property="og:title" content="Stress Generator" />
        <meta property="og:description" content="Horny copypasta generator." />
        <meta property="og:image" content="https://raw.githubusercontent.com/SheezChill/stress-gen/master/public/image.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://stress-gen.vercel.app/" />
        <meta property="twitter:title" content="Stress Generator" />
        <meta property="twitter:description" content="Horny copypasta generator." />
        <meta property="twitter:image" content="https://raw.githubusercontent.com/SheezChill/stress-gen/master/public/image.jpg" />
      </Head>

      <div className="main-container">
        <h1>Stress Generator</h1>
        <div className="container">
          <span className="title">Name</span>
          <input type="text" value={name} onChange={e => setName(e.target.value.toLowerCase())}></input>
        </div>
        <div className="container">
          <span className="title">Templates</span>
          <div className="button-container">
            {templateData.map((templates, index) => { return <button key={index} className={currentTemplate === templates.templateName ? 'current-active' : ''} onClick={() => { setCurrentTemplate(templates.templateName); changeCopyPasta(templates.copypasta) }}>{templates.templateName}</button> })}
          </div>
        </div>
        <div className="output">{name === '' ? "input name" : name === 'sheez' ? "you're mom gay!!1!!1 don't input my name!!11!!! 🖕🖕🖕 💢💢💢" : copypasta }</div>
        <div>
          <h1>
            Generate copypasta template {''}
            <Link href="/template-gen"><a className="page-link">Here</a></Link>
          </h1>
        </div>
      </div>
    </div>
  )
}
