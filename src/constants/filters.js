const userFilter = [
  {
    label: 'Reputation',
    value: 'reputation',
    subLabels: [
      {
        label: 'week',
        value: 'reputation_change_week',
      },
      {
        label: 'month',
        value: 'reputation_change_month',
      },
      {
        label: 'quarter',
        value: 'reputation_change_quarter',
      },
      {
        label: 'year',
        value: 'reputation_change_year',
      },
      {
        label: 'all',
        value: 'reputation',
      },
    ],
  },
  {
    label: 'New users',
    value: 'new_user',
    subLabels: [
      {
        label: 'Reputation',
        value: 'reputation',
      },
      {
        label: 'Creation date',
        value: 'creation_date',
      },
    ],
  },
];

const questionFilters = [
  {
    label: 'Popular',
    value: 'score',
  },
  {
    label: 'Name',
    value: 'title',
  },
  {
    label: 'New',
    value: 'creation_date',
  },
];

const tagsFilters = [
  {
    label: 'Popular',
    value: 'count',
  },
  {
    label: 'Name',
    value: 'name',
  },
];

export { userFilter, questionFilters, tagsFilters };
