Ext.define('Mba.ux.DateTimePicker.TimePicker', {
    extend: 'Ext.ux.field.TimePicker',
    requires: [ 'Mba.ux.DateTimePicker.AbstractPicker' ],
    xtype: 'mba_timepicker',

    config: {
        value: '',
        date: new Date(),
        mode: 'time',
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

    updatePicker: function(newPicker) {
        if (newPicker) {
            this.config.minDate = this.getDateTime(newPicker.startHour, newPicker.startMinute, newPicker.startSecond);
            this.config.maxDate = this.getDateTime(newPicker.endHour, newPicker.endMinute, newPicker.endSecond);
        }
    },

    getDateTime: function(hour, minute, second) {
        var date = new Date();
        date.setHours(hour);
        date.setMinutes(minute);
        date.setSeconds(second);
        return date.getTime();
    },

    applyValue: function(value)
    {
        var newValue = this.callParent([value]);
        return Mba.ux.DateTimePicker.AbstractPicker.setValue(this, newValue);
    },

    onFocus: function()
    {
        if (typeof datePicker === 'undefined') {
            this.callParent();
            return;
        }

        return Mba.ux.DateTimePicker.AbstractPicker.focus(this);
    }
});
