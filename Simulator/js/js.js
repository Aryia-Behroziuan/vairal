/*Runing File Java Script*/
function main(){
     /*Data User Saver In Programm*/
     var name = document.getElementById('p1').value
     var doc = document.getElementById('document').value
     var tag = document.getElementById('tags').value

     /*Content Name*/
     document.querySelector('#txt').innerHTML = name

     /*Content A*/
     var strname = String(name)
     var len = name.length;

     var strdoc = String(doc)
     var lendoc = doc.length;

     var strtag = String(tag)
     var lentag = tag.length;

     var path = len+lendoc+lentag


     document.querySelector('#s1').innerHTML = ' '+path+'Bytes'

     document.querySelector('#s2').innerHTML = ' '+len+'CR'

     document.querySelector('#s3').innerHTML = ' '+lendoc+'CR'

     document.querySelector('#s4').innerHTML = ' '+lentag+'CR'

     var rn = 2 + Math.floor(Math.random() * (100-2));
     var rname = 2 + Math.floor(Math.random() * (100-2));
     var rdoc = 2 + Math.floor(Math.random() * (100-2));
     var rtag = 2 + Math.floor(Math.random() * (100-2));

     document.querySelector('#s5').innerHTML = ' '+rn+'%'
     document.querySelector('#s6').innerHTML = ' '+rname+'%'
     document.querySelector('#s7').innerHTML = ' '+rdoc+'%'
     document.querySelector('#s8').innerHTML = ' '+rtag+'%'

     var youtube = rn + Math.floor(Math.random() * (rname-rn));
     var instagram = rname + Math.floor(Math.random() * (rdoc-rname));
     var facebook = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var t = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var a = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var b = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var c = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var d = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var e = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var f = rdoc + Math.floor(Math.random() * (rtag-rdoc));
     var rn = 2 + Math.floor(Math.random() * (100-2));
     var rn = 2 + Math.floor(Math.random() * (100-2));
     var rn = 2 + Math.floor(Math.random() * (100-2));
     var rn = 2 + Math.floor(Math.random() * (100-2));

     document.querySelector('#s9').innerHTML = ' '+youtube
     document.querySelector('#s10').innerHTML = ' '+instagram
     document.querySelector('#s11').innerHTML = ' '+facebook
     document.querySelector('#s12').innerHTML = ' '+t
     document.querySelector('#s13').innerHTML = ' '+a
     document.querySelector('#s14').innerHTML = ' '+b
     document.querySelector('#s15').innerHTML = ' '+c
     document.querySelector('#s16').innerHTML = ' '+d
     document.querySelector('#s16').innerHTML = ' '+e
     document.querySelector('#s17').innerHTML = ' '+f+'%'


}
