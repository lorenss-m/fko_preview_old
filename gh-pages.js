var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'master',
        repo: 'https://github.com/saecl/fkopreview.git', // Update to point to your repository  
        user: {
            name: 'saecl', // update to use your name
            email: 'saeclmusic@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)