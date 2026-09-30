/* Module x action permission model. Permission string = "module.action" */
const MODS=['dashboard','pos','products','lowstock','sales','customers','reports','employees','settings'];
const ACTS=['view','create','edit','delete'];
const MODLABEL={dashboard:'Dashboard',pos:'POS / Sales',products:'Products',lowstock:'Low Stock / Print',sales:'Sales History',customers:'Customers',reports:'Reports',employees:'Employees',settings:'Settings'};
const pm=(m,a=ACTS)=>a.map(x=>m+'.'+x);
const PRESETS={
 admin:MODS.flatMap(m=>pm(m)),
 manager:['dashboard','pos','products','lowstock','sales','customers','reports'].flatMap(m=>pm(m)),
 cashier:[...pm('dashboard',['view']),...pm('pos',['view','create']),...pm('customers',['view']),...pm('sales',['view'])],
 inventory:[...pm('dashboard',['view']),...pm('products',['view','create','edit']),...pm('lowstock',['view'])],
 viewer:[...pm('dashboard',['view']),...pm('products',['view']),...pm('lowstock',['view'])]};
const can=(m,a='view')=>!!(CU&&CU.perms.includes(m+'.'+a));
