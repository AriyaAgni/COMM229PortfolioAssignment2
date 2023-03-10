/*name:Ariya Agnihothri Mini Suresh
  student id:301278498
  Date:09/02/2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {page:'About Us', menuId:'about'});
});
/* GET project page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', {page:'Projects', menuId:'projects'});
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {page:'Services', menuId:'services'});
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'Contact Us', menuId:'contact'});
});


module.exports = router;
