function receivesAFunction(spy){
return spy();
}
receivesAFunction(()=>console.log("Hello World"));


function returnsANamedFunction(){
    return function fn(){
        console.log("Hello world");
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Hello world")
    }
}
returnsAnAnonymousFunction();
