/**
 * Expose `Pending`.
 */

exports = module.exports = Pending;

/**
 * Initialize a new `Pending` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function Pending(runner) {

  runner.on('start', function(){
    console.log('* ')
    console.log('*********************');
    console.log('*** Pending tests ***');
    console.log('*********************');
    console.log('* ')
  });

  var scope = [];

  runner.on('pending', function(test){
    var current = [test]
      , parent = test.parent
    ;
    // stack suites
    while( !!parent ){
      current.unshift(parent)
      parent = parent.parent;
    }
    // print titles
    current.forEach(function(val, key){
      if( val != scope[key] ){
        while( scope.length > key ){
          scope.pop()
        }
        console.log( '* ' + Array(key).join('  ') + val.title );
        scope.push(val);
      }
    })
  })
}
