// jQuery(function () {
//     console.log('test')
// })
// $().ready(function () {
//
// })

$(document).ready(function () {
    // $('#content').click(function () {
    //     alert('Hello')
    // })
    $('#content ul li').on('click', function () {
        alert('ddd');
    })
    $('#content ul').children('li').each(function () {
        $(this).css('color', 'red')
        $(this).text('hello')
    })
})
