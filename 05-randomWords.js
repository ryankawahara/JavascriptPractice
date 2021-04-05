var nounList = ["Darth Vader","Princess Leia","Luke Skywalker","Han Solo","Admiral Ackbar","C-3PO"];
var verbList = ["lived on","loved","attacked","explored","hated","left"];
var placeList = ["Alderaan","Tatooine","Endor","Mustafar","Coruscant","Hoth"];
var punctuationList = [".","?","!","..."];

var nounIndex = Math.floor(Math.random()*nounList.length);
var verbIndex = Math.floor(Math.random()*verbList.length);
var placeIndex = Math.floor(Math.random()*placeList.length);
var punctuationIndex = Math.floor(Math.random()*punctuationList.length);


alert(nounList[nounIndex]+" "+verbList[verbIndex]+" "+placeList[placeIndex]+punctuationList[punctuationIndex]);
