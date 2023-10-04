import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    options: {
        storySort: {
            order: [
                'project-setup',
                ['Node versioning', 'dependencies', 'nextJS', 'gitignore'],
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
