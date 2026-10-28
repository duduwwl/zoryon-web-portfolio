import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { projects } from '../lib/portfolio.ts';

test('Love Pets and Márcio Felipe appear as real projects with live links and local covers', () => {
  const expected = [
    ['love-pets', 'https://lovepets.app.br/'],
    ['marcio-felipe-arquitetura', 'https://marciofelipearquitetura.com.br/'],
  ];

  for (const [slug, url] of expected) {
    const project = projects.find((item) => item.slug === slug);
    assert.ok(project, `${slug} must appear in the portfolio`);
    assert.equal(project.status, 'Projeto real');
    assert.equal(project.externalUrl, url);
    assert.ok(existsSync(join(process.cwd(), 'public', project.image)), `${slug} must have a local cover`);
  }
});
