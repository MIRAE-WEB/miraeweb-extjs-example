
Ext.define('MyApp.view.hr.user.tab.detail.form.UserDetailForm',{
    extend: 'Ext.form.Panel',
    alias : 'widget.user-detail-form',
    requires: [
        'Ext.button.Button',
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.layout.container.Column',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'Miraeweb.form.field.CodeCombo',
        'MyApp.view.hr.user.tab.detail.form.UserDetailFormController'
    ],

    controller: 'user-detail-form',

    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    bodyPadding : 20,
    items : [{
        xtype : 'fieldset',
        title : '계좌정보',
        layout : 'column',
        defaults : {
            columnWidth : 0.333,
            margin : '0 20 0 0'
        },
        items : [{
            xtype: 'code-combo',
            fieldLabel : '은행',
            name : 'bankCode',
            codeGroup : 'BANK_CODE'
        },{
            xtype : 'textfield',
            fieldLabel : '계좌번호',
            name : 'bankAccount'
        },{
            xtype : 'textfield',
            fieldLabel : '예금주',
            name : 'ownerName',
            margin : '0 0 0 0'
        }]
    },{
        xtype : 'fieldset',
        title : '주소정보',
        layout : 'column',
        defaults : {
            columnWidth : 0.333
        },
        items : [
            {
                xtype : 'fieldcontainer',
                margin : '0 20 0 0',
                fieldLabel : '우편번호',
                layout : {
                    type : 'hbox',
                    align : 'stretch'
                },
                items : [ {
                    xtype : 'textfield',
                    name : 'zipCode',
                    margin : '0 5 0 0',
                    flex : 1
                },{
                    xtype : 'button',
                    text : '우편번호 찾기'
                }]
            },

           {
            xtype : 'textfield',
            fieldLabel : '주소',
            name : 'address1',
            margin : '0 5 0 0'
        },{
            xtype : 'textfield',
            name : 'address2',
        }]

    }]
});
