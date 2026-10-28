import assert from 'node:assert/strict';
import test from 'node:test';
import { validateLead } from '../lib/validate-lead.ts';

const valid = {
  name: ' Ana ',
  business: ' Loja ',
  need: 'Loja virtual',
  message: ' Quero vender online. ',
  projectTitle: ' WL Streetwear ',
  source: 'portfolio',
  consent: true,
};

test('aceita e normaliza contato válido', () => {
  assert.deepEqual(validateLead(valid), {
    name: 'Ana', business: 'Loja', need: 'Loja virtual',
    message: 'Quero vender online.', projectTitle: 'WL Streetwear', source: 'portfolio',
  });
});

test('recusa contato sem consentimento, dados inválidos ou excesso de texto', () => {
  assert.equal(validateLead({ ...valid, consent: false }), null);
  assert.equal(validateLead({ ...valid, need: 'Admin' }), null);
  assert.equal(validateLead({ ...valid, message: 'x'.repeat(1201) }), null);
  assert.equal(validateLead({ ...valid, name: ' ' }), null);
});
