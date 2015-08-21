//Word List

/*
function Word(strings,part,groups,usages) {
	this.strings  = strings ;
	this.part = part
}
*/

nounList.push(new Noun(["Apple"],[],["Fruit","Red","Round","Soft","Object","Natural"],[])) ;
nounList.push(new Noun(["Fruit"],[],["Object","Natural"],[])) ;
nounList.push(new Noun(["Object"],[],[],[])) ;
adjectiveList.push(new Adjective(["Soft"],[],["Friendly"],["Hard"])) ;
adjectiveList.push(new Adjective(["Natural"],[],["Green"],["Artificial"])) ;
adjectiveList.push(new Adjective(["Round"],[],[],["Cubic","Flat"])) ;
adjectiveList.push(new Adjective(["Red"],[],["Color"],["Green"])) ;
adjectiveList.push(new Adjective(["Green"],[],["Color"],["Red"])) ;

/*
var xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","http://www.dictionaryapi.com/api/v1/references/collegiate/xml/hypocrite?key=[e44c1968-36e6-4887-9850-3656153e45eb]",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

txt="<bookstore><book>";
txt=txt+"<title>Everyday Italian</title>";
txt=txt+"<author>Giada De Laurentiis</author>";
txt=txt+"<year>2005</year>";
txt=txt+"</book></bookstore>";

if (window.DOMParser)
  {
  parser=new DOMParser();
  xmlDoc=parser.parseFromString(txt,"text/xml");
  }
else // Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async=false;
  xmlDoc.loadXML(txt); 
  }
  */