import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { writeFile } from 'node:fs/promises';
async function savePreview(markup) {
  assert(markup.length > 0);
  await writeFile('preview.html', '<!doctype html><html lang="en"><meta charset="utf-8"><title>Package UI fixture</title><body>' + markup + '</body></html>');
  console.log('Generated preview.html (' + markup.length + ' characters).');
}
import { RecordView } from '@x12i/fieldkit';
const record = { name: 'Example asset', summary: 'A synthetic record for the consuming application.' };
const map = { fields: [{ key: 'summary', as: 'text', label: 'Summary' }], titlePaths: ['name'] };
const markup = renderToStaticMarkup(React.createElement(RecordView, { data: record, map }));
assert(markup.includes('Example asset'));
assert(markup.includes('A synthetic record'));
await savePreview(markup);
