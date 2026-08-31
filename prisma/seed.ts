
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main(){
  const catBirthday = await prisma.category.upsert({ where:{slug:'birthday-websites'}, update:{}, create:{slug:'birthday-websites', name:'Birthday Websites', type:'SURPRISE'} })
  const catInvite = await prisma.category.upsert({ where:{slug:'invitations-website'}, update:{}, create:{slug:'invitations-website', name:'Invitations Website', type:'INVITATION'} })
  const catFlip = await prisma.category.upsert({ where:{slug:'flipbooks'}, update:{}, create:{slug:'flipbooks', name:'Flipbooks', type:'FLIPBOOK'} })
  const templates = [
    {slug:'midnight-birthday-surprise', title:'Midnight Birthday Surprise', subtitle:'For the one who makes my days brighter', description:'Story-based emotional birthday website', categoryId: catBirthday.id, type:'SURPRISE', occasion:['birthday'], rating:4.9, reviewCount:342, basePrice:799, salePrice:299, badge:'Best Value', isFeatured:true, isTrending:true, isPremium:false, previewImage:'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2', demoUrl:'', schema:{}, themePresets:[], fontPresets:[], validationRules:{}},
    {slug:'roka-ring-ceremony', title:'Roka & Ring Ceremony Invite', subtitle:'Two families, one celebration', description:'Elegant invitation for roka and ring ceremony', categoryId: catInvite.id, type:'INVITATION', occasion:['engagement','ring-ceremony'], rating:5.0, reviewCount:189, basePrice:1299, salePrice:599, badge:'Festive Special', isFeatured:true, isTrending:false, isPremium:true, previewImage:'https://images.unsplash.com/photo-1511285560929-80b456fea0bc', demoUrl:'', schema:{}, themePresets:[], fontPresets:[], validationRules:{}},
    {slug:'our-love-story-flipbook', title:'Our Love Story Flipbook', subtitle:'Every page, a memory', description:'Interactive flipbook with page curl', categoryId: catFlip.id, type:'FLIPBOOK', occasion:['anniversary','love'], rating:4.9, reviewCount:267, basePrice:599, salePrice:199, badge:'Premium', isFeatured:true, isTrending:true, isPremium:false, previewImage:'https://images.unsplash.com/photo-1529634597503-139d3726fed5', demoUrl:'', schema:{}, themePresets:[], fontPresets:[], validationRules:{}},
  ]
  for(const t of templates){
    await prisma.template.upsert({ where:{slug:t.slug}, update:{}, create: t as any })
  }
}
main()
