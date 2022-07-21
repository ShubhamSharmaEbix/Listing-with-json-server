var router = require('express').Router();


router.get('/',(req,res)=>{
    res.send('GET POSTS')
})

router.post('/add',(req,res)=>{
    res.send('Post Added : '+req.body?.name)
})

module.exports = router;