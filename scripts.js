// JavaScript Document

//ready
$(document).ready(function () {
    
    // 1
    console.log( 123 == '123' ); // true
    console.log( 123 === '123' ); // false
    console.log( '' == false ); // true
    console.log( '' === false ); // false
    console.log( '00000' === false ); // false
    console.log( '0000' === false ); // false
    
    
    // 2
    console.log( 1 + '12' ); // '112'
    console.log( 1 - '12' ); // -11
    console.log( 1 + 'abv' ); // '1abv'
    console.log( 1 - 'abv' ); // NaN (not a nubmer)
    
    
    // 3
    (function ( undefined ) {
        undefined == null;
        undefined === null;
        undefined = '1';        
        console.log(undefined); // '1'
    }) ();
    
    
    // 4
    function x() {
        var funcs = [];
        for ( var i = 0; i < 10; i++ ) {
            funcs.push( function () { console.log(i); } );
        }
        return funcs;
    }
    var counters = x();
    counters[0](); // 10
    counters[3](); // 10
    x();
    
});