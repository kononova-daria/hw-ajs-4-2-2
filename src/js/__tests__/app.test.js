import sortingCharacters from '../app';

test.each([
  [
    [
      {
        name: 'мечник',
        health: 10,
      },
      {
        name: 'маг',
        health: 100,
      },
      {
        name: 'лучник',
        health: 80,
      },
    ],
    [
      {
        name: 'маг',
        health: 100,
      },
      {
        name: 'лучник',
        health: 80,
      },
      {
        name: 'мечник',
        health: 10,
      },
    ],
  ],
  [
    [
      {
        name: 'мечник',
        health: 90,
      },
      {
        name: 'маг',
        health: 90,
      },
      {
        name: 'лучник',
        health: 80,
      },
    ],
    [
      {
        name: 'мечник',
        health: 90,
      },
      {
        name: 'маг',
        health: 90,
      },
      {
        name: 'лучник',
        health: 80,
      },
    ],
  ],
])('sorting in descending order', (data, expected) => {
  const result = sortingCharacters(data);

  expect(result).toEqual(expected);
});

test('with toBe', () => {
  const received = [
    {
      name: 'мечник',
      health: 100,
    },
    {
      name: 'маг',
      health: 40,
    },
    {
      name: 'лучник',
      health: 80,
    },
  ];
  const expected = [
    {
      name: 'мечник',
      health: 100,
    },
    {
      name: 'лучник',
      health: 80,
    },
    {
      name: 'маг',
      health: 40,
    },
  ];

  const result = JSON.stringify(sortingCharacters(received));

  expect(result).toBe(JSON.stringify(expected));
});
