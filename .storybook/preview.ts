import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: {
            order: [
                'project-setup',
                [
                  'Node versioning',
                  'Managing dependencies',
                  'nextjs',
                  ['Getting Started', 'Environmental Variables', 'Authentication'],
                  'gitignore'
                ],
                'libraries',
                'code-qa',
                'libraries',
                'automatization',
                'testing',
                '*'
            ]
        },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
