/* The library */
jQuery.fn.extend({
    alertBox: function(option) {
        if (typeof option === 'object') {
            var self = this;
            var modalContent = '';

            $(this).addClass('modal');
            $(this).addClass('fade');
            $(this).attr('tabindex', '-1');
            $(this).attr('role', 'dialog');
            $(this).attr('aria-labelledby', $(this).attr('id') + 'Label');

            modalContent += '<div class="modal-dialog modal-sm" role="document">';
            modalContent += '  <div class="modal-content">';
            if (!!option.title) {
                modalContent += '    <div class="modal-header">';
                modalContent += '      <button type="button" class="close" class="btn btn-light" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
                modalContent += '      ' + (option.title);
                modalContent += '    </div>';
            }
            if (!!option.message) {
                modalContent += '    <div class="modal-body">';
                if (option.type === 'alert' || option.type === 'confirm') {
                    modalContent += '      ' + (option.message);
                }
                else if (option.type === 'prompt') {
                    var textId = $(this).attr('id') + 'PromptText';

                    modalContent += '      <div class="form-group">';
                    modalContent += '        <label>' + (option.message) + '</label>';
                    modalContent += '        <input type="text" id="' + textId + '" class="form-control">';
                    modalContent += '      </div>';
                }
                modalContent += '    </div>';
            }
            if (!!option.type) {
                modalContent += '    <div class="modal-footer">';
                if (option.type === 'alert') {
                    modalContent += '      <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>';
                }
                if (option.type === 'confirm' || option.type === 'prompt') {
                    var buttonId = $(this).attr('id') + 'ActionButton';
                    var cancelId = $(this).attr('id') + 'CancelButton';

                    modalContent += '      <button type="button" id="' + cancelId + '" class="btn btn-light" data-dismiss="modal">Cancel</button>';
                    modalContent += '      <button type="button" id="' + buttonId +  '" class="btn btn-primary" data-dismiss="modal">Create</button>';
                }
                modalContent += '    </div>';
            }
            modalContent += '  </div>';
            modalContent += '</div>';

            $(this).html(modalContent);

            $('#' + $(this).attr('id') + 'Show').on('click', function(evt) {
                evt.preventDefault();
                $(self).modal('show');
            });

            if (!!buttonId) {
                $('#' + buttonId).on('click', function() {
                    if (!!option.action) {
                        if (option.type === 'confirm') {
                            option.action();
                        }
                        else if (option.type === 'prompt') {
                            if (!!textId) {
                                option.action($('#' + textId).val());
                                $('#' + textId).val('');
                            }
                        }
                    }
                });
            }

            if (option.type === 'confirm' || option.type === 'prompt') {
                if (!!cancelId) {
                    $('#' + cancelId).on('click', function() {
                        option.cancel();
                        if (option.type === 'prompt') {
                            if (!!textId) {
                                $('#' + textId).val('');
                            }
                        }
                    });
                }
            }
        }
        else {
            throw 'Invalid parameter';
        }
    }
});

/*
 * Usage
 * Button ID must be '[Modal ID]Show'.
 * Example:
 * Modal ID  : alert
 * Button ID : alertShow
 */
$(document).ready(function() {
    $('#alert').alertBox({
        title: 'Cancel',
        message: 'Are you sure you want to cancel?',
        type: 'alert'
    });

    $('#confirm').alertBox({
        title: 'Confirm',
        message: 'Are you sure you want to create?',
        type: 'confirm',
        action: function() {
            alert('You record has just been created');
        },
    });

    $('#prompt').alertBox({
        title: 'Prompt',
        message: 'Enter your value',
        type: 'prompt',
        action: function(promptMessage) {
            alert(promptMessage);
        },
        cancel: function() {
            alert('You clicked "Cancel".');
        }
    });
});