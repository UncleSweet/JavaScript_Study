window.onload  = function(){
    console.log(document.styleSheets[1]);
}

var flag = true;

if(flag){
    //loadCss('../css/demo3.css');
    loadCss('../css/demo2.css');
    loadStyle();
}

//动态加载js脚本
function loadScript(url){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

//动态加载css脚本
function loadCss(url){
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

//动态执行style
function loadStyle(){
    var style = document.createElement('style');
    style.setAttribute('type','text/css');
    document.getElementsByTagName('head')[0].appendChild(style);

    //style.appendChild(insertRule(document.styleSheets[0],'#box','width:200px;height:200px;background-color:red',0));

    var rule1 = insertRule(document.styleSheets[1],'#box','width:200px;height:200px;background-color:red',0).content;
    var rule2 = insertRule(document.styleSheets[1],'#pox','width:300px;height:300px;background-color:blue',1).content;

    style.appendChild(document.createTextNode(rule1));
    style.appendChild(document.createTextNode(rule2));

    //console.log(head.lastChild);
    console.log(rule1);
    console.log(rule2);
}

//兼容ie、非ie加载css代码
function insertRule(sheet,selectorText,cssText,position){
    //如果是非ie
    if(sheet.insertRule){
        sheet.insertRule(selectorText+"{"+ cssText +"}",position);   
    }
    //如果是ie
    else if(sheet.addRule){
        sheet.addRule(selectorText,cssText,position);
    }

    return {
        content : selectorText+"{"+cssText+"}"
    };
}

