function contenteditor(){var P='',wb='" for "gwt:onLoadErrorFn"',ub='" for "gwt:onPropertyErrorFn"',ib='"><\/script>',Z='#',Nb='&',Oc='../closure_cssom.js',Pc='../closure_cssom.js"><\/script>',Bc='../hallo/fontawesome/css/font-awesome.css',Ac='../hallo/hallo.css',Ic='../hallo/hallo.js',Jc='../hallo/hallo.js"><\/script>',uc='../hallo/jquery-ui-bootstrap/css/custom-theme/jquery-ui-1.8.16.custom.css',Kc='../hallo/rangy-core-1.2.3.js',Lc='../hallo/rangy-core-1.2.3.js"><\/script>',Mc='../tiny_mce/tiny_mce_src.js',Nc='../tiny_mce/tiny_mce_src.js"><\/script>',Dc='../vieJS/vie-latest-ALL.debug.js',Fc='../vieJS/vie-latest-ALL.debug.js"><\/script>',tc='.cache.html',_='/',hc='10677FE3D41A8C7D39E2B8C6635A35CC',nc='14F2956CDE0D639F0B225472A9B58FAB',oc='16BE01F8034DFC18CF7ED58C18C68562',pc='3501A811064D9F7427001335765BE801',qc='40A2B7F6F25B5F047EB8BBF8B1D3C1BF',sc=':',ic=':1',jc=':2',kc=':3',lc=':4',mc=':5',ob='::',Qc='<script defer="defer">contenteditor.onInjectionDone(\'contenteditor\')<\/script>',hb='<script id="',Ec='<script language="javascript" src="',Hc='<script language="javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js"><\/script>',rb='=',$='?',Vb='ActiveXObject',tb='Bad handler "',rc='C4F4BAEC905F8DDE1612AA84E0C57CE9',Wb='ChromeTab.ChromeFrame',Cc='DOMContentLoaded',jb='SCRIPT',Qb='Unexpected exception in locale detection, using default: ',Pb='_',Ob='__gwt_Locale',gb='__gwt_marker_contenteditor',kb='base',cb='baseUrl',T='begin',S='bootstrap',Ub='chromeframe',bb='clear.cache.gif',qb='content',Q='contenteditor',eb='contenteditor.nocache.js',nb='contenteditor::',gc='de',Lb='en',Y='end',Eb='file',Ib='fileapi',Bb='fileapi.support',Hb='formdata',Fb='function',ac='gecko',bc='gecko1_8',U='gwt.codesvr=',V='gwt.hosted=',W='gwt.hybrid',vb='gwt:onLoadErrorFn',sb='gwt:onPropertyErrorFn',pb='gwt:property',zc='head',ec='hosted.html?contenteditor',yc='href',Gc='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js',_b='ie6',$b='ie8',Zb='ie9',xb='iframe',ab='img',Cb='input',yb="javascript:''",vc='link',dc='loadExternalRefs',Kb='locale',Mb='locale=',lb='meta',Ab='moduleRequested',X='moduleStartup',Yb='msie',mb='name',Jb='no',Gb='object',Sb='opera',zb='position:absolute;width:0;height:0;border:none',wc='rel',Xb='safari',db='script',fc='selectingPermutation',R='startup',xc='stylesheet',Db='type',fb='undefined',cc='unknown',Rb='user.agent',Tb='webkit';var l=window,m=document,n=l.__gwtStatsEvent?function(a){return l.__gwtStatsEvent(a)}:null,o=l.__gwtStatsSessionId?l.__gwtStatsSessionId:null,p,q,r,s=P,t={},u=[],v=[],w=[],x=0,y,z;n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:T});if(!l.__gwt_stylesLoaded){l.__gwt_stylesLoaded={}}if(!l.__gwt_scriptsLoaded){l.__gwt_scriptsLoaded={}}function A(){var b=false;try{var c=l.location.search;return (c.indexOf(U)!=-1||(c.indexOf(V)!=-1||l.external&&l.external.gwtOnLoad))&&c.indexOf(W)==-1}catch(a){}A=function(){return b};return b}
function B(){if(p&&q){var b=m.getElementById(Q);var c=b.contentWindow;if(A()){c.__gwt_getProperty=function(a){return H(a)}}contenteditor=null;c.gwtOnLoad(y,Q,s,x);n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:X,millis:(new Date).getTime(),type:Y})}}
function C(){function e(a){var b=a.lastIndexOf(Z);if(b==-1){b=a.length}var c=a.indexOf($);if(c==-1){c=a.length}var d=a.lastIndexOf(_,Math.min(c,b));return d>=0?a.substring(0,d+1):P}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=m.createElement(ab);b.src=a+bb;a=e(b.src)}return a}
function g(){var a=F(cb);if(a!=null){return a}return P}
function h(){var a=m.getElementsByTagName(db);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(eb)!=-1){return e(a[b].src)}}return P}
function i(){var a;if(typeof isBodyLoaded==fb||!isBodyLoaded()){var b=gb;var c;m.write(hb+b+ib);c=m.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=jb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return P}
function j(){var a=m.getElementsByTagName(kb);if(a.length>0){return a[a.length-1].href}return P}
var k=g();if(k==P){k=h()}if(k==P){k=i()}if(k==P){k=j()}if(k==P){k=e(m.location.href)}k=f(k);s=k;return k}
function D(){var b=document.getElementsByTagName(lb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(mb),g;if(f){f=f.replace(nb,P);if(f.indexOf(ob)>=0){continue}if(f==pb){g=e.getAttribute(qb);if(g){var h,i=g.indexOf(rb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=P}t[f]=h}}else if(f==sb){g=e.getAttribute(qb);if(g){try{z=eval(g)}catch(a){alert(tb+g+ub)}}}else if(f==vb){g=e.getAttribute(qb);if(g){try{y=eval(g)}catch(a){alert(tb+g+wb)}}}}}}
function E(a,b){return b in u[a]}
function F(a){var b=t[a];return b==null?null:b}
function G(a,b){var c=w;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function H(a){var b=v[a](),c=u[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(z){z(a,d,b)}throw null}
var I;function J(){if(!I){I=true;var a=m.createElement(xb);a.src=yb;a.id=Q;a.style.cssText=zb;a.tabIndex=-1;m.body.appendChild(a);n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:X,millis:(new Date).getTime(),type:Ab});a.contentWindow.location.replace(s+L)}}
v[Bb]=function(){var a=document.createElement(Cb);a.setAttribute(Db,Eb);if(a.files!=null){if(typeof FileReader==Fb||typeof FileReader==Gb){if(typeof FormData==Fb||typeof FormData==Gb){return Hb}return Ib}}return Jb};u[Bb]={fileapi:0,formdata:1,no:2};v[Kb]=function(){var b=null;var c=Lb;try{if(!b){var d=location.search;var e=d.indexOf(Mb);if(e>=0){var f=d.substring(e+7);var g=d.indexOf(Nb,e);if(g<0){g=d.length}b=d.substring(e+7,g)}}if(!b){b=F(Kb)}if(!b){b=l[Ob]}if(b){c=b}while(b&&!E(Kb,b)){var h=b.lastIndexOf(Pb);if(h<0){b=null;break}b=b.substring(0,h)}}catch(a){alert(Qb+a)}l[Ob]=c;return b||Lb};u[Kb]={de:0,'default':1,en:2};v[Rb]=function(){var c=navigator.userAgent.toLowerCase();var d=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return c.indexOf(Sb)!=-1}())return Sb;if(function(){return c.indexOf(Tb)!=-1||function(){if(c.indexOf(Ub)!=-1){return true}if(typeof window[Vb]!=fb){try{var b=new ActiveXObject(Wb);if(b){b.registerBhoIfNeeded();return true}}catch(a){}}return false}()}())return Xb;if(function(){return c.indexOf(Yb)!=-1&&m.documentMode>=9}())return Zb;if(function(){return c.indexOf(Yb)!=-1&&m.documentMode>=8}())return $b;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(c);if(a&&a.length==3)return d(a)>=6000}())return _b;if(function(){return c.indexOf(ac)!=-1}())return bc;return cc};u[Rb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};contenteditor.onScriptLoad=function(){if(I){q=true;B()}};contenteditor.onInjectionDone=function(){p=true;n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:dc,millis:(new Date).getTime(),type:Y});B()};D();C();var K;var L;if(A()){if(l.external&&(l.external.initModule&&l.external.initModule(Q))){l.location.reload();return}L=ec;K=P}n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:fc});if(!A()){try{G([Ib,gc,Sb],hc);G([Hb,gc,Sb],hc);G([Jb,gc,Sb],hc);G([Ib,Lb,Sb],hc+ic);G([Hb,Lb,Sb],hc+ic);G([Jb,Lb,Sb],hc+ic);G([Ib,gc,Sb],hc+jc);G([Hb,gc,Sb],hc+jc);G([Jb,gc,Sb],hc+jc);G([Ib,Lb,Sb],hc+kc);G([Hb,Lb,Sb],hc+kc);G([Jb,Lb,Sb],hc+kc);G([Ib,gc,Sb],hc+lc);G([Hb,gc,Sb],hc+lc);G([Jb,gc,Sb],hc+lc);G([Ib,Lb,Sb],hc+mc);G([Hb,Lb,Sb],hc+mc);G([Jb,Lb,Sb],hc+mc);G([Jb,gc,Zb],nc);G([Jb,Lb,Zb],nc+ic);G([Jb,gc,$b],oc);G([Jb,Lb,$b],oc+ic);G([Jb,gc,_b],pc);G([Jb,Lb,_b],pc+ic);G([Hb,gc,Xb],qc);G([Jb,gc,Xb],qc);G([Hb,Lb,Xb],qc+ic);G([Jb,Lb,Xb],qc+ic);G([Hb,gc,Xb],qc+jc);G([Jb,gc,Xb],qc+jc);G([Hb,Lb,Xb],qc+kc);G([Jb,Lb,Xb],qc+kc);G([Ib,gc,bc],rc);G([Hb,gc,bc],rc);G([Jb,gc,bc],rc);G([Ib,Lb,bc],rc+ic);G([Hb,Lb,bc],rc+ic);G([Jb,Lb,bc],rc+ic);G([Ib,gc,bc],rc+jc);G([Hb,gc,bc],rc+jc);G([Jb,gc,bc],rc+jc);G([Ib,Lb,bc],rc+kc);G([Hb,Lb,bc],rc+kc);G([Jb,Lb,bc],rc+kc);G([Ib,gc,bc],rc+lc);G([Hb,gc,bc],rc+lc);G([Jb,gc,bc],rc+lc);G([Ib,Lb,bc],rc+mc);G([Hb,Lb,bc],rc+mc);G([Jb,Lb,bc],rc+mc);K=w[H(Bb)][H(Kb)][H(Rb)];var M=K.indexOf(sc);if(M!=-1){x=Number(K.substring(M+1));K=K.substring(0,M)}L=K+tc}catch(a){return}}var N;function O(){if(!r){r=true;if(!__gwt_stylesLoaded[uc]){var a=m.createElement(vc);__gwt_stylesLoaded[uc]=a;a.setAttribute(wc,xc);a.setAttribute(yc,s+uc);m.getElementsByTagName(zc)[0].appendChild(a)}if(!__gwt_stylesLoaded[Ac]){var a=m.createElement(vc);__gwt_stylesLoaded[Ac]=a;a.setAttribute(wc,xc);a.setAttribute(yc,s+Ac);m.getElementsByTagName(zc)[0].appendChild(a)}if(!__gwt_stylesLoaded[Bc]){var a=m.createElement(vc);__gwt_stylesLoaded[Bc]=a;a.setAttribute(wc,xc);a.setAttribute(yc,s+Bc);m.getElementsByTagName(zc)[0].appendChild(a)}B();if(m.removeEventListener){m.removeEventListener(Cc,O,false)}if(N){clearInterval(N)}}}
if(m.addEventListener){m.addEventListener(Cc,function(){J();O()},false)}var N=setInterval(function(){if(/loaded|complete/.test(m.readyState)){J();O()}},50);n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:Y});n&&n({moduleName:Q,sessionId:o,subSystem:R,evtGroup:dc,millis:(new Date).getTime(),type:T});if(!__gwt_scriptsLoaded[Dc]){__gwt_scriptsLoaded[Dc]=true;document.write(Ec+s+Fc)}if(!__gwt_scriptsLoaded[Gc]){__gwt_scriptsLoaded[Gc]=true;document.write(Hc)}if(!__gwt_scriptsLoaded[Ic]){__gwt_scriptsLoaded[Ic]=true;document.write(Ec+s+Jc)}if(!__gwt_scriptsLoaded[Kc]){__gwt_scriptsLoaded[Kc]=true;document.write(Ec+s+Lc)}if(!__gwt_scriptsLoaded[Mc]){__gwt_scriptsLoaded[Mc]=true;document.write(Ec+s+Nc)}if(!__gwt_scriptsLoaded[Oc]){__gwt_scriptsLoaded[Oc]=true;document.write(Ec+s+Pc)}m.write(Qc)}
contenteditor();