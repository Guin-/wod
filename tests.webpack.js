var context = require.context('./src/', true, /-test\.js$/);
//  /.+\.spec\.jsx?$/);
context.keys().forEach(context);
