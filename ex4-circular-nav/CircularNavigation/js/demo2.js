(function(){
	var button = document.getElementById('cn-button'),
	    wrapper = document.getElementById('cn-wrapper'),
		dmc = document.getElementById('dmc'),
		bcc = document.getElementById('bcc'),
		sms = document.getElementById('sms'),
		pms = document.getElementById('pms'),
		erp = document.getElementById('erp'),
		army = document.getElementById('army'),
		police = document.getElementById('police');
	

    //open and close menu when the button is clicked
	var open = true;
	dmc.addEventListener('click', handler1, true);
	bcc.addEventListener('click', handler2, true);
	sms.addEventListener('click', handler3, true);
	pms.addEventListener('click', handler4, true);
	erp.addEventListener('click', handler5, true);
	army.addEventListener('click', handler6, true);
	police.addEventListener('click', handler7, true),
	button.addEventListener('click', handler8, true);

	
     classie.add(wrapper, 'opened-nav');
	
	
	function handler1(){		 
	    button.innerHTML = '<a onClick="handler8()">DMC</a>';
		
	}
	function handler2(){		 
	    button.innerHTML = "BCC";
	}
	function handler3(){		 
	    button.innerHTML = "SMS";
	}
	function handler4(){		 
	    button.innerHTML = "PMS";
	}
	function handler5(){		 
	    button.innerHTML = "ERP";
	}
	function handler6(){		 
	    button.innerHTML = "ARMY";
	}
	function handler7(){		 
	    button.innerHTML = "POLICE";
	}
	function handler8(){
	    button.onclick = function () {
 	    window.open('http://www.dmc.com','_blank');
    };

	}

})();
