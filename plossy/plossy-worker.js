!function(){var t=!1,e=[],n=Date.now;n();importScripts("plossy.js");var a,s=plossy({onRuntimeInitialized:function(){t=!0,e.forEach((function(t){i(t)}))},print:function(t){f(t)},printErr:function(t){f(t)},noInitialRun:!0,noExitRuntime:!0});function f(t){postMessage({type:"stdout",data:t})}function i(t){if("command"===t.type){a=n();var e=t.file.data,f=s.quantize(e);!function(t){var e=n()-a;try{postMessage({type:"done",result:[{data:{buffer:t.buffer,byteOffset:t.byteOffset,length:t.length},type:"image/png"}],time:e})}catch(n){postMessage({type:"done",result:[{data:{buffer:t.buffer,byteOffset:t.byteOffset,length:t.length},type:"image/png"}],time:e})}}(new Uint8Array(f)),s.free_result(),postMessage({type:"release"})}}onmessage=function(n){var a=n.data;!1===t?e.push(a):i(a)},postMessage({type:"ready"})}();