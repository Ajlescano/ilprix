//Variables y Constantes
const KEY_STORAGE = 'consultaDatos';
let listaDatosConsulta = load(KEY_STORAGE);		
let contenedorDefinitivo = document.getElementById('contenedorDefinitivo');
let confirmeDatos = document.getElementById('confirmeDatos');
let indicadores = ["Nombre: ","Apellido: ","Email: ","Novedades: ","Zona: ","Su consulta: "];
let fired = 0;
let btnConfirmar = document.getElementById('btnConfirm');

//Eventos


contenedorDefinitivo.addEventListener('submit', (event)=> {
	event.preventDefault();
	addDatos(event.target.elements.nombre)
	addDatos(event.target.elements.apellido)
	addDatos(event.target.elements.email)
	addDatos(event.target.elements.newsletter)
	addDatos(event.target.elements.zonas)
	addDatos(event.target.elements.consulta)
})

// contenedorDefinitivo.addEventListener('submit', (event)=> {
// 	event.preventDefault();
// 	addDatos(event.target.elements.apellido)
// })

// contenedorDefinitivo.addEventListener('submit', (event)=> {
// 	event.preventDefault();
// 	addDatos(event.target.elements.email)
// })

// contenedorDefinitivo.addEventListener('submit', (event)=> {
// 	event.preventDefault();
// 	addDatos(event.target.elements.newsletter)
// })

// contenedorDefinitivo.addEventListener('submit', (event)=> {
// 	event.preventDefault();
// 	addDatos(event.target.elements.zonas)
// })

// contenedorDefinitivo.addEventListener('submit', (event)=> {
// 	event.preventDefault();
// 	addDatos(event.target.elements.consulta)	
// })

contenedorDefinitivo.addEventListener('submit', (event)=> {
	document.getElementById('hide').style.display = 'block';
	document.getElementById('btnConfirm').style.opacity = '1';
	contenedorDefinitivo.reset();
})

btnConfirmar.addEventListener('click', (event)=> {
	document.getElementById('tymsg').style.display = 'block';	
	document.getElementById('hide').style.display = 'none';
	document.getElementById('btnConfirm').style.opacity = '0';
})

//Funciones

function addDatos(field) {
	listaDatosConsulta.push(field.value);
	save(listaDatosConsulta);
	renderDatos();
}

function renderDatos() {
	let lastItem = listaDatosConsulta[listaDatosConsulta.length-1];
	confirmeDatos.appendChild(buildItem(lastItem));
}

function buildItem(todoItem) {
	fired++;
	let item = document.createElement('li');
	switch (fired) {
		case 1:		
		item.textContent = indicadores[0]+todoItem;
		break;
		case 2:		
		item.textContent = indicadores[1]+todoItem;
		break;
		case 3:		
		item.textContent = indicadores[2]+todoItem;
		break;
		case 4:		
		item.textContent = indicadores[3]+todoItem;
		break;
		case 5:		
		item.textContent = indicadores[4]+todoItem;
		break;
		case 6:		
		item.textContent = indicadores[5]+todoItem;
		break;
	}
	return item;
}

function save(consultaDatos) {
	localStorage.setItem(KEY_STORAGE, JSON.stringify(consultaDatos));
}

function load(storageKey) {
	if(localStorage.getItem(storageKey)) {
		return JSON.parse(localStorage.getItem(storageKey));
	} else {
		return [];
	}
}