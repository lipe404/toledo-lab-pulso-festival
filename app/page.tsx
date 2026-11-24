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
   <section className="frame hero"><div className="hero-copy"><p className="label"><span className="ticker"></span> Música independente • Artes visuais</p><h1>PUL<span>SO</span></h1><p className="subtitle">O som da cidade<br/><i>fora de sintonia.</i></p><p className="desc">Dois dias de shows, intervenções visuais e música que não cabe numa só cena.</p><a className="btn" href="#grade">Montar minha programação</a></div><div className="visual"><div className="stage-image" role="img" aria-label="Público com mãos erguidas diante de palco com luzes violetas"/><SoundMark/><span className="stamp">SOM • LUZ • CIDADE</span></div></section>
   <div className="rail"><div className="frame"><span>PÁTIO DE SOM</span><span aria-hidden="true">✷</span><span>GALPÃO DE LUZ</span><span aria-hidden="true">✷</span><span>DOIS DIAS</span></div></div>
   <section className="frame about" id="sobre"><p className="label">Sobre o festival</p><h2>Do set ao show.<br/>Do grave à luz.</h2><p>O Pátio abre espaço para as bandas e batidas da tarde. Quando escurece, o Galpão junta DJs, projeções e música experimental.</p></section>
   <section className="frame stages" aria-label="Os dois espaços">
    <article className="stage-card patio"><div className="stage-photo patio-photo" role="img" aria-label="Vocalista se apresentando em palco com fumaça e luz vermelha"/><div className="stage-card-detail"><svg viewBox="0 0 42 42" fill="none" aria-hidden="true"><circle cx="21" cy="21" r="16" stroke="currentColor"/><path d="M2 21h38M21 2v38M8 8l26 26M8 34 34 8" stroke="currentColor" strokeWidth="1.5"/></svg><div><h3>Pátio de Som</h3><p>Bandas, batidas e um palco aberto para circular.</p></div></div></article>
    <article className="stage-card galpao"><div className="stage-photo galpao-photo" role="img" aria-label="Público acompanha palco com projeção e feixes de luz colorida"/><div className="stage-card-detail"><svg viewBox="0 0 42 42" fill="none" aria-hidden="true"><path d="M2 37 21 4l19 33H2Zm10-8h18M21 11v25m-9-7 9-10 9 10" stroke="currentColor" strokeWidth="1.6"/></svg><div><h3>Galpão de Luz</h3><p>Eletrônica, projeções e sets que vão até o fim da noite.</p></div></div></article>
   </section>
   <section id="grade" className="agenda"><div className="frame"><p className="label">Escala demonstrativa</p><h2>Na sua<br/><i>frequência.</i></h2><p>Marque atrações para montar um roteiro. A seleção vale enquanto esta página estiver aberta.</p><div className="controls"><div role="group" aria-label="Dia da programação" className="days">{dates.map(d=><button key={d} type="button" aria-pressed={d===day} onClick={()=>setDay(d)}>{d}</button>)}</div><label><input type="checkbox" checked={onlySaved} onChange={e=>setOnlySaved(e.target.checked)}/> Só favoritas</label></div><div className="count" role="status">{saved.length} {saved.length===1?"atração favorita":"atrações favoritas"}</div>
   <ul key={day} className="shows">{rows.map(([time,name,genre,stage])=><li key={name}><time>{time}</time><div><h3>{name}</h3><p>{genre} · {stage}</p></div><button type="button" aria-pressed={saved.includes(name)} aria-label={`Favoritar ${name}`} onClick={()=>setSaved(list=>list.includes(name)?list.filter(k=>k!==name):[...list,name])}>{saved.includes(name)?"★":"☆"}</button></li>)}{rows.length===0&&<li className="empty">Nenhuma atração favorita neste dia.</li>}</ul></div></section>
   <section className="frame guide" aria-labelledby="guide-title"><div><p className="label">Informações da demonstração</p><h2 id="guide-title">Antes de ir.</h2></div><div><details><summary>Quando cada palco começa?</summary><p>Os primeiros shows do Pátio aparecem às 15h no sábado e às 14h no domingo. Os horários da grade são fictícios.</p></details><details><summary>Onde ficam as atrações favoritas?</summary><p>Seu roteiro fica só nesta aba. Não pedimos login, e nada é enviado ou guardado depois que você fecha ou recarrega a página.</p></details><details><summary>O festival tem ingressos?</summary><p>Não. O Pulso é um projeto visual de portfólio. Não há evento, bilheteria ou local para visitar.</p></details></div></section>
  </main>
  <footer className="frame"><strong>PULSO ✦</strong><p>Projeto conceitual de portfólio. Festival e atrações fictícios.</p><a href="https://toledo-felipe.vercel.app/portfolio">Portfólio de Toledo</a></footer>
 </>;
}
