const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/asuratte/portfolio.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)