import uglify      	from 'rollup-plugin-uglify';

// import rollup      	from 'rollup';
// import nodeResolve 	from 'rollup-plugin-node-resolve';
// import commonjs    	from 'rollup-plugin-commonjs';
// import builtins 	    from 'rollup-plugin-node-builtins';
// import json          from 'rollup-plugin-json';
//import globals  	  from 'rollup-plugin-node-globals';

export default {
    input: './dist/library/angular-controls.module.js',
    output: {
        file: 'dist/bundles/angular-controls.bundle.js',
        format: 'umd',
        sourceMap: false,
        name: 'mk.angular.controls',
        globals: {
            '@angular/core':                  'ng.core',
            '@angular/common':                'ng.common',
            'rxjs/Observable':                'Rx',
            'rxjs/ReplaySubject':             'Rx',
            'rxjs/add/operator/map':          'Rx.Observable.prototype',
            'rxjs/add/operator/mergeMap':     'Rx.Observable.prototype',
            'rxjs/add/observable/fromEvent':  'Rx.Observable',
            'rxjs/add/observable/of':         'Rx.Observable'
        }
    },
    plugins: [
      //uglify()
  ]
};

/*
import rollup      	from 'rollup';

import nodeResolve 	from 'rollup-plugin-node-resolve';
import builtins 	from 'rollup-plugin-node-builtins';
import commonjs    	from 'rollup-plugin-commonjs';
import globals  	from 'rollup-plugin-node-globals';
import json         from 'rollup-plugin-json';

export default {
    entry: 'aot/js/app/main-aot.js',
    dest: 'C:/inetpub/wwwroot/clinicaltrials/build.js',
    sourceMap: true,
    format: 'iife',
    plugins: [
        builtins(),
		nodeResolve({
			jsnext: true,
			module: true,
			main: true,
			browser: true,
			extensions: ['.js']
			}),
        commonjs({
			namedExports: {
				'lodash': ['clone', 'isEqual', 'assign', 'flatMap', 'cloneDeep', 'groupBy'],
				'kendo': [ 'kendoGrid', 'kendoDialog' , 'kendoTooltip']
			}
		}),
        globals(), json(), uglify()
    ]
};
*/

