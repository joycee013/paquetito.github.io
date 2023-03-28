//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#CCFFFF"; colorButton="#479135"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hechooo!!"; messageTime=""; messageError="Repitelo, no te preocupes"; messageErrorG="Repitelo, no te preocupes"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="b3JhY2lvbmVz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="800"; actMaxHeight="400";profG=0;dirMedia="oraciones_resources/media/";
var indexG=0;
var words1G=["TGFzIG1heXVzY3VsYXM=","c2UgdXRpbGl6YW4gY3VhbmRv","aW5pY2lhcyB1bmEgb3JhY2lvbg==","byBjdWFuZG8gdGUgcmVmaWVyZXM=","YSB1biBub21icmUgcHJvcGlv"];
var words2G=["TGEgdGlsZGU=","c2UgdXNhIGN1YW5kbw==","dW5hIGZ1ZXJ6YSBkZSB2b3o=","cmVjYWUgZW4gdW5hIHZvY2Fs"];
var words3G=[];
var c1=[14,18,19,20,18];
var c2=[8,13,17,18];
var c3=[];
colorText="#2B2B2B";colorButton="#D4D40D";colorBack="#FFFFFF";colorSele="#FF8000";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
