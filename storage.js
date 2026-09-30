/* localStorage wrapper – all keys prefixed pos_ */
const DB={get(k,d){try{const v=localStorage.getItem('pos_'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},
set(k,v){localStorage.setItem('pos_'+k,JSON.stringify(v))},
reset(){Object.keys(localStorage).filter(k=>k.startsWith('pos_')).forEach(k=>localStorage.removeItem(k))}};
