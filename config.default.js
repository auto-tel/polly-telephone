const os = require('os')
const extend = require('recursive-assign')
const packInfo = require('./package.json')

let config = {
  site: {
    env: process.env.NODE_ENV || 'development',
    siteName: packInfo.name
  },
  host: 'localhost',
  port: process.env.PORT || 4270,
  devCPUCount: os.cpus().length,
  pkg: require('./package'),
  devPort: 5270,
  awsServer: 'us-east-1',
  VoiceId: 'Amy'
}

try {
  extend(config, require('./config.js'))
} catch (e) {
  console.log(e.stack)
  console.warn('warn:no custom config file, use "cp config.sample.js config.js" to create one')
}

module.exports = config



