import{motion}from'framer-motion';
const V={once:true,margin:'-60px'};
const F={duration:0.85,ease:[0.22,1,0.36,1]};
const CD='"Cinzel Decorative",serif',CG='"Cormorant Garamond",serif';

const SYN_EN=[
{icon:'🌿',t:'Deep Ecology & Sustainability',b:'IKS viewed rivers, forests, and mountains as living entities (Prana). This ancient reverence for nature is the ultimate blueprint for the modern Circular Economy and regenerative design.'},
{icon:'🧠',t:'Neuroplasticity & Dhyana',b:'Modern neuroscience now validates what Patanjali codified in the Yoga Sutras: focused meditation physically rewires the brain\'s neural architecture, enhancing cognition and emotional regulation.'},
{icon:'⚛️',t:'The Vedantic Observer & Quantum Philosophy',b:'The parallels between Upanishadic thought and Quantum Mechanics are undeniable — in both systems, reality is a tapestry woven by the act of consciousness observing itself.'},
];
const SYN_HI=[
{icon:'🌿',t:'गहरी पारिस्थितिकी और स्थिरता',b:'भारतीय ज्ञान परंपरा में नदियों, वनों और पर्वतों को जीवंत सत्ताएँ (प्राण) माना गया। प्रकृति के प्रति यह प्राचीन श्रद्धा आधुनिक सर्कुलर इकॉनमी का मूल खाका है।'},
{icon:'🧠',t:'न्यूरोप्लास्टिसिटी और ध्यान',b:'आधुनिक तंत्रिका विज्ञान अब वही प्रमाणित करता है जो पतंजलि ने योगसूत्र में कोडीफाई किया था: ध्यान मस्तिष्क की तंत्रिका संरचना को भौतिक रूप से पुनः संयोजित करता है।'},
{icon:'⚛️',t:'वेदांत का द्रष्टा और क्वांटम दर्शन',b:'उपनिषदों की विचारधारा और क्वांटम यांत्रिकी के बीच समानताएँ अकाट्य हैं — दोनों में वास्तविकता चेतना के अवलोकन से निर्मित होती है।'},
];
const GK_EN={t:'The Gurukul Algorithm',s:'Holistic Education — Ancient Paradigm',b:'The Gurukul system did not separate the observer from the observed. Education was a sacred triad:',pts:['Adhibhautika — Understanding the material world through empirical science and craft.','Adhidaivika — Understanding the energetic and elemental world through astronomy and ecology.','Adhyatmika — Understanding the self and consciousness through philosophy and meditation.'],close:'It was the original holistic algorithm for human development — producing scientists, poets, warriors, and sages in one unified process.'};
const GK_HI={t:'गुरुकुल एल्गोरिदम',s:'समग्र शिक्षा — प्राचीन प्रतिमान',b:'गुरुकुल प्रणाली में द्रष्टा और दृश्य को अलग नहीं किया गया। शिक्षा एक पवित्र त्रिक था:',pts:['आधिभौतिक — अनुभवजन्य विज्ञान और शिल्प द्वारा भौतिक जगत की समझ।','आधिदैविक — खगोलशास्त्र और पारिस्थितिकी द्वारा ऊर्जावान जगत की समझ।','आध्यात्मिक — दर्शन और ध्यान द्वारा आत्मा और चेतना की समझ।'],close:'यह मानव विकास का मूल समग्र एल्गोरिदम था — जो एक एकीकृत प्रक्रिया में वैज्ञानिक, कवि, योद्धा और ऋषि उत्पन्न करता था।'};

export function Gurukul({hi}){
  const g=hi?GK_HI:GK_EN;
  return(
    <section id="gurukul" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={V} transition={F} className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4" style={{fontFamily:CD,background:'linear-gradient(120deg,#8B5A2B,#D4AF37,#FFFBEB,#D4AF37,#8B5A2B)',backgroundSize:'250% auto',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',animation:'gold_sweep 6s linear infinite'}}>{g.t}</h2>
          <p className="text-sm tracking-widest text-[#D4AF37]/50" style={{fontFamily:'"Cinzel",serif'}}>{g.s}</p>
        </motion.div>
        <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={V} transition={{...F,delay:0.15}}
          className="rounded-[3rem] p-10 md:p-14 border border-[#8B5A2B]/40 relative overflow-hidden"
          style={{background:'linear-gradient(135deg,rgba(42,23,0,0.92),rgba(30,14,0,0.95))',boxShadow:'inset 0 1px 0 rgba(212,175,55,0.1),0 30px 80px rgba(0,0,0,0.5)'}}>
          <div className="absolute -top-6 -right-6 text-[8rem] opacity-5 select-none" style={{fontFamily:CD}}>ज्ञान</div>
          <p className="text-base text-[#FFFBEB]/60 leading-relaxed mb-8" style={{fontFamily:CG,fontStyle:'italic',fontSize:'1.15rem'}}>{g.b}</p>
          <div className="space-y-4 mb-8">
            {g.pts.map((pt,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={V} transition={{...F,delay:0.1+i*0.12}}
                className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{background:'#D4AF37',boxShadow:'0 0 8px rgba(212,175,55,0.6)'}}/>
                <p className="text-[#FFFBEB]/65 leading-relaxed" style={{fontFamily:CG}}>{pt}</p>
              </motion.div>
            ))}
          </div>
          <div className="h-px mb-6" style={{background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.3),transparent)'}}/>
          <p className="text-[#D4AF37]/70 leading-relaxed text-center" style={{fontFamily:CG,fontStyle:'italic',fontSize:'1.05rem'}}>{g.close}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function Synthesis({hi}){
  const S=hi?SYN_HI:SYN_EN;
  const ht=hi?'आधुनिक संश्लेषण':'The Modern Synthesis';
  const hs=hi?'प्राचीन ज्ञान आज क्यों मायने रखता है':'Why IKS Matters Today';
  return(
    <section id="synthesis" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={V} transition={F} className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-3" style={{fontFamily:CD,background:'linear-gradient(120deg,#8B5A2B,#D4AF37,#FFFBEB,#D4AF37,#8B5A2B)',backgroundSize:'250% auto',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',animation:'gold_sweep 6s linear infinite'}}>{ht}</h2>
          <p className="text-sm tracking-widest text-[#D4AF37]/50" style={{fontFamily:'"Cinzel",serif'}}>{hs}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {S.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={V} transition={{...F,delay:i*0.13}}
              whileHover={{scale:1.03,boxShadow:'0 30px 80px rgba(0,0,0,0.6),0 0 50px rgba(212,175,55,0.1)'}}
              className="rounded-[2.5rem] p-8 border border-[#8B5A2B]/35 relative overflow-hidden"
              style={{background:'linear-gradient(135deg,rgba(42,23,0,0.92),rgba(30,14,0,0.95))',boxShadow:'inset 0 1px 0 rgba(212,175,55,0.08)'}}>
              <div className="text-4xl mb-5">{s.icon}</div>
              <div className="w-8 h-px mb-5" style={{background:'linear-gradient(90deg,#D4AF37,transparent)'}}/>
              <h3 className="font-bold text-lg text-[#FFFBEB]/90 mb-4" style={{fontFamily:CD,fontSize:'1rem'}}>{s.t}</h3>
              <p className="text-sm text-[#FFFBEB]/50 leading-relaxed" style={{fontFamily:CG,fontStyle:'italic'}}>{s.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
