import{motion}from'framer-motion';
const V={once:true,margin:'-60px'};
const F={duration:0.85,ease:[0.22,1,0.36,1]};
const CD='"Cinzel Decorative",serif',CG='"Cormorant Garamond",serif';
const ERAS_EN=[
{y:'1500+ BCE',t:'Shruti & Smriti',b:'The Oral Transmission of Cosmic Data. Before written text, knowledge was preserved through perfect phonetic chanting, demonstrating early understanding of acoustics, memory encoding, and cymatics.'},
{y:'800 BCE',t:'The Sulba Sutras',b:'The Geometry of Altars. The foundational texts of geometry and early calculus, containing the earliest expressions of the Pythagorean theorem — long before Pythagoras.'},
{y:'500 CE',t:'The Golden Age of Sciences',b:'The Era of Aryabhata & Sushruta. The formulation of zero (Shunya), the calculation of Pi, heliocentrism, and the world\'s first advanced plastic surgery techniques.'},
];
const ERAS_HI=[
{y:'1500+ ईसा पूर्व',t:'श्रुति और स्मृति',b:'ब्रह्मांडीय ज्ञान का मौखिक प्रसारण। लिखित ग्रंथों से पहले, ज्ञान को सटीक ध्वन्यात्मक जप द्वारा संरक्षित किया गया था — ध्वनि, स्मृति और साइमैटिक्स की प्रारंभिक समझ।'},
{y:'800 ईसा पूर्व',t:'शुल्ब सूत्र',b:'वेदियों की ज्यामिति। ज्यामिति और प्रारंभिक कलन की आधारभूत पाठ्यसामग्री, जिसमें पाइथागोरस से बहुत पहले पाइथागोरस प्रमेय के प्रारंभिक प्रमाण हैं।'},
{y:'500 ईसवी',t:'विज्ञान का स्वर्ण युग',b:'आर्यभट्ट और सुश्रुत का युग। शून्य (शून्य) का सूत्रीकरण, पाई की गणना, सूर्यकेंद्रवाद और विश्व की पहली उन्नत शल्य चिकित्सा तकनीकें।'},
];
export default function Timeline({hi}){
  const ERAS=hi?ERAS_HI:ERAS_EN;
  const ht=hi?'चेतना का कालक्रम':'Chronology of Consciousness';
  return(
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={V} transition={F} className="text-center mb-20">
          <div className="h-px mb-8" style={{background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.35),transparent)'}}/>
          <h2 className="font-bold text-4xl md:text-5xl" style={{fontFamily:CD,background:'linear-gradient(120deg,#8B5A2B,#D4AF37,#FFFBEB,#D4AF37,#8B5A2B)',backgroundSize:'250% auto',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',animation:'gold_sweep 6s linear infinite'}}>{ht}</h2>
          <div className="h-px mt-8" style={{background:'linear-gradient(90deg,transparent,rgba(212,175,55,0.35),transparent)'}}/>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{background:'linear-gradient(180deg,transparent,rgba(212,175,55,0.4),rgba(212,175,55,0.2),transparent)'}}/>
          <div className="space-y-16">
            {ERAS.map((e,i)=>{
              const left=i%2===0;
              return(
                <motion.div key={i} initial={{opacity:0,x:left?-50:50}} whileInView={{opacity:1,x:0}} viewport={V} transition={{...F,delay:i*0.1}}
                  className={`relative flex items-center gap-8 ${left?'flex-row':'flex-row-reverse'}`}>
                  <div className={`flex-1 ${left?'text-right pr-8':'text-left pl-8'}`}>
                    <div className="inline-block rounded-[2rem] p-6 border border-[#8B5A2B]/40" style={{background:'linear-gradient(135deg,rgba(42,23,0,0.92),rgba(30,14,0,0.95))',boxShadow:'inset 0 1px 0 rgba(212,175,55,0.1)'}}>
                      <p className="text-xs mb-2 tracking-widest" style={{color:'#D4AF37',fontFamily:'"Cinzel",serif',opacity:0.7}}>{e.y}</p>
                      <h3 className="font-bold text-lg text-[#FFFBEB]/90 mb-3" style={{fontFamily:CD}}>{e.t}</h3>
                      <p className="text-sm text-[#FFFBEB]/50 leading-relaxed" style={{fontFamily:CG,fontStyle:'italic'}}>{e.b}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#D4AF37] flex items-center justify-center z-10" style={{background:'#1a0500'}}>
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]"/>
                  </div>
                  <div className="flex-1"/>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
