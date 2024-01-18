var arr = [37, 12, 65, 5, 91, 24, 78, 49, 3, 68, 30, 87, 56, 19, 42, 71, 10, 93, 76, 50, 14, 60, 88, 26, 69, 7, 96, 33, 82, 47, 75, 21, 54, 98, 44, 16, 81, 38, 23, 58, 95, 11, 72, 6, 31, 74, 29, 64, 2, 85]
console.log('20-dan katta 50-gacha');
arr.filter((item)=>{
    if(item > 20 && item < 50){
        console.log(item);
    }
})
console.log('');
console.log('50-dan katta va toq');
arr.filter((item)=>{
    if (item > 50 && item % 2 == 0 ) {
        console.log(item);
    }
}
)
console.log('');
var arrr = ['Tojimatov','Homrakulov','Azimova','Nozimova','Sobirjonov','Rahimova','Ergashev','Usupov','Urumbaeva','Muslimova','Toshboev']
console.log('familya');
arrr.filter((item)=>{
    if (item[item.length - 1] == 'a' ) {
        console.log(item);
    }
}
)