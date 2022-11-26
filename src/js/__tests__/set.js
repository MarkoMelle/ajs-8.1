import Team from '../set';

test('should add character to the team', () => {
  const received = new Team();
  received.add({ name: 'John', attack: 100 });

  const expected = new Set();
  expected.add({ name: 'John', attack: 100 });

  expect(received.members).toEqual(expected);
});

test('should add characters to the team', () => {
  const received = new Team();
  received.addAll({ name: 'John', attack: 100 }, { name: 'John2', attack: 100 });

  const expected = new Set();
  expected.add({ name: 'John', attack: 100 });
  expected.add({ name: 'John2', attack: 100 });

  expect(received.members).toEqual(expected);
});

test('should add character to the team', () => {
  const received = new Team();
  const character = { name: 'John', attack: 100 };
  received.add(character);

  expect(() => {
    received.add(character);
  }).toThrow(Error);
});

test('should converts SET into an array', () => {
  const received = new Team();
  received.addAll({ name: 'John', attack: 100 }, { name: 'John2', attack: 100 });
  received.toArray();

  const expected = [
    { name: 'John', attack: 100 },
    { name: 'John2', attack: 100 },
  ];

  expect(received.toArray()).toEqual(expected);
});
