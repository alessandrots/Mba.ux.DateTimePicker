Ext.define('Mba.ux.DateTimePicker.AbstractPicker', {
    singleton: true,

    setValue: function(scope, value) {
        var newValue = scope.callParent([value]);
        if (newValue === null) {
            scope.config.date = new Date();
        }
        return newValue;
    },

    focus: function(scope) {
        if (scope.isFocused) {
            scope.isFocused = false;
            return;
        }

        if (typeof datePicker === 'undefined') {
            scope.callParent();
            return;
        }

        scope.isFocused = true;

        var onSuccess, onError;

        onSuccess = function(res) {
            scope.setValue(res);
        };

        onError = function(e) {
            console.log('DatePicker: error occurred or cancelled: ' + e);
        };

        try {
            datePicker.show(scope.config, onSuccess, onError);
        } catch (ex) {
            throw 'Error';
        }

    }

});
