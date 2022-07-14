let age=prompt('Введите количество лет: ' )

if ((age-'1')%10===0){
    alert('Вам '+ age+ " год")
}
else if((age-'2')%10===0||(age-'3')%10===0||(age-'4')%10===0){
    alert('Вам '+ age+ " годa")
}
else{
    alert('Вам '+ age + " лет")
}