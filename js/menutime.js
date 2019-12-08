window.onload=display_ct;
function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}
function display_ct() {
    var x = new Date()
    minutes = x.getMinutes().toString().length == 1 ? '0'+x.getMinutes() : x.getMinutes(),
    h=x.getHours(),
    hour=h%12+12*(h%12==0),
    hours = hour.toString().length == 1 ? '0'+hour : hour,
    ampm = x.getHours() >= 12 ? 'PM' : 'AM',
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var x1=days[x.getDay()];
    var x2=hours + " : " + minutes + ampm; 
    document.getElementById('cd').innerHTML = x1;
    document.getElementById('ct').innerHTML = x2;
    display_c();
}