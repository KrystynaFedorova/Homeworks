let userName=prompt('Введите имя пользователя: ', 'admin')
let password=prompt('Введите пароль: ','qWeRty123')
let rightName='admin'
let rightPassword='qWeRty123'
if (userName===rightName&&password===rightPassword){
    alert('Вам предоставлен доступ к аккаунту')
}
else{
    alert('Вам не предоставлен доступ к аккаунту')
}

