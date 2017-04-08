import './index.css';
import numeral from 'numeral';

const value = numeral(1000).format('$0,0.0');
debugger; //eslint-disable-line no-debugger
console.log(` Th numeral converted  ${value} from 1000 .`); //eslint-disable-line no-console
