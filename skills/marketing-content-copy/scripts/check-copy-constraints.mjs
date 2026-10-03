import { readFile } from "node:fs/promises";

function parse(argv) {
  let file=null,maxChars=null,maxWords=null; const forbid=[];
  for(let i=0;i<argv.length;i++){
    const token=argv[i];
    if(token==="--file"){file=argv[++i];continue}
    if(token==="--max-chars"){maxChars=Number(argv[++i]);continue}
    if(token==="--max-words"){maxWords=Number(argv[++i]);continue}
    if(token==="--forbid"){forbid.push(argv[++i]);continue}
    throw new Error("unknown argument: "+token);
  }
  if(!file) throw new Error("--file is required");
  if(maxChars!==null&&(!Number.isSafeInteger(maxChars)||maxChars<0)) throw new Error("--max-chars must be a non-negative integer");
  if(maxWords!==null&&(!Number.isSafeInteger(maxWords)||maxWords<0)) throw new Error("--max-words must be a non-negative integer");
  return {file,maxChars,maxWords,forbid};
}
const args=parse(process.argv.slice(2));
const text=await readFile(args.file,"utf8");
const chars=[...text].length;
const words=text.trim()?text.trim().split(/\s+/u).length:0;
const violations=[];
if(args.maxChars!==null&&chars>args.maxChars) violations.push({type:"max_chars",actual:chars,limit:args.maxChars});
if(args.maxWords!==null&&words>args.maxWords) violations.push({type:"max_words",actual:words,limit:args.maxWords});
for(const term of args.forbid){
  if(text.toLocaleLowerCase().includes(term.toLocaleLowerCase())) violations.push({type:"forbidden_term",term});
}
console.log(JSON.stringify({result:violations.length?"FAIL":"PASS",chars,words,violations},null,2));
process.exitCode=violations.length?2:0;
