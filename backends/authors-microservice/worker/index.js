const BASE = '/api/authors'
function corsHeaders(){ return {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'GET, OPTIONS','Access-Control-Allow-Headers':'Content-Type'} }
function json(data,status=200){ return new Response(data===undefined?null:JSON.stringify(data),{status,headers:{'Content-Type':'application/json',...corsHeaders()}}) }
function parseAuthor(row){ if(!row)return row; return {...row,books:row.books?JSON.parse(row.books):[]} }
async function findAuthor(db,id){ const row=await db.prepare('SELECT * FROM authors WHERE id = ?').bind(id).first(); return parseAuthor(row) }
export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)
    if(request.method==='OPTIONS') return new Response(null,{headers:corsHeaders()})
    if(!pathname.startsWith(BASE)) return new Response('Not found',{status:404,headers:corsHeaders()})
    const id = pathname.slice(BASE.length).replace(/^\/+/, '') || null
    const db = env.DB
    try {
      if(request.method==='GET' && !id){ const {results}=await db.prepare('SELECT * FROM authors ORDER BY CAST(id AS INTEGER)').all(); return json(results.map(parseAuthor)) }
      if(request.method==='GET' && id){ const author=await findAuthor(db,id); if(!author)return json({error:'Author not found'},404); return json(author) }
      return json({error:'Not found'},404)
    } catch(err){ return json({error:'Server error: '+err.message},500) }
  }
}
