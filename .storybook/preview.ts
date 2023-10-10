import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: {
            order: [
                'Welcome',
                'project-setup',
                [
                  'Node versioning',
                  'Managing dependencies',
                  'Getting Started',
                  'Code QA',
                  'Environment variables',
                  'gitignore'
                ],
                'libraries',
                ['*', 'ui',[ 'TailwindCSS', 'shadcn-ui', 'react-icons']],
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
