define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "9e28a4a0-fe51-422c-9ff7-8432c734b178",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_slrvqv2_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.MyButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_9sr32fz",
					"labelPosition": "auto",
					"control": "$NumberAttribute_9sr32fz"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_5xxmjhr",
					"labelPosition": "auto",
					"control": "$NumberAttribute_5xxmjhr"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_gr8u8am",
					"labelPosition": "auto",
					"control": "$NumberAttribute_gr8u8am",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0fqlqwx",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0fqlqwx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_0z4fpei",
					"labelPosition": "auto",
					"control": "$LookupAttribute_0z4fpei",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_fx0yw7w",
					"labelPosition": "auto",
					"control": "$StringAttribute_fx0yw7w",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferTypeUsrCommissionPercent",
					"control": "$UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrManager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_uo13j3u",
					"labelPosition": "auto",
					"control": "$LookupAttribute_uo13j3u",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_opofbh2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_opofbh2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrManager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_lcyosch",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_lcyosch_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_c1hk8wy",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_lcyosch",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_sa0a1ta",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_c1hk8wy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_sh4ylo9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_sh4ylo9_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_sa0a1ta",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_h5jrvdm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_h5jrvdm_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_he2txr7DS"
						}
					}
				},
				"parentName": "FlexContainer_sa0a1ta",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ce4bg0n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ce4bg0n_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_sa0a1ta",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_lpxcnra",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_lpxcnra_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_he2txr7"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ce4bg0n",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_0r0ov8i",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_0r0ov8i_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ce4bg0n",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_4crhbo8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_4crhbo8_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_he2txr7"
					]
				},
				"parentName": "FlexContainer_sa0a1ta",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_aygznp7",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_lcyosch",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_he2txr7",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_he2txr7",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_he2txr7DS_Id",
					"columns": [
						{
							"id": "c08ed3e5-c5c3-ce84-5115-a82b73225615",
							"code": "GridDetail_he2txr7DS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_he2txr7DS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 166
						},
						{
							"id": "1abbecaa-f18f-67fd-9a85-ddf2f13daa83",
							"code": "GridDetail_he2txr7DS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_he2txr7DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact",
							"width": 159
						},
						{
							"id": "152cea18-b9cc-2758-cbdd-ea2d4b2ab507",
							"code": "GridDetail_he2txr7DS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_he2txr7DS_CreatedOn)#",
							"dataValueType": 7,
							"width": 132
						},
						{
							"id": "f6654935-fb67-1093-204f-db7d8c179556",
							"code": "GridDetail_he2txr7DS_UsrComment",
							"path": "UsrComment",
							"caption": "#ResourceString(GridDetail_he2txr7DS_UsrComment)#",
							"dataValueType": 28,
							"width": 153
						},
						{
							"id": "1ef6b23c-e82b-52fd-85e3-6013d59cb083",
							"code": "GridDetail_he2txr7DS_UsrOwner",
							"path": "UsrOwner",
							"caption": "#ResourceString(GridDetail_he2txr7DS_UsrOwner)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						}
					]
				},
				"parentName": "GridContainer_aygznp7",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"NumberAttribute_9sr32fz": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "Price can not be less than 0"
								}
							}
						}
					},
					"NumberAttribute_5xxmjhr": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "Area can not be less than 0"
								}
							}
						}
					},
					"LookupAttribute_0fqlqwx": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"LookupAttribute_0z4fpei": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"StringAttribute_fx0yw7w": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"LookupAttribute_uo13j3u": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"GridDetail_he2txr7": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_he2txr7DS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_he2txr7DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_he2txr7DS.UsrVisitDateTime"
									}
								},
								"GridDetail_he2txr7DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_he2txr7DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_he2txr7DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_he2txr7DS.CreatedOn"
									}
								},
								"GridDetail_he2txr7DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_he2txr7DS.UsrComment"
									}
								},
								"GridDetail_he2txr7DS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_he2txr7DS.UsrOwner"
									}
								},
								"GridDetail_he2txr7DS_Id": {
									"modelConfig": {
										"path": "GridDetail_he2txr7DS.Id"
									}
								}
							}
						}
					},
					"NumberAttribute_gr8u8am": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					},
					"UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_he2txr7DS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_he2txr7DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
/* The custom implementation of the system query handler. */
handler: async (request, next) => {
/* If the UsrPriceUSD field changes, take the following steps. */
if (request.attributeName === 'NumberAttribute_9sr32fz' || // if price changed
  request.attributeName === 'UsrOfferTypeUsrCommissionPercent' ) { // or multiplier changed
var price = await request.$context.NumberAttribute_9sr32fz; 
var percent = await request.$context.UsrOfferTypeUsrCommissionPercent;
var commission = price * percent / 100;
request.$context.NumberAttribute_gr8u8am = commission;
	if(price >= 50000){
		request.$context.enableAttributeValidator('StringAttribute_fx0yw7w', 'required');
		console.log('Val>-50000',price)
	}else {
                    request.$context.disableAttributeValidator('StringAttribute_fx0yw7w', 'required');
    	   }
	}
/* Call the next handler if it exists and return its result. */
return next?.handle(request);
}
			},
			{
				request: "usr.MyButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
				this.console.log("Button works...");
				Terrasoft.showInformation("My button was pressed.");
				var price = await request.$context.NumberAttribute_9sr32fz;
				this.console.log("Price = " + price);
				/* Call the next handler if it exists and return its result. */
				return next?.handle(request);
			}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
				/* The validator type must contain a vendor prefix.
Format the validator type in PascalCase. */
"usr.DGValidator": {
validator: function (config) {
return function (control) {
let value = control.value;
let minValue = config.minValue;
let valueIsCorrect = value >= minValue;
var result;
if (valueIsCorrect) {
result = null;
} else {
result = {
"usr.DGValidator": {
message: config.message
}
};
}
return result;
};
},
params: [
{
name: "minValue"
},
{
name: "message"
}
],
async: false
}
		}/**SCHEMA_VALIDATORS*/
	};
});