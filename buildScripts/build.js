import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/*eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for Production. This will take a movement....'))

webpack(webpackConfig).run((err,stats)  => {
if(err){
  console.log(chalk.red(err));
  return 1;

}
const jsonStats   = stats.toJson();
if(jsonStats.hasErrors){
  return jsonStats.errors.map(error=> console.log(chalk.red(error)));
}

if(jsonStats.hasWarnings){
console.log(chalk.yellow('webpack generated the following warnings:'));
return jsonStats.warnings.map(warnings => console.log(chalk.yellow(warnings)));
}
console.log(`webpack stats: ${stats}`);
//if we got this so far, the build succeeded.
console.log(chalk.green('App has buid and written to /dist!'));
return 0;
});
