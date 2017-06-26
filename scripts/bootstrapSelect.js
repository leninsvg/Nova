$(document).ready(function () {
    var listCar=[
        {
            id:1,
            name:'Auto'
        },{
            id:2,
            name:'Bus'
        },{
            id:3,
            name:'Camioneta'
        }
    ];
    var selectCar= $('#selectCar');
    $.each(listCar,function() 
    {
        selectCar.append($("<option />").val(this.id).text(this.name));
    });
    selectCar.selectpicker('refresh');

    $('#btnCleanSelect').click(function() {
        selectCar.empty();
        selectCar.selectpicker('refresh');
    });
});