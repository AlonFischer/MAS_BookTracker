# MAS_BookTracker
cs8803 Mobile Apps and Services Programming Assignment


tutorial's used:https://docs.amplify.aws/start/getting-started/installation/q/integration/ionic, https://docs.amplify.aws/lib/auth/getting-started/q/platform/js#option-1-use-pre-built-ui-components, https://www.freakyjolly.com/ionic-tabs-bar-navigation-tutorial/#.YB9QK-hKiUl, https://dev.to/playra/crud-create-read-update-delete-aws-amplify-graphql-react-native-4m2b
  
  Building and running the project on your own machine: for the map tab to work, you must install the cordova geolocation plugin:
  
  ionic cordova plugin add cordova-plugin-geolocation --save 
  
  and the wrapper:
  
  npm install --save @ionic-native/geolocation 
  
  
  run these commands in the main project folder BookTrack.

In addition, index.html includes a script for the Google Maps API with an API key. This key no longer works. We wanted to avoid having the API key publicly available and will submit the working API key seperately. 
