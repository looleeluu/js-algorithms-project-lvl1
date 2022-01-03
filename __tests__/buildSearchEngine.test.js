import buildSearchEngine from '../src/buildSearchEngine';

describe('buildSearchEngine', () => {
  it('test with data', () => {
    const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
    const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
    const doc3 = { id: 'doc3', text: "I'm your shooter." };
    const docs = [doc1, doc2, doc3];

    const searchEngine = buildSearchEngine(docs);
    const result = searchEngine.search('shoot');

    expect(result).toEqual(['doc1', 'doc2']);
  });

  it('test with empty', () => {
    const searchEngine = buildSearchEngine();
    const result = searchEngine.search('');

    expect(result).toEqual([]);
  });
});
