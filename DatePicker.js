Ext.define('Mba.ux.DateTimePicker.DatePicker', {
    extend: 'Ext.field.DatePicker',
    requires: [ 'Mba.ux.DateTimePicker.AbstractPicker' ],
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

    applyValue: function(value)
    {
        return Mba.ux.DateTimePicker.AbstractPicker.setValue(this, value);
    },

    onFocus: function()
    {
        return Mba.ux.DateTimePicker.AbstractPicker.focus(this);
    }
});
