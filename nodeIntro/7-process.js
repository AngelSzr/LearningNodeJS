console.log(process.env);
process.on('exit',()=>{
    console.log('hi');
})
process.exit(0)