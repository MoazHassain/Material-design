// const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
// console.log(buttonRipple);
console.log(mdc);
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topBar =mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);

const menu = mdc.menu.MDCMenu.attachTo(document.querySelector('.mdc-menu'));
menu.open = false;
let accBtn= document.querySelector("#account");
accBtn.addEventListener("click",()=>{
    menu.open= !menu.open;
});
const textField = mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
// for every text filled 
const textFieldElements=[].slice.call(document.querySelectorAll(".mdc-text-field"));
textFieldElements.forEach((textFieldE1)=>{
    mdc.textField.MDCTextField.attachTo(textFieldE1);
});

let btnDialog=document.querySelector("#btnDialog");
btnDialog.addEventListener("click", ()=> {
    dialog.open();
    dialog.autoStackButtons=false;
    dialog.escapeKeyAction="";
    dialog.scrimClickAction="";

});

const dialog = mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
dialog.listen('MDCDialog:opening', function() {
    console.log("opening");
});

dialog.listen('MDCDialog:opened', function() {
    console.log("opened");
});
dialog.listen('MDCDialog:closing', function(data) {
    console.log(data.detail);

});
dialog.listen('MDCDialog:closed', function(data) {
    console.log(data.detail);
});