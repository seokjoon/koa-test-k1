import Article from '../models/Article.js'


export default async function articleSeed() {
  const articles = [...Array(20).keys()].map(v => ({
    content: Array(20).fill('content ' + v).toString(),
    tags: ['foo', 'bar'],
    title: 'title' + v,
  }))

  await Article.insertMany(articles, (err, docs) => { console.log(docs) })
}
