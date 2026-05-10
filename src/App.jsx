import{useState,useEffect,useRef,useMemo}from'react';
import{motion,AnimatePresence}from'framer-motion';
import{Globe,Sigma,Leaf,Telescope,Compass}from'lucide-react';
import Timeline from'./Timeline';
import{Gurukul,Synthesis}from'./Sections';

const T={
en:{brand:'IKS',nav:['Pillars','Wisdom','Scrolls'],badge:'✦ The Ancient Operating System of the Universe',title:'INDIAN KNOWLEDGE\nSYSTEM',sub:'The original blueprint of science, consciousness, and the universe.',cta:'Activate Consciousness',close:'Close the Portal',
pillars:[
{t:'Vedic Mathematics',s:'Algorithmic Genesis',b:'Infinite series and binary logic formulated millennia before silicon. The Kerala School predated Newton by 250 years.'},
{t:'Ayurveda',s:'Bio-Harmonic Wellness',b:'Advanced systemic framework for cellular epigenetic harmony. Charaka catalogued 700 herbs; Sushruta performed surgery 2,600 years before anaesthesia.'},
{t:'Khagola Shastra',s:'Cosmic Cartography',b:'Precise mapping of planetary orbits and the speed of light using pure mathematical observation — no lenses, no telescopes.'},
{t:'Vastu Shastra',s:'Resonant Spatial Engineering',b:"Structures aligned with Earth's magnetic fields and solar geometry for spaces of absolute energetic resonance."},
],
scrolls:[
{s:'Karmanye Vadhikaraste, Ma Phaleshu Kadachana',t:'The Algorithm of Action.',b:'Focus entirely on execution without being paralyzed by the anxiety of outcome. Absolute detachment yields absolute precision.'},
{s:'Vidya Dadati Vinayam',t:'Knowledge Begets Humility.',b:'In a universe of infinite complexity, the ultimate mark of an advanced intellect is the realization of how much remains unknown.'},
{s:'Ekam Sat Vipra Bahudha Vadanti',t:'Truth Is One; the Wise Call It by Many Names.',b:'The ancient framework for open-mindedness, scientific inquiry, and cognitive flexibility.'},
{s:'Yatha Drishti Tatha Srishti',t:'As Is Your Vision, So Is Your World.',b:'The ancient psychological understanding that consciousness actively shapes the reality it observes — the Observer Effect.'},
],
wsTitle:'Ancient Scrolls of Wisdom',footer:'INDIAN KNOWLEDGE SYSTEM',footSub:'University Practical · Built with reverence'},
hi:{brand:'भा.ज्ञा',nav:['स्तंभ','ज्ञान','श्लोक'],badge:'✦ ब्रह्मांड का मूल संचालन तंत्र',title:'भारतीय ज्ञान\nपरंपरा',sub:'विज्ञान, चेतना और ब्रह्मांड का मूल खाका।',cta:'चेतना जागृत करें',close:'पोर्टल बंद करें',
pillars:[
{t:'वैदिक गणित',s:'एल्गोरिथम उत्पत्ति',b:'सिलिकॉन से सदियों पहले अनंत श्रृंखला और बाइनरी लॉजिक — केरल स्कूल ने न्यूटन से 250 वर्ष पूर्व यह खोजा।'},
{t:'आयुर्वेद',s:'जैव-सामंजस्य कल्याण',b:'एपिजेनेटिक सामंजस्य के लिए उन्नत प्रणाली। चरक ने 700 जड़ी-बूटियाँ सूचीबद्ध कीं।'},
{t:'खगोल शास्त्र',s:'ब्रह्मांडीय मानचित्रण',b:'बिना दूरबीन के ग्रहों की कक्षाओं और प्रकाश की गति की सटीक गणना।'},
{t:'वास्तु शास्त्र',s:'गुंजयमान स्थानिक अभियांत्रिकी',b:'पृथ्वी के चुंबकीय क्षेत्र और सौर ज्यामिति के अनुरूप संरचनाएँ।'},
],
scrolls:[
{s:'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',t:'कर्म का एल्गोरिदम।',b:'परिणाम की चिंता किए बिना अपने कर्तव्य के निष्पादन पर पूरी तरह ध्यान केंद्रित करें।'},
{s:'विद्या ददाति विनयम्',t:'ज्ञान विनम्रता देता है।',b:'अनंत जटिलता के ब्रह्मांड में, एक उन्नत बुद्धि की पहचान यह जानना है कि कितना अज्ञात है।'},
{s:'एकं सत् विप्रा बहुधा वदन्ति',t:'सत्य एक है; विद्वान इसे अनेक नामों से पुकारते हैं।',b:'वैज्ञानिक जिज्ञासा और संज्ञानात्मक लचीलेपन के लिए प्राचीन ढांचा।'},
{s:'यथा दृष्टि तथा सृष्टि',t:'जैसी दृष्टि, वैसी सृष्टि।',b:'चेतना वास्तविकता को सक्रिय रूप से आकार देती है — प्राचीन प्रेक्षक प्रभाव।'},
],
wsTitle:'ज्ञान के प्राचीन पत्र',footer:'भारतीय ज्ञान परंपरा',footSub:'विश्वविद्यालय प्रयोग · श्रद्धा से निर्मित'},
};

const ICONS=[Sigma,Leaf,Telescope,Compass];
const DURS=[4.2,5.0,3.7,4.8];
const ACC=['#D4AF37','#6EE7B7','#A5B4FC','#FCD34D'];

function Cursor(){
  const d=useRef(null),r=useRef(null);
  useEffect(()=>{
    const fn=e=>{[d,r].forEach(x=>{if(x.current){x.current.style.left=e.clientX+'px';x.current.style.top=e.clientY+'px';}});};
    window.addEventListener('mousemove',fn);return()=>window.removeEventListener('mousemove',fn);
  },[]);
  return<><div ref={d} className="cursor-dot"/><div ref={r} className="cursor-ring"/></>;
}

function Embers(){
  const E=useMemo(()=>Array.from({length:25},(_,i)=>({id:i,left:Math.random()*100,size:3+Math.random()*5,dur:4+Math.random()*8,delay:Math.random()*6,dx:(Math.random()-.5)*80})),[]);
  return(
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {E.map(e=>(
        <motion.div key={e.id} style={{left:`${e.left}%`,bottom:-20,width:e.size,height:e.size,borderRadius:'50%',background:'radial-gradient(circle,#fbbf24,#f97316)',boxShadow:`0 0 ${e.size*3}px ${e.size}px rgba(249,115,22,0.6)`,position:'absolute'}}
          animate={{y:[0,-(600+Math.random()*400)],x:[0,e.dx],opacity:[0,0.9,0.6,0]}}
          transition={{duration:e.dur,repeat:Infinity,delay:e.delay,ease:'easeOut'}}/>
      ))}
    </div>
  );
}

function Shatkona({size=300}){
  const c=size/2,R=size*0.38;
  const hex=Array.from({length:6},(_,i)=>{const a=(i*60-90)*Math.PI/180;return`${c+R*Math.cos(a)},${c+R*Math.sin(a)}`;}).join(' ');
  const tri1=Array.from({length:3},(_,i)=>{const a=(i*120-90)*Math.PI/180;return`${c+R*Math.cos(a)},${c+R*Math.sin(a)}`;}).join(' ');
  const tri2=Array.from({length:3},(_,i)=>{const a=(i*120+90)*Math.PI/180;return`${c+R*Math.cos(a)},${c+R*Math.sin(a)}`;}).join(' ');
  const rings=[0.15,0.3,0.5,0.65,0.85,1.1,1.35];
  return(
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      {rings.map((f,i)=>(
        <motion.circle key={i} cx={c} cy={c} r={R*f} stroke="#D4AF37" strokeWidth={i<5?0.7:0.4}
          strokeOpacity={0.08+i*0.03} strokeDasharray={i%2===0?'4 6':'2 8'}
          animate={{scale:[1,1.04,1],opacity:[0.4,0.7,0.4]}}
          transition={{duration:3+i*0.4,repeat:Infinity,ease:'easeInOut'}}/>
      ))}
      {[0,30,60,90,120,150].map((deg,i)=>{
        const a=deg*Math.PI/180;
        return<line key={i} x1={c+R*0.15*Math.cos(a)} y1={c+R*0.15*Math.sin(a)} x2={c+R*1.35*Math.cos(a)} y2={c+R*1.35*Math.sin(a)} stroke="#D4AF37" strokeWidth="0.4" strokeOpacity="0.1"/>;
      })}
      <polygon points={tri1} fill="rgba(212,175,55,0.06)" stroke="#D4AF37" strokeWidth="2" strokeOpacity="0.9" strokeLinejoin="round"/>
      <polygon points={tri2} fill="rgba(249,115,22,0.06)" stroke="#f97316" strokeWidth="2" strokeOpacity="0.85" strokeLinejoin="round"/>
      <polygon points={hex} fill="none" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.3"/>
      {[0.22,0.14,0.07].map((r,i)=>(
        <motion.circle key={i} cx={c} cy={c} r={R*r} fill={i===2?'#D4AF37':'none'} stroke="#D4AF37"
          strokeWidth={i===2?0:1} strokeOpacity={0.5-i*0.1} fillOpacity={i===2?0.9:0}
          animate={i===2?{scale:[1,1.2,1],opacity:[0.8,1,0.8]}:{}}
          transition={{duration:2,repeat:Infinity,ease:'easeInOut'}}/>
      ))}
    </svg>
  );
}

function ShatkonaOverlay({t,onClose}){
  return(
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.4}}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{background:'rgba(5,2,0,0.96)',backdropFilter:'blur(24px)'}}
      onClick={onClose}>
      {[80,140,210,290,380].map((r,i)=>(
        <motion.div key={i} style={{position:'absolute',width:r*2,height:r*2,borderRadius:'50%',border:`1px solid rgba(212,175,55,${0.5-i*0.08})`,boxShadow:`0 0 ${20+i*10}px rgba(212,175,55,0.2)`}}
          animate={{scale:[1,2.5+i*0.3],opacity:[0.7,0]}}
          transition={{duration:2.5,repeat:Infinity,delay:i*0.45,ease:'easeOut'}}/>
      ))}
      <motion.div initial={{scale:0,rotate:-120}} animate={{scale:1,rotate:0}} exit={{scale:0,opacity:0}}
        transition={{duration:1,ease:[0.22,1,0.36,1]}} className="relative flex flex-col items-center z-10"
        onClick={e=>e.stopPropagation()}>
        <motion.div animate={{rotate:360}} transition={{duration:40,repeat:Infinity,ease:'linear'}} style={{filter:'drop-shadow(0 0 30px rgba(212,175,55,0.8)) drop-shadow(0 0 80px rgba(249,115,22,0.4))'}}>
          <Shatkona size={Math.min(340,window.innerWidth*0.8)}/>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.span animate={{scale:[1,1.18,1],opacity:[0.85,1,0.85]}} transition={{duration:2,repeat:Infinity}}
            style={{fontFamily:'"Cinzel Decorative",serif',fontSize:'3rem',color:'#D4AF37',textShadow:'0 0 30px rgba(212,175,55,1),0 0 80px rgba(249,115,22,0.7)',WebkitTextFillColor:'#D4AF37',lineHeight:1}}>
            ॐ
          </motion.span>
        </div>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.8}} className="text-center mt-6 px-6">
          <p style={{fontFamily:'"Cinzel Decorative",serif',fontSize:'1.1rem',color:'#D4AF37',letterSpacing:'0.1em'}} className="mb-2">ॐ तत् सत्</p>
          <p className="manuscript text-sm mb-8">Consciousness Activated. The Yantra of Infinite Knowledge.</p>
          <button onClick={onClose} className="btn-ancient px-8 py-3 rounded-full text-xs">{t.close}</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function Navbar({hi,setHi,t}){
  const[solid,setSolid]=useState(false);
  useEffect(()=>{const fn=()=>setSolid(window.scrollY>60);window.addEventListener('scroll',fn);return()=>window.removeEventListener('scroll',fn);},[]);
  return(
    <motion.nav initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8}}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solid?'backdrop-blur-xl bg-[#0e0800]/70 border-b border-[#8B5A2B]/30':''}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <span style={{fontFamily:'"Cinzel Decorative",serif'}} className="text-[#D4AF37] text-lg tracking-widest font-bold">{t.brand}</span>
        <div className="hidden md:flex gap-8 text-sm text-[#FFFBEB]/40" style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic'}}>
          {t.nav.map((l,i)=><a key={i} href={`#${['pillars','wisdom','scrolls'][i]}`} className="hover:text-[#D4AF37] transition-colors">{l}</a>)}
        </div>
        <button onClick={()=>setHi(v=>!v)} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B5A2B]/40 bg-[#2A1700]/50 text-[#D4AF37]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-all text-xs" style={{fontFamily:'"Cinzel",serif'}}>
          <Globe className="w-3.5 h-3.5"/>{hi?'EN':'हिं'}
        </button>
      </div>
    </motion.nav>
  );
}

function Hero({t,onActivate}){
  return(
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 text-center overflow-hidden">
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.7}}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#8B5A2B]/40 bg-[#2A1700]/50 text-[#D4AF37]/60 text-xs tracking-widest uppercase mb-12"
        style={{fontFamily:'"Cinzel",serif'}}>
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"/>{t.badge}
      </motion.div>
      <motion.h1 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:1.1,ease:[0.22,1,0.36,1]}}
        className="gold-ink font-bold leading-none tracking-tight mb-8 whitespace-pre-line text-5xl md:text-7xl lg:text-8xl"
        style={{fontFamily:'"Cinzel Decorative",serif'}}>
        {t.title}
      </motion.h1>
      <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:0.9,duration:0.8}}
        className="w-32 h-px mx-auto mb-8" style={{background:'linear-gradient(90deg,transparent,#D4AF37,transparent)'}}/>
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1,duration:0.8}}
        className="text-lg md:text-xl text-[#FFFBEB]/55 max-w-2xl mx-auto leading-relaxed mb-14 font-light"
        style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic'}}>
        {t.sub}
      </motion.p>
      <motion.button initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:1.2,duration:0.7}}
        onClick={onActivate} className="btn-ancient px-12 py-4 rounded-[3rem] text-sm">
        ✦ &nbsp;{t.cta}
      </motion.button>
    </section>
  );
}

function Pillars({t}){
  return(
    <section id="pillars" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="scroll-rule mb-8"/>
          <h2 className="gold-ink text-4xl md:text-5xl font-bold" style={{fontFamily:'"Cinzel Decorative",serif'}}>The Four Pillars</h2>
          <div className="scroll-rule mt-8"/>
        </div>
        <div className="space-y-6">
          {t.pillars.map((p,i)=>{
            const Icon=ICONS[i];
            return(
              <motion.div key={i} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-60px'}} transition={{duration:0.85,delay:i*0.1}}>
                <motion.div animate={{y:[0,-14,0]}} transition={{duration:DURS[i],repeat:Infinity,ease:'easeInOut'}}
                  whileHover={{scale:1.015,boxShadow:`0 30px 80px rgba(0,0,0,0.7),0 0 50px ${ACC[i]}22`}}
                  className="tamra rounded-[3rem] p-8 md:p-10">
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border border-[#8B5A2B]/40"
                      style={{background:`${ACC[i]}15`,boxShadow:`0 0 20px ${ACC[i]}33`}}>
                      <Icon className="w-7 h-7" style={{color:ACC[i]}}/>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.2em] uppercase mb-2 font-semibold" style={{color:ACC[i],opacity:0.85,fontFamily:'"Cinzel",serif'}}>{p.s}</p>
                      <h3 className="font-bold text-xl md:text-2xl text-[#FFFBEB]/90 mb-3" style={{fontFamily:'"Cinzel Decorative",serif'}}>{p.t}</h3>
                      <p className="text-base text-[#FFFBEB]/50 leading-relaxed" style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic'}}>{p.b}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Scrolls({t}){
  return(
    <section id="scrolls" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="scroll-rule mb-8"/>
          <h2 className="gold-ink text-4xl md:text-5xl font-bold" style={{fontFamily:'"Cinzel Decorative",serif'}}>{t.wsTitle}</h2>
          <div className="scroll-rule mt-8"/>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {t.scrolls.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}} transition={{duration:0.8,delay:i*0.1}}
              whileHover={{scale:1.015,boxShadow:'0 20px 60px rgba(0,0,0,0.6),0 0 40px rgba(212,175,55,0.08)'}}
              className="tamra rounded-[2.5rem] p-8 relative">
              <div className="relative z-10">
                <div className="w-8 h-px mb-5" style={{background:'linear-gradient(90deg,#D4AF37,transparent)'}}/>
                <p className="text-base md:text-lg text-[#D4AF37]/80 mb-4 leading-relaxed" style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic'}}>
                  "{s.s}"
                </p>
                <p className="text-sm text-[#FFFBEB]/80 font-semibold mb-3" style={{fontFamily:'"Cinzel",serif',letterSpacing:'0.06em'}}>{s.t}</p>
                <p className="text-sm text-[#FFFBEB]/45 leading-relaxed" style={{fontFamily:'"Cormorant Garamond",serif'}}>{s.b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App(){
  const[hi,setHi]=useState(false);
  const[awake,setAwake]=useState(false);
  const t=hi?T.hi:T.en;
  return(
    <div className="relative min-h-screen" style={{background:'radial-gradient(ellipse at 50% 85%,#3a0e00 0%,#1a0500 40%,#0e0800 100%)'}}>
      <Cursor/>
      <Embers/>
      <AnimatePresence>{awake&&<ShatkonaOverlay t={t} onClose={()=>setAwake(false)}/>}</AnimatePresence>
      <div className="relative z-10">
        <Navbar hi={hi} setHi={setHi} t={t}/>
        <Hero t={t} onActivate={()=>setAwake(true)}/>
        <Pillars t={t}/>
        <Timeline hi={hi}/>
        <Gurukul hi={hi}/>
        <Scrolls t={t}/>
        <Synthesis hi={hi}/>
        <footer className="py-14 px-6" style={{borderTop:'1px solid rgba(212,175,55,0.1)'}}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-[#FFFBEB]/80 text-base font-bold tracking-widest mb-1" style={{fontFamily:'"Cinzel Decorative",serif'}}>{t.footer}</p>
              <p className="text-[#D4AF37]/35 text-xs tracking-wider" style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic'}}>{t.footSub}</p>
              <p className="text-[#D4AF37]/40 text-xs mt-3" style={{fontFamily:'"Cormorant Garamond",serif',fontStyle:'italic'}}>Designed &amp; Developed for the IKS Practical by <span style={{color:'#D4AF37',opacity:0.7}}>Ayush Rao</span>. Preserving the past, coding the future.</p>
            </div>
            <p className="text-[#D4AF37]/25 text-xs" style={{fontFamily:'"Cinzel",serif'}}>© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
