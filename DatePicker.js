Ext.define('Mba.ux.DateTimePicker.DatePicker', {
    extend: 'Ext.field.DatePicker',

    xtype: 'mba_datepicker',

    config: {
        date: null,
        mode: 'date',
        locale: 'pt_BR',
        allowOldDates: true,
        allowFutureDates: true,
        minDate: '',
        maxDate: '',
        doneButtonLabel: 'Finalizar',
        doneButtonColor: '#007AFF',
        cancelButtonLabel: 'Cancelar',
        cancelButtonColor: '#007AFF'
    },

    applyValue: function(value) {
        var newValue = this.callParent(arguments);
        if (newValue == null) {
            this.config.date = new Date();
        }
        return newValue;
    },

    onFocus: function() {
        var me = this;

        if (me.isFocused) {
            me.isFocused = false;
            return;
        }

        if (typeof datePicker === 'undefined') {
            this.callParent();
            return;
        }

        me.isFocused = true;

        var onSuccess = function (res) {
            me.setValue(res);
        };

        var onError = function (e) {
            console.log("DatePicker: error occurred or cancelled: " + e);
        };

        try {
            alert(JSON.stringify(this.config));
            datePicker.show(this.config, onSuccess, onError);
        } catch (ex) {
            fail(ex);
        }

    }

});