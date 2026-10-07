import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
export function checkCopyRequest(request) {
  const violations = [];
  if (!request || typeof request !== 'object' || Array.isArray(request)) return {result:'FAIL', violations:['request']};
  if (!['Marketing','Ads'].includes(request.consumer)) violations.push('consumer');
  if (!['draft','review'].includes(request.action)) violations.push('action');
  if (request.external_effect !== undefined && request.external_effect !== false) violations.push('external_effect');
  if (request.claims !== undefined && !Array.isArray(request.claims)) violations.push('claims');
  for (const claim of Array.isArray(request.claims) ? request.claims : []) {
    if (!claim || typeof claim.source_ref !== 'string' || !claim.source_ref.trim() || claim.accepted !== true || claim.certainty !== 'KNOWN') violations.push('claim_source_acceptance');
  }
  return {result:violations.length?'FAIL':'PASS',violations};
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv.length !== 3) throw new Error('usage: check-copy-request.mjs <request.json>');
  const result=checkCopyRequest(JSON.parse(await readFile(process.argv[2],'utf8')));
  console.log(JSON.stringify(result,null,2)); process.exitCode=result.result==='PASS'?0:2;
}
