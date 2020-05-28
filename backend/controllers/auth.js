//export the module signout : 
exports.signup = (req, res)=>{
    console.log('up')

    res.send('HOla');
}

exports.signout = (req, res)=>{
    console.log('out')

    res.json({name: 'hola', age: 16});
}
