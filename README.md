# MAS_BookTracker
## cs8803 Mobile Apps and Services Programming Assignment
### Requirements:
- Node.js v10.x or later
- npm v5.x or later

### Build
  Follow tutorial on https://docs.amplify.aws/start/getting-started/installation/q/integration/ionic
  
  `npm install -g @aws-amplify/cli`
  
  `npm install aws-amplify @aws-amplify/ui-angular`
  
  `npm install -g ionic`
  
  `amplify configure` to sign into AWS Console (more detail in tutorial link)
  
  `ionic init` to connect app with ionic
  
  `amplify init` to connect app with amplify backend (after cd'ing into BookTrack). Use existing 'dev' environment
  
  `amplify push` to build all backend resources in cloud
  
  `ionic serve` to run code in localhost browser
  
  For the map tab to work, you must install the cordova geolocation plugin:
  
  `ionic cordova plugin add cordova-plugin-geolocation --save`
  
  and the wrapper:
  
  `npm install --save @ionic-native/geolocation`
  
In addition, index.html includes a script for the Google Maps API with an API key. This key no longer works. We wanted to avoid having the API key publicly available and will submit the working API key seperately. 
