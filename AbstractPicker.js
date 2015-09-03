Ext.define('Mba.ux.DateTimePicker.AbstractPicker', {
    singleton: true,

    setValue: function(scope, newValue) {
        scope.config.date = newValue;
        scope.config.value = newValue;
        if (newValue === null || newValue === '') {
            scope.config.date = new Date();
        }
        return newValue;
    },

    focus: function(scope) {
        if (scope.isFocused) {
            scope.isFocused = false;
            return;
        }

        scope.isFocused = true;

        var onSuccess, onError;

        onSuccess = function(res) {
            scope.setValue(res);
            scope.isFocused = false;
        };

        onError = function() {
            scope.isFocused = false;
            scope.applyValue(scope.getValue());
        };

        try {
            datePicker.show(scope.config, onSuccess, onError);
        } catch (ex) {
            console.log(ex);
            throw 'Error';
        }
    }

});
