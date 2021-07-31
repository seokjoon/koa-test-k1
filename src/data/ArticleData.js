import Article from '../models/Article.js'

export default function seedArticleData() {
  const articles = [...Array(20).keys()].map(v => ({
    content: 'content ' + v,
    tags: ['foo', 'bar'],
    title: 'title' + v,
  }))

  Article.insertMany(articles, (err, docs) => { console.log(docs) })
}