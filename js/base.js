;(function () {
    'use strict';

    var $form_add_task = $('.add-task')
        , new_task = {}
    ;
/////////////asdasd
    asdasdda
    $form_add_task.on('submit', function (e) {
        e.preventDefault();
        new_task.content = $(this).find('input[name=content]').val();
        console.log('new_task', new_task);
    })
})();