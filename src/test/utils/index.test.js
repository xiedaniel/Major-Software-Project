import { getQuestions } from '../../utils'

const list = [
  { term: 'term1', def: 'def1' },
  { term: 'term2', def: 'def2' },
  { term: 'term3', def: 'def3' },
  { term: 'term4', def: 'def4' },
  { term: 'term5', def: 'def5' },
  { term: 'term6', def: 'def6' },
  { term: 'term7', def: 'def7' },
  { term: 'term8', def: 'def8' },
  { term: 'term9', def: 'def9' },
  { term: 'term10', def: 'def10' },
]


test('Should generate the list of questions', () => {
  const questions = getQuestions(list);
  console.log(questions);
  expect(questions.length).toBe(list.length);
  expect(questions[0].choices.length).toBe(4);
  expect(questions[0].choices).toContain(questions[0].def)
})
