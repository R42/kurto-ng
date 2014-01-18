'use strict';

var _ = require('lodash');
var express = require('express');
var app = express();

var urlCounter = 0;
var urlList = [];

function encodeDigit(digit) {
  digit = digit|0;
  return digit < 10 ? digit.toString(10) :
         digit < 36 ? (String.fromCharCode(digit - 10 + 'A'.charCodeAt(0))) :
                      (String.fromCharCode(digit - 26 + 'a'.charCodeAt(0)));
}

function decodeDigit(digit) {
  digit = digit|0;
  return (digit < 'A'.charCodeAt(0) ?  (digit - '0'.charCodeAt(0))|0 :
          digit < 'a'.charCodeAt(0) ? ((digit - 'A'.charCodeAt(0))|0 + 10)|0 :
                                      ((digit - 'a'.charCodeAt(0))|0 + 26)|0)|0;
}

function encode(num) {
  num = num | 0;
  var chars = [];
  while(num > 0) {
    chars.push(encodeDigit((num % 62) | 0));
    num = (num / 62) | 0;
  }
  return chars.length === 0 ? '0' : chars.join('');
}

function decode(token) {
  var num = 0;
  for(var i = 0; i < token.length; i = (i+1)|0) {
    num = ((num * 62)|0 + decodeDigit(token.charCodeAt(i))) | 0;
  }
  return num;
}

function shortenUrl(url) {
  var urlRecord = {
    token: encode(urlCounter++),
    url: url,
    visits: []
  };
  urlList.push(urlRecord);
  return urlRecord;
}

app.post('/shortens', function (req, res) {
  res.json(shortenUrl(req.body.url));
});

app.get('/shortens/:shortenToken', function (req, res) {
  var index = decode(req.params.shortenToken);
  if (index >= urlList) {
    res.status(404);
    return;
  }
  var urlRecord = urlList[index];
  urlRecord.visits.push({ date: new Date() });
  var url = urlRecord.url;
  res.redirect(307, url);
});

app.get('/shortens', function (req, res) {
  res.json(urlList.slice(urlList.length - 10));
});

shortenUrl('http://yeoman.io/');
shortenUrl('http://gruntjs.com/');
shortenUrl('http://bower.io/');
shortenUrl('http://lodash.com/');
shortenUrl('http://getbootstrap.com/');
shortenUrl('http://jquery.com/');
shortenUrl('http://jshint.com/');
shortenUrl('http://karma-runner.github.io/0.10/index.html');
shortenUrl('http://expressjs.com/');
shortenUrl('http://pivotal.github.io/jasmine/');

function middleware(connect, options) {
  return [
    connect.bodyParser(),
    connect.query(),
    connect.methodOverride(),
    app
  ].concat(options.base.map(function(base) {
    return connect.static(base);
  }));
}

module.exports = {
  connect: {
    livereload: {
      options: {
        middleware: middleware
      }
    }
  }
};