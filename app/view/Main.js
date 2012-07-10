/**
 * Copyright 2012, Raxa
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
Ext.define('Med-Table.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    initialize: function () {
        audio = (Ext.getCmp('audio1'));
        audio.toggle();
    },

    config: {
        title: 'Home',
        iconCls: 'home',
        xtype: 'container',
        layout: 'hbox',
        pack: 'center',
        items: [{
            xtype: 'audio',
            loop: true,
            id: 'audio1',
            hidden: true,
            url: 'resources/Audio/Welcome.mp3'
        }, {
            xtype: 'image',
            src: 'resources/images/regcard.png',
            flex: 1,
            margin: 50
        }, {
            xtype: 'container',
            flex: 1,
            margin: 50,
            layout: "vbox",
            items: [{
                xtype: 'textfield',
                name: 'regno',
                id: 'regno'
            }, {
                xtype: 'spacer',
                height: 50
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [{
                    xtype: 'button',
                    text: '१',
                    badgeText: '1',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "1")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '२',
                    badgeText: '2',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "2")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '३',
                    badgeText: '3',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "3")
                    },
                    flex: 1
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [{
                    xtype: 'button',
                    text: '४',
                    badgeText: '4',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "4")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '५',
                    badgeText: '5',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "5")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '६',
                    badgeText: '6',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "6")
                    },
                    flex: 1
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [{
                    xtype: 'button',
                    text: '७',
                    badgeText: '7',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "7")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '८',
                    badgeText: '8',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "8")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '९',
                    badgeText: '9',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "9")
                    },
                    flex: 1
                }]
            }, {
                xtype: 'container',
                layout: 'hbox',
                flex: 1,
                items: [{
                    xtype: 'button',
                    text: '<img src="resources/images/backspace1.png" height="60">',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        inp = inp.slice(0, -1);
                        Ext.getCmp('regno').setValue(inp)
                    },
                    ui: 'decline',
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '०',
                    badgeText: '0',
                    handler: function () {
                        var inp = Ext.getCmp('regno').getValue();
                        Ext.getCmp('regno').setValue(inp + "0")
                    },
                    flex: 1
                }, {
                    xtype: 'button',
                    text: '<img src="resources/images/enter reg no.png" height="70px" width="70px">',
                    ui: 'confirm',
                    handler: function () {
                        if (!this.overlay) {
                            this.overlay = Ext.Viewport.add({
                                xtype: 'panel',
                                id: 'confirmpanel',
                                modal: true,
                                //hideOnMaskTap: true,
                                showAnimation: {
                                    type: 'popIn',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                hideAnimation: {
                                    type: 'popOut',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                centered: true,
                                width: Ext.os.deviceType == 'Phone' ? 360 : 500,
                                height: Ext.os.deviceType == 'Phone' ? 320 : 680,
                                styleHtmlContent: true,
                                items: [{
                                    docked: 'top',
                                    xtype: 'toolbar',
                                    title: 'कृपया पुष्टि करें',
                                    height: '60px'
                                }, {
                                    xtype: 'image',
                                    src: 'resources/images/Sample Photo.jpg',
                                    height: '150px',
                                    margin: '10 0 10 90'
                                }, {
                                    html: '<h4>नाम: राजेश कुमार</h4><h4>उम्र: 25</h4><h4>वजन: 54 किलो</h4><h4>गांव: गनियारी</h4><h4>तहसील: तखतपुरर</h4>'
                                }, {
                                    docked: 'bottom',
                                    xtype: 'toolbar',
                                    height: '100px',
                                    items: [{
                                        xtype: 'button',
                                        text: '<img src="resources/images/tick-01.png">',
                                        handler: function () {
                                            Ext.getCmp('confirmpanel').destroy(),
                                                audio.stop();
                                                Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Menu'))
                                        },
                                        padding: '2px',
                                        left: '50px'
                                    }, {
                                        xtype: 'button',
                                        text: '<img src="resources/images/cross-01.png">',
                                        handler: function (hideOnMaskTap) {
                                            //Ext.getCmp('confirmpanel').hide(),
                                            Ext.getCmp('confirmpanel').destroy(),
                                                audio.stop();
                                                Ext.Viewport.setActiveItem(Ext.create('Med-Table.view.Main'))
                                        },
                                        padding: '2px',
                                        left: '240px'
                                    }]
                                }],
                                scrollable: true
                            });
                        }
                        this.overlay.show();
                    },
                    flex: 1
                }]
            }]
        }]
    }
});