$(document).ready(function()
{
    $('.quickview-title').click(function()
    {
        var $productview = $(this).parent().parent().next();
        $($productview).fadeIn('1000');

    })
    $('.close-btn').click(function()
    {
        var $closebtn = $(this).parent();
        $($closebtn).fadeOut('800');
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }