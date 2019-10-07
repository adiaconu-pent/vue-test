const userFilter = [
  {
    label: 'Reputation',
    value: 'reputation_change_week',
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
    value: 'creation_date',
  },
];

export default userFilter;
