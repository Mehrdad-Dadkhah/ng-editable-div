
ng-editable-div
===================

Lightweight Angular directive to add editable div.

**See the <a href="https://github.com/Mehrdad-Dadkhah/ng-editable-div/tree/master/demo" target="_blank">DEMO</a> page.

Table of Content:
* [Features](#features)
* [Install](#install) ([Manual](#manual))
* [Usage](#usage)

##<a name="features"></a> Features
* add editable div as input
* add editable div as textarea
* model placeholder behavior
* access to typed data

##<a name="install"></a> Install

* <a name="manual"></a>**Manual**: download latest from [here](https://github.com/Mehrdad-Dadkhah/ng-editable-div/tree/master)

```html
<script src="../src/jquery.min.js" type="text/javascript"></script>
<script src="../src/angular.min.js" type="text/javascript"></script>
<script src="../src/editablediv.js" type="text/javascript"></script>
```

##<a name="usage"></a> Usage

```html
<h2>Textarea</h2>
<editablediv textarea=true placeholder="this is a placeholder of textarea"></editablediv>

<h2>Input</h2>
<editablediv input=true placeholder="this is a placeholder of input"></editablediv>
```