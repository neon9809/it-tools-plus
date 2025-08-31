import HtmlMinifier from './HtmlMinifier.vue'
import { defineTool } from '../tool';
import { Code } from '@vicons/tabler';
export const tool = defineTool({
  name: 'HTML Minifier',
  path: '/html-minifier',
  component: HtmlMinifier,
  categories: ['Web', 'Code'],
  description: 'Minify and optimize HTML code in the browser (remove comments, collapse whitespace).',
  keywords: ['html', 'minify', 'compress', 'optimize'],
  icon: Code,
});
