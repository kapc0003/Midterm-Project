const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function upperCase(text){
    return text.split(' ').map(str => str[0].toUpperCase() + str.substring(1)).join(' ');
}

export function formatName({title = 'empty', first = 'empty', last = 'empty'} , withTitle = false){
    let fullName = '';
    if (withTitle) {
        fullName =  upperCase(title) + ' ';
    }
    fullName += upperCase(first) + ' ' + upperCase(last);
    
    return fullName;
}

export function formatDOB(dob = '1900-01-01 00:00:01'){
    let date = new Date(dob);
    return monthNames[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
}

export function getAge(dob = '1900-01-01 00:00:01'){
    let date = new Date(Date.now() - new Date(dob).getTime());
    return Math.abs(date.getUTCFullYear() - 1970);
}

export function formatLocation({street = 'empty', city = 'empty', state = 'empty', postcode = 0}, line = 1){
    switch(line){
        case 1:
            return upperCase(street);
        case 2:
            return upperCase(city) + ', ' + upperCase(state);
        case 3:
            return postcode;
    }
}