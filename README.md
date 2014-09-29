# [jQuery TextControl]()
#### Substring your texts easy and fast.

Usage
-----

Just include text-control.js after jQuery. Requires jQuery 1.4+.

It is also available via [bower].

    $ bower install --save text-control

[bower]: http://bower.io/

## HTML

``` html
<script src='jquery.js'></script>
<script src='text-control.js'></script>
```

## Javascript

``` javascript
$('.foo').texControl();
```

To make the script run when the page load, you need to put the "shiny" inside a load, ready function or in the end of the <body>, like this:

``` javascript
$(document).ready(function(){
	$('.foo').textControl();
})
```
## Settings

``` javascript
$('.foo').textControl({
	limit: 26
});
```
You can set the character limit! Easy and done.

## Feedback

If this plugin was usefull to you, please send me a tweet (@marcuscaum)! We are open to receive any ideas to make this plugin better every day. 