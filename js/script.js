function reg()
{
	if ((logform.input.value!="") && (logform.pass.value!="") && (logform.mail.value!="") && (logform.pass.value==logform.agpass.value))
	{
		alert('Вы успешно зарегистрировались!');
		window.location = "../index.html";
	}
	else
	{
		alert('Произошла ошибка. Проверьте введенные данные.')
	}
}

function log()
{
	if ((logform.input.value!="") && (logform.pass.value!=""))
	{
		alert('Вы успешно вошли!');
		window.location = "../index.html";
	}
	else
	{
		alert('Произошла ошибка. Проверьте введенные данные.')
	}
}

function trash()
{
	alert('Добавлено в корзину.');
	window.location = "cart.html";
}

function cart()
{
	if ((logform.input1.value!="") && (logform.input2.value!="") && (logform.input3.value!="") && (logform.input4.value!="") && (logform.input5.value!=""))
    {
		window.location = "payment.html"; 	
    }
    else
    {
    	alert('Вы не заполнили все поля!');
    }
}

function opl() 
{
    var type = document.getElementsByName("q1");
    if(type[0].checked)
    {
    	alert("Ваш заказ успешно принят! Ожидайте доставки.")
        window.location = "../index.html";
    }
    else if(type[1].checked)
    {
        window.location = "cart1.html";
    }
}

function complete()
{
	if ((logform.input1.value!="") && (logform.input2.value!="") && (logform.input3.value!="") && (logform.input4.value!=""))
    {
    	if ((logform.input1.value.length!=16) || ((logform.input2.value.length!=2) || (parseInt(logform.input2.value)>31)) || ((logform.input3.value.length!=2) || (parseInt(logform.input3.value)>12)) || (logform.input4.value.length!=3))
    	{
    		alert('Проверьте корректность введеных данных!')
    	}
    	else
    	{
			alert("Ваш заказ успешно принят! Ожидайте доставки.")
        	window.location = "../index.html";
    	}
    }
    else
    {
    	alert('Вы не заполнили все поля!');
    }
}