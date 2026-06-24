const COSTING_RULES = {
  "Split System": { labourHours: 1.25, visits: 4, materials: 18, risk: "Low" },
  "Package Unit": { labourHours: 2.5, visits: 4, materials: 55, risk: "Medium" },
  "Air Handling Unit": { labourHours: 2.75, visits: 4, materials: 70, risk: "Medium" },
  "Chiller": { labourHours: 5.5, visits: 4, materials: 155, risk: "High" },
  "Cooling Tower": { labourHours: 3.75, visits: 12, materials: 120, risk: "High" },
  "Exhaust Fan": { labourHours: 0.85, visits: 2, materials: 12, risk: "Low" },
  "BMS / Controls": { labourHours: 2, visits: 4, materials: 35, risk: "Medium" },
  "Fan Coil Unit": { labourHours: 0.75, visits: 4, materials: 10, risk: "Low" }
};
const PARAMOUNT_SETTINGS = { labourRate: 135, vehiclePerVisit: 25, overheadPercent: 0.12, adminPercent: 0.08, contingencyPercent: 0.08 };
const DEMO_CONTRACTS = [
  { id:"PMA-26001", customerName:"Southbank Data Hall", siteAddress:"81 Riverside Drive, Southbank VIC", contactPerson:"Operations Lead", email:"ops@southbankdatahall.com.au", phone:"03 9000 1111", startDate:"2026-07-01", term:12, margin:38, status:"Active", assets:[{type:"Chiller",quantity:2,frequency:"Quarterly"},{type:"Air Handling Unit",quantity:8,frequency:"Quarterly"},{type:"BMS / Controls",quantity:1,frequency:"Quarterly"}]},
  { id:"PMA-26002", customerName:"Mulgrave Business Park", siteAddress:"39 Geddes Street, Mulgrave VIC", contactPerson:"Facilities Manager", email:"facilities@mulgravebp.com.au", phone:"03 9561 3333", startDate:"2026-06-15", term:12, margin:35, status:"Outstanding", assets:[{type:"Package Unit",quantity:6,frequency:"Quarterly"},{type:"Exhaust Fan",quantity:10,frequency:"Six Monthly"}]},
  { id:"PMA-26003", customerName:"Alexandria Logistics", siteAddress:"34 Ralph Street, Alexandria NSW", contactPerson:"Site Manager", email:"site@alexandrialogistics.com.au", phone:"02 8271 0822", startDate:"2026-05-01", term:12, margin:32, status:"Draft", assets:[{type:"Split System",quantity:18,frequency:"Quarterly"},{type:"Air Handling Unit",quantity:2,frequency:"Quarterly"}]},
  { id:"PMA-26004", customerName:"Morningside Industrial", siteAddress:"160 Lytton Road, Morningside QLD", contactPerson:"Maintenance Manager", email:"maintenance@morningsideindustrial.com.au", phone:"07 0000 0000", startDate:"2026-04-01", term:12, margin:36, status:"Active", assets:[{type:"Cooling Tower",quantity:1,frequency:"Monthly"},{type:"Package Unit",quantity:4,frequency:"Quarterly"}]}
];
