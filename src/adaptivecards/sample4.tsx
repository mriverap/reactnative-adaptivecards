export const payload = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard',
  version: '1.5',
  body: [
    {
      type: 'TextBlock',
      size: 'Medium',
      weight: 'Bolder',
      text: ' Application Login',
      horizontalAlignment: 'Center',
      wrap: true,
      style: 'heading',
    },
    {
      type: 'TextBlock',
      text: 'Username',
      wrap: true,
    },
    {
      type: 'Input.Text',
      id: 'UserVal',
      isRequired: true,
    },
    {
      type: 'TextBlock',
      text: 'Password',
      wrap: true,
    },
    {
      type: 'Input.Text',
      id: 'PassVal',
      style: 'Password',
      isRequired: true,
    },
  ],
  actions: [
    {
      type: 'Action.Submit',
      title: 'Login',
      data: {
        id: 'LoginVal',
      },
    },
  ],
};

export const context = {
  ApplicationInfo: {
    title: 'Application Login',
  },
};
