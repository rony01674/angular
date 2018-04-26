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
		bdr = document.getElementById('bdr');
		dhaka = document.getElementById('dhaka');
	
	

    //open and close menu when the button is clicked
	var open = true;
	dmc.addEventListener('click', handler1, true);
	bcc.addEventListener('click', handler2, true);
	sms.addEventListener('click', handler3, true);
	pms.addEventListener('click', handler4, true);
	erp.addEventListener('click', handler5, true);
	army.addEventListener('click', handler6, true);
	police.addEventListener('click', handler7, true),
	bdr.addEventListener('click', handler811, true),
	dhaka.addEventListener('click', handler812, true),
	button.addEventListener('click', handler8, true),
	button.addEventListener('click', handler9, true),
	button.addEventListener('click', handler10, true),
	button.addEventListener('click', handler11, true),
	button.addEventListener('click', handler12, true),
	button.addEventListener('click', handler13, true),
	button.addEventListener('click', handler14, true),
	button.addEventListener('click', handler15, true),
	button.addEventListener('click', handler16, true);

	
     classie.add(wrapper, 'opened-nav');
	
	
	function handler1(){		 
	    button.innerHTML = '<a onClick="handler8()">DMC</a>';
		
	}
	function handler2(){		 
	    button.innerHTML = '<a onClick="handler9()">BCC</a>';
	}
	function handler3(){		 
	    button.innerHTML = '<a onClick="handler10()">SMS</a>';
	}
	function handler4(){		 
	    button.innerHTML = '<a onClick="handler11()">PMS</a>';
	}
	function handler5(){		 
	    button.innerHTML = '<a onClick="handler12()">ERP</a>';
	}
	function handler6(){		 
	    button.innerHTML = '<a onClick="handler13()">ARMY</a>';
	}
	function handler7(){		 
	    button.innerHTML = '<a onClick="handler14()">POLICE</a>';
	}
	function handler811(){		 
	    button.innerHTML = '<a onClick="handler15()">BDR</a>';
	}
	function handler812(){		 
	    button.innerHTML = '<a onClick="handler16()">DHAKA</a>';
	}
	function handler8(){
	    button.onclick = function () {
 	    window.open('http://www.dmc.com','_blank');
    };
	}
		function handler9(){
	    button.onclick = function () {
 	    window.open('http://www.bcc.com','_blank');
    };
	}
	function handler10(){
	    button.onclick = function () {
 	    window.open('http://www.sms.com','_blank');
    };
	}
	
	function handler11(){
	    button.onclick = function () {
 	    window.open('http://www.pms.com','_blank');
    };
	}
	function handler12(){
	    button.onclick = function () {
 	    window.open('http://www.erp.com','_blank');
    };
	}
	
	function handler13(){
	    button.onclick = function () {
 	    window.open('http://www.army.com','_blank');
    };
	}
	
	
function handler14(){
	    button.onclick = function () {
 	    window.open('http://www.police.com','_blank');
    };
	}
	function handler15(){
	    button.onclick = function () {
 	    window.open('http://www.bdr.com','_blank');
    };
	}
	function handler16(){
	    button.onclick = function () {
 	    window.open('http://www.dhaka.com','_blank');
    };
	}
	
	
})();
