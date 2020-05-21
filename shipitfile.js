module.exports = shipit => {
    require('shipit-deploy')(shipit)
    shipit.initConfig({
      default: {
        deployTo: '/var/apps/super-project',
        repositoryUrl: 'https://github.com/vincent2303/pokemon-app.git',
      },
      staging: {
        servers: 'deploy@staging.super-project.com',
      },
    })
}