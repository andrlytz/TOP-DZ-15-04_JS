const arr1 = ['чтение','пение','рисование','математика'];
const arr2 = ['чтение','пение','рисование','математика','русский язык','история','физика','физкультура'];
const arr3 = ['литература','химия','алгебра','геометрия','русский язык','история','физика','физкультура','биология','информатика','английский язык','обществознание'];

function random (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return counter = Math.floor(Math.random() * (max - min + 1)) + min;
}

function f1() {
    if ($('#inpt1').val() < 5) {
        let s = 1
        let mon = '<u>Понедельник</u>';
        let tues = '<u>Вторник</u>';
        let wednes = '<u>Среда</u>';
        let thurs = '<u>Четверг</u>';
        let fri = '<u>Пятница</u>';
        while (s<4) {
            mon += '<li>'+arr1[random(0,3)]+'</li>';
            tues += '<li>'+arr1[random(0,3)]+'</li>';
            wednes += '<li>'+arr1[random(0,3)]+'</li>';
            thurs += '<li>'+arr1[random(0,3)]+'</li>';
            fri += '<li>'+arr1[random(0,3)]+'</li>';
            s++
        }
        $('#mon').html(mon)
        $('#tues').html(tues)
        $('#wednes').html(wednes)
        $('#thurs').html(thurs)
        $('#fri').html(fri)
        console.log('1-4')
    }
    if (4 < $('#inpt1').val() && $('#inpt1').val() < 9) {
        let s = 1
        let mon = '<u>Понедельник</u>';
        let tues = '<u>Вторник</u>';
        let wednes = '<u>Среда</u>';
        let thurs = '<u>Четверг</u>';
        let fri = '<u>Пятница</u>';
        while (s<5) {
            mon += '<li>'+arr2[random(0,7)]+'</li>';
            tues += '<li>'+arr2[random(0,7)]+'</li>';
            wednes += '<li>'+arr2[random(0,7)]+'</li>';
            thurs += '<li>'+arr2[random(0,7)]+'</li>';
            fri += '<li>'+arr2[random(0,7)]+'</li>';
            s++
        }
        $('#mon').html(mon)
        $('#tues').html(tues)
        $('#wednes').html(wednes)
        $('#thurs').html(thurs)
        $('#fri').html(fri)
        console.log('5-8')
    }
    if (8 < $('#inpt1').val()) {
        let s = 1
        let mon = '<u>Понедельник</u>';
        let tues = '<u>Вторник</u>';
        let wednes = '<u>Среда</u>';
        let thurs = '<u>Четверг</u>';
        let fri = '<u>Пятница</u>';
        while (s<6) {
            mon += '<li>'+arr3[random(0,11)]+'</li>';
            tues += '<li>'+arr3[random(0,11)]+'</li>';
            wednes += '<li>'+arr3[random(0,11)]+'</li>';
            thurs += '<li>'+arr3[random(0,11)]+'</li>';
            fri += '<li>'+arr3[random(0,11)]+'</li>';
            s++
        }
        $('#mon').html(mon)
        $('#tues').html(tues)
        $('#wednes').html(wednes)
        $('#thurs').html(thurs)
        $('#fri').html(fri)
        console.log('9-11')
    }
}

$('#but1').click(f1)


function f2() {
    const fam = [
        {name: 'Иванов', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Петров', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Сидоров', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Петросян', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Галустян', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Месси', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Холанн', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Бензема', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Волков', inform: random(5,10), math: random(5,10), geo: random(5,10),},
        {name: 'Колян', inform: random(5,10), math: random(5,10), geo: random(5,10),}
    ];
    fam.forEach(el => {
        el.sum = el.inform + el.math + el.geo
    });
    const fam2 = fam.sort(function(a,b){
        return b.sum - a.sum
    })
    console.log(fam)
    let str = '<tr><td>Фамилия</td><td>Информатика</td><td>Математика</td><td>Геометрия</td><td>Сумма оценок</td></tr>';
    fam2.forEach(el => {
        str += '<tr><td>'+el.name+'</td><td>'+el.inform+'</td><td>'+el.math+'</td><td>'+el.geo+'</td><td>'+el.sum+'</td></tr>'
    })
    $('#out').html(str)
}

$('#but2').click(f2)