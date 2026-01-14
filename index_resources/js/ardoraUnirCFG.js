//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=10; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Good job! Well done!"; messageTime=""; messageError="Try again. You can do it!"; messageErrorG="Try again. You can do it!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["d2FrZSB1cA==", "RGVzcGVydGFyc2U="],["YnJ1c2ggbXkgdGVldGg=", "Q2VwaWxsYXJzZQ=="],["aGF2ZSBicmVha2Zhc3Q=", "RGVzYXl1bmFy"],["Z28gdG8gc2Nob29s", "SXIgYSBsYSBlc2N1ZWxh"],["ZG8gaG9tZXdvcms=", "SGFjZXIgbGEgdGFyZWE="],["Z28gdG8gYmVk", "SXIgYSBsYSBjYW1h"],["dGFrZSBhIHNob3dlcg==", "QmHDsWFyc2U="],["Z2V0IGRyZXNzZWQ=", "VmVzdGlyc2U="],["aGF2ZSBsdW5jaA==", "QWxtb3J6YXI="],["d2F0Y2ggVFY=", "VmVyIGxhIHRlbGU="]];
var c=[[7,11],[14,10],[14,9],[12,15],[11,14],[9,12],[13,7],[11,8],[10,8],[8,11]];
var con1=["wake up","brush my teeth","have breakfast","go to school","do homework","go to bed","take a shower","get dressed","have lunch","watch TV"];
var con2=["Despertarse","Cepillarse","Desayunar","Ir a la escuela","Hacer la tarea","Ir a la cama","Bañarse","Vestirse","Almorzar","Ver la tele"];
var sel1=""; join1=[]; join2=[];
