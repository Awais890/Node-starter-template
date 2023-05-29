const express = require('express'),
router = express.Router();
const queryJs = require('../middleWares/queryTemplate');

router.get('/',(req,res,next)=>
{
    res.render('pages/starterPage');
});

module.exports = router;