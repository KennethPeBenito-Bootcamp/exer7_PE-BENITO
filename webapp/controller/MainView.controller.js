sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.training.exer7pebenito.controller.MainView", {
        onInit() {
        },

        onSelectEmployee: function(oEvent){
            // get control list

            var oList = oEvent.getSource();
            //get selected line

            var oSelItem = oList.getSelectedItem();
            //get the context binding path

            var sSelItemPath = oSelItem.getBindingContextPath();

            //bind to form control
            this.getView().byId("formEmployee").bindElement({
                path:sSelItemPath
            });
        },

        onPressRead: function(){
            //Get model
            var oModel  = this.getOwnerComponent().getModel();

            var sReadUri = oModel.createkey("/Employees", {
                    EmployeeId: 7906109
            });

            oModel.read(sReadUri, {
                success: function(data){

                },
                error: function(data){

                }
            })
        },

        onPressCreate: function(){
            var oView = this.getView();
            //Get new values
            var sNewFirstName = oView.byId("inFirstName").getValue();
            var sNewLastName = oView.byId("inLastName").getValue();

            
            var oData = { 
                FirstName: sNewFirstName,
                LastName: sNewLastName,
            }
            //Get model
            var oModel  = this.getOwnerComponent().getModel();

            var sEntity = "/Employees";
            //Create the data
            oModel.create(sEntity, oData, {
                success: function(data){

                },
                error: function(data){

                }
            })
        },

        onPressUpdate: function(){
            //Get selected items
            var oView = this.getView();
            var oList = oView.byId("listEmployee");
            
            var oSelItem = oList.getSelectedItem();

            //get context path
            var sSelItemPath = oSelItem.getBindingContextPath();
            //Get new values
            var sNewFirstName = oView.byId("inFirstName").getValue();
            var sNewLastName = oView.byId("inLastName").getValue();

            
            var oData = { 
                FirstName: sNewFirstName,
                LastName: sNewLastName,
            }

            //Get model
            var oModel  = this.getOwnerComponent().getModel();

            //Update the data
            oModel.update(sSelItemPath, oData, {
                success: function(data){

                },
                error: function(data){

                }
            })
        },

        onPressDelete: function(){
            //Get selected items
            var oView = this.getView();
            //get control list
            var oList = oView.byId("listEmployee");
            
            //get selected item
            var oSelItem = oList.getSelectedItem();

            //get context path
            var sSelItemPath = oSelItem.getBindingContextPath();
            
            var oData = { 
                FirstName: sNewFirstName,
                LastName: sNewLastName,
            }

            //Get model
            var oModel  = this.getOwnerComponent().getModel();

            //Update the data
            oModel.remove(sSelItemPath, {
                success: function(data){

                },
                error: function(data){

                }
            })
        } 

    });
});