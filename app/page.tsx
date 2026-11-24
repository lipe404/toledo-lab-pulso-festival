"use client";
import { useState } from "react";

const dates = ["Sábado","Domingo"] as const;
type Day = typeof dates[number];
const schedule:Record<Day,readonly (readonly [string,string,string,string])[]> = {
  "Sábado":[["15:00","Estação Ruído","Experimentação eletrônica","Pátio"],["17:00","Mina Fria","Pós-punk","Galpão"],["19:30","Vagalume FM","Batidas quebradas","Pátio"],["21:00","Clube Subsolo","Sets de pista","Galpão"]],
  "Domingo":[["14:00","Banda Ferrugem","Rock alternativo","Pátio"],["16:30","Maré Magnética","Pop experimental","Galpão"],["18:00","Recorte de Luz","Projeção audiovisual","Pátio"],["20:00","Rádio Desvio","Colagem sonora","Galpão"]],
};
function SoundMark(){
 return <svg className="mark" viewBox="0 0 500 500" aria-hidden="true">
    <defs><pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#171626" opacity=".5"/></pattern></defs>
    <circle cx="250" cy="250" r="236" fill="#d6ff4d"/><circle cx="250" cy="250" r="236" fill="url(#dots)"/>
    <g className="orbit" fill="none" stroke="#1a172e">{Array.from({length:18},(_,i)=><ellipse key={i} cx="250" cy="250" rx={38+i*10.5} ry={24+i*10} transform={`rotate(${i*9+12},250,250)`} strokeWidth={i%3===0?2:1}/>)}</g>
    <path d="M75 250h104l27-70 37 153 32-109 24 26h126" fill="none" stroke="#21183a" strokeWidth="8" strokeLinejoin="bevel"/>
    <g fill="#261d44" fontFamily="monospace" fontSize="15"><text x="220" y="56">PULSO</text><text x="215" y="453">AO VIVO</text></g>
 </svg>;
}
export default function Home(){
 const [day,setDay]=useState<Day>("Sábado");
 const [saved,setSaved]=useState<string[]>([]);
 const [onlySaved,setOnlySaved]=useState(false);
 const rows=schedule[day].filter(([,name])=>!onlySaved||saved.includes(name));
 return <>
  <a className="skip" href="#principal">Ir ao conteúdo</a>
  <header className="frame"><a className="logo" href="#principal">PULSO<span>✦</span></a><nav aria-label="Principal"><a href="#sobre">Sobre</a><a href="#grade">Programação</a></nav><span className="header-tag">Projeto conceitual</span></header>
  <main id="principal">
   <section className="frame hero"><div className="hero-copy"><p className="label"><span className="ticker"></span> Música independente • Artes visuais</p><h1>PUL<span>SO</span></h1><p className="subtitle">O som da cidade<br/><i>fora de sintonia.</i></p><p className="desc">Dois dias de shows, intervenções visuais e música que não cabe numa só cena.</p><a className="btn" href="#grade">Montar minha programação</a></div><div className="visual"><SoundMark/></div></section>
   <div className="rail"><div className="frame"><span>PÁTIO DE SOM</span><span aria-hidden="true">✷</span><span>GALPÃO DE LUZ</span><span aria-hidden="true">✷</span><span>DOIS DIAS</span></div></div>
   <section className="frame about" id="sobre"><p className="label">Sobre o festival</p><h2>Do set ao show.<br/>Do grave à luz.</h2><p>O Pátio abre espaço para as bandas e batidas da tarde. Quando escurece, o Galpão junta DJs, projeções e música experimental.</p></section>
   <section id="grade" className="agenda"><div className="frame"><p className="label">Escala demonstrativa</p><h2>Na sua<br/><i>frequência.</i></h2><p>Marque atrações para montar um roteiro. A seleção vale enquanto esta página estiver aberta.</p><div className="controls"><div role="group" aria-label="Dia da programação" className="days">{dates.map(d=><button key={d} type="button" aria-pressed={d===day} onClick={()=>setDay(d)}>{d}</button>)}</div><label><input type="checkbox" checked={onlySaved} onChange={e=>setOnlySaved(e.target.checked)}/> Só favoritas</label></div><div className="count" role="status">{saved.length} {saved.length===1?"atração favorita":"atrações favoritas"}</div>
   <ul key={day} className="shows">{rows.map(([time,name,genre,stage])=><li key={name}><time>{time}</time><div><h3>{name}</h3><p>{genre} · {stage}</p></div><button type="button" aria-pressed={saved.includes(name)} aria-label={`Favoritar ${name}`} onClick={()=>setSaved(list=>list.includes(name)?list.filter(k=>k!==name):[...list,name])}>{saved.includes(name)?"★":"☆"}</button></li>)}{rows.length===0&&<li className="empty">Nenhuma atração favorita neste dia.</li>}</ul></div></section>
  </main>
  <footer className="frame"><strong>PULSO ✦</strong><p>Projeto conceitual de portfólio. Festival e atrações fictícios.</p><a href="https://toledo-felipe.vercel.app/portfolio">Portfólio de Toledo</a></footer>
 </>;
}
