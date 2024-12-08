export const eventStyles = {
  exam: {
    background: 'bg-purple-100',
    text: 'text-purple-600'
  },
  holiday: {
    background: 'bg-green-100',
    text: 'text-green-600'
  },
  event: {
    background: 'bg-blue-100',
    text: 'text-blue-600'
  }
} as const;

export const insightStyles = {
  time: {
    background: 'bg-blue-50',
    iconBackground: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  workload: {
    background: 'bg-green-50',
    iconBackground: 'bg-green-100',
    iconColor: 'text-green-600'
  },
  balance: {
    background: 'bg-purple-50',
    iconBackground: 'bg-purple-100',
    iconColor: 'text-purple-600'
  }
} as const;