Ext.define('Mba.ux.DateTimePicker.DatePicker', {
    extend: 'Ext.field.DatePicker',
    requires: ['Mba.ux.DateTimePicker.AbstractPicker'],

    xtype: 'mba_datepicker',

    config: {
        value: '',
        date: new Date(),
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

    updatePicker: function(newPicker) {
        if (newPicker) {
            var minDate= null, maxDate=null;
        	minDate = new Date(newPicker.yearFrom, 0, 1, 0, 0, 0);
        	maxDate = new Date(newPicker.yearTo, 11, 31, 0, 0, 0);
            minDate.setFullYear(newPicker.yearFrom);
            maxDate.setFullYear(newPicker.yearTo);
            this.config.minDate = minDate.getTime();
            this.config.maxDate = maxDate.getTime();
        }
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
