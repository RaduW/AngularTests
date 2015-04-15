/// <reference path="../typings/tsd.d.ts" />
var codeMirror: CodeMirror.Editor;
function initCodeMirror(){
    codeMirror = CodeMirror(document.body);
    $('#setStyle').on('click',setIndentStyles);
}

function setIndentStyles(){
    codeMirror.addLineClass(1,"wrap","indent1")
    //codeMirror.getDoc().markText({ line:1, ch:1}, {line:1, ch:4},{ readOnly: true, css:"color: #fe3"} )
}

$(document).ready(initCodeMirror);