import { Code } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'HTML Formatter',
  path: '/html-formatter',
  description: 'Format and beautify HTML code with proper indentation and structure for better readability',
  keywords: ['html', 'format', 'beautify', 'pretty', 'indent', 'readable'],
  component: () => import('./html-formatter.vue'),
  icon: Code,
});