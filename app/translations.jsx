const T9n = function (name, lang) {
	if (lang == 'en') return en[name] || {}
	else if (lang == 'es') return es[name] || {}
  else return {}
}
module.exports = T9n

const en = {
	header: {
		title: 'We accompany him on all protection activities in cultivation',
		tabOne: 'Inspection',
		tabTwo: 'Monitoring',
		tabThree: 'Protection',
		tabFour: 'Deposit',
	},
	client: {
		title: 'Field Inspection',
		content: 'The smartphone is the tool to record vegetel health indicators in the crop. When there is Internet access, this information is transmitted stored in the cloud.',
		id: 'segment-client',
		img: '/images/phone.png',
		google: '/images/googleEN.png'
	},
	monitor: {
		title: 'Constant Monitoring',
		content: 'Monitoring Map is your daily Supplied tools is its control plant health issues. At any time and from anywhere you can get the latest information on the presence and servidad of pests and diseases in cultivation.',
		id: 'segment-monitor',
		img: '/images/reports.png'
	},
	report: {
		title: 'Protection and Prevention',
		content: 'Historical reports such as incidence and severity allow us to study the effectiveness of protection and prevention activities. Making decisions based on information is the key to maintaining the highest quality at all times.',
		id: 'segment-report',
		img: '/images/reports.png'
	},
  footer: {
    bioTitle: 'Company Bio',
    bioContent: 'Information Patterns is a pioneer in collaboration and visual display of information. It has developed and built solutions that have been successfully deployed worldwide using best-of- breed technologies.',
    projects: 'Our Projects',
    madeBy: 'Made by'
  },
  languageButton: {
    language: 'Language'
  }
}

const es = {
  header: {
		title: 'Lo acompañamos en todas las actividades de protección e su cultivo',
		subTitle: '',
		tabOne: 'Inspección',
		tabTwo: 'Monitorio',
		tabThree: 'Protección',
		tabFour: 'Ingresar',
	},
	client: {
		title: 'Inspección en Campo',
		content: 'El teléfono intelegente es la herramienta para registrar los indicadores de sanidad vegetel en el cultivo. Cuando exista acceso a Internet, esta información es transmitida  almacenada en la nube.',
		id: 'segment-client',
		img: '/images/phone.png',
		google: '/images/googleES.png'
	},
	monitor: {
		title: 'Monitoreo Constante',
		content: 'El Mapa de Monitoreo es su herrmienta es su control diario en temas de sanidad vegetal. En todo momento y desde cualquier lugar puede obtener la información más actualizada sobre la presencia y servidad de plagas y enfermedades en su cultivo.',
		id: 'segment-monitor',
		img: '/images/reports.png'
	},
	report: {
		title: 'Protección y Prevención',
		content: 'Reportes históricos como los de Incidencia y Severidad permiten estudiar la eficacia de las actividades de protección y prevención. La toma de decisiones con base en información es la clave para mantener una altísima calidad en todo momento.',
		id: 'segment-report',
		img: '/images/reports.png'
	},
  footer: {
    bioTitle: '',
    bioContent: '',
    projects: '',
    madeBy: ''
  },
  languageButton: {
    language: ''
  }
}
