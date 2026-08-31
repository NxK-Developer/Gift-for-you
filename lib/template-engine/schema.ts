
export type Field = { key: string; label: string; type: 'text'|'textarea'|'date'|'time'|'image'|'video'|'audio'|'cta'|'map'; required: boolean; duplicable?: boolean }
export type Section = { id: string; title: string; type: 'hero'|'names'|'story'|'gallery'|'video'|'message'|'quote'|'venue'|'countdown'|'schedule'|'family'|'cta'|'cover'|'page'; required: boolean; duplicable?: boolean; fields: Field[] }
export type TemplateSchema = { sections: Section[]; themePresets: {id:string; name:string; bg:string; primary:string}[]; fontPresets: {id:string; name:string; heading:string}[] }

export const surpriseSchema: TemplateSchema = {
  sections: [
    {id:'hero', title:'Hero Reveal', type:'hero', required:true, fields:[{key:'headline', label:'Headline', type:'text', required:true},{key:'sub', label:'Subtext', type:'textarea', required:false}]},
    {id:'names', title:'Names & Date', type:'names', required:true, fields:[{key:'name1', label:'Your Name', type:'text', required:true},{key:'name2', label:'Loved One Name', type:'text', required:true},{key:'date', label:'Date', type:'date', required:false}]},
    {id:'story', title:'Memory Story', type:'story', required:false, duplicable:true, fields:[{key:'title', label:'Memory Title', type:'text', required:true},{key:'story', label:'Story', type:'textarea', required:true}]},
    {id:'gallery', title:'Photo Gallery', type:'gallery', required:true, fields:[{key:'images', label:'Photos', type:'image', required:true}]},
    {id:'video', title:'Video Memory', type:'video', required:false, fields:[{key:'video', label:'Video', type:'video', required:false}]},
    {id:'message', title:'Heartfelt Message', type:'message', required:true, fields:[{key:'message', label:'Message', type:'textarea', required:true}]},
    {id:'quote', title:'Quote', type:'quote', required:false, fields:[{key:'quote', label:'Quote', type:'text', required:false}]},
    {id:'cta', title:'Call to Action', type:'cta', required:false, fields:[{key:'cta', label:'Button', type:'cta', required:false}]},
  ],
  themePresets: [{id:'rose-blush', name:'Rose Blush', bg:'#FFE4E6', primary:'#E11D48'},{id:'midnight-love', name:'Midnight Love', bg:'#1E1B4B', primary:'#E11D48'},{id:'golden-hour', name:'Golden Hour', bg:'#FEF3C7', primary:'#F59E0B'},{id:'sage-love', name:'Sage & Love', bg:'#ECFDF5', primary:'#059669'}],
  fontPresets: [{id:'playfair', name:'Playfair Romantic', heading:'Playfair Display'},{id:'cormorant', name:'Cormorant Elegant', heading:'Cormorant'},{id:'lora', name:'Lora Warm', heading:'Lora'}]
}

export const invitationSchema: TemplateSchema = {
  sections: [
    {id:'hero', title:'Event Title', type:'hero', required:true, fields:[{key:'eventTitle', label:'Event Title', type:'text', required:true},{key:'couple', label:'Couple/Host Names', type:'text', required:true}]},
    {id:'countdown', title:'Countdown', type:'countdown', required:true, fields:[{key:'date', label:'Event Date', type:'date', required:true},{key:'time', label:'Time', type:'time', required:true}]},
    {id:'venue', title:'Venue', type:'venue', required:true, fields:[{key:'venue', label:'Venue Name', type:'text', required:true},{key:'mapLink', label:'Google Map Link', type:'map', required:false}]},
    {id:'schedule', title:'Schedule', type:'schedule', required:false, duplicable:true, fields:[{key:'time', label:'Time', type:'time', required:true},{key:'event', label:'Event', type:'text', required:true}]},
    {id:'family', title:'Family/Host Details', type:'family', required:false, fields:[{key:'details', label:'Details', type:'textarea', required:false}]},
    {id:'gallery', title:'Gallery', type:'gallery', required:false, fields:[{key:'images', label:'Images', type:'image', required:false}]},
    {id:'cta', title:'RSVP Button', type:'cta', required:true, fields:[{key:'cta', label:'RSVP', type:'cta', required:true}]},
  ],
  themePresets: [{id:'royal', name:'Royal Gold', bg:'#FEF3C7', primary:'#D97706'},{id:'blush', name:'Blush Pink', bg:'#FFE4E6', primary:'#E11D48'}],
  fontPresets: [{id:'playfair', name:'Playfair', heading:'Playfair Display'}]
}
