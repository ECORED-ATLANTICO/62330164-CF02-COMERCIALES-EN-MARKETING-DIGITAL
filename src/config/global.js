export default {
  global: {
    Name: 'Negociación de propuestas comerciales',
    Description:
      'Este componente desarrolla competencias orientadas a la estructuración, presentación y seguimiento de propuestas comerciales en entornos digitales. A través del estudio de la comunicación comercial, los modelos de negociación, las técnicas persuasivas, los protocolos de seguimiento y los programas de fidelización, el aprendiz adquiere herramientas para influir éticamente en la toma de decisiones del cliente y construir relaciones sostenibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Interferencias',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Herramientas digitales',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Modelo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de anclaje',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Desarrollo <em>Scripts</em>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas de seguimiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas de seguimiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Informes',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Programas de fidelización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Objetivos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Beneficios',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'tipos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Estrategias de fidelización',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de seguimiento comercial',
      referencia:
        'Vidal, E. (2023). <em>Técnicas de seguimiento comercial: métricas, plantillas y ejemplos.</em> Ventas de Alto Octanaje.',
      tipo: 'Artículo web',
      link:
        'https://www.ventasdealtooctanaje.com/blog/tecnicas-de-seguimiento-comercial-metricas-plantillas-y-ejemplos-de-aplicacion-para-gerentes-y-vendedores',
    },
    {
      tema: 'Estrategias de seguimiento proactivo',
      referencia:
        'Nomadia Group. (2023). <em>Seguimiento comercial en 2023: ¡la guía completa!</em> Nomadia.',
      tipo: 'Artículo web',
      link:
        'https://www.nomadia-group.com/es/recursos/blog/seguimiento-comercial-en-2023-la-guia-completa/',
    },
    {
      tema: 'Comunicación comercial efectiva',
      referencia:
        'Maddio, G. (s.f.). <em>Técnicas de ventas y comunicación comercial.</em> Universidad Nacional de Cuyo.',
      tipo: 'Capítulo de libro',
      link:
        'https://fce.uncuyo.edu.ar/upload/se-adm-n66-tecnicas-de-ventas-y-comunicacion-comercial-gustavo-maddio.pdf',
    },
    {
      tema: 'Herramientas digitales para seguimiento',
      referencia:
        'LaGrowthMachine. (2023).<em> Impulse sus ventas con estas estrategias de seguimiento comercial.</em> LaGrowthMachine.',
      tipo: 'Artículo web',
      link: 'https://lagrowthmachine.com/es/seguimiento-comercial/',
    },
  ],
  glosario: [
    {
      termino: 'Anclaje',
      significado:
        'Técnica persuasiva que consiste en presentar una cifra inicial que influye en la percepción del cliente sobre ofertas posteriores.',
    },
    {
      termino: 'Autoridad',
      significado:
        'Principio persuasivo que utiliza testimonios, certificaciones o expertos para generar credibilidad en una propuesta comercial.',
    },
    {
      termino: 'Canal de comunicación',
      significado:
        'Medio a través del cual se transmite el mensaje comercial, como correo electrónico, redes sociales o presentaciones digitales.',
    },
    {
      termino: 'Cliente',
      significado:
        'Receptor de la propuesta comercial, cuya necesidad o interés motiva el diseño de la oferta.',
    },
    {
      termino: 'Comunicación comercial',
      significado:
        'Proceso estratégico mediante el cual una empresa transmite valor a sus clientes a través de mensajes claros y persuasivos.',
    },
    {
      termino: 'CRM',
      significado:
        'Siglas de <em>Customer Relationship Management</em>, herramienta digital que permite gestionar relaciones con clientes y automatizar el seguimiento comercial.',
    },
    {
      termino: 'Escasez',
      significado:
        'Técnica persuasiva que genera urgencia al limitar la disponibilidad de un producto o servicio.',
    },
    {
      termino: 'Fidelización',
      significado:
        'Estrategia comercial orientada a mantener y fortalecer la relación con clientes a largo plazo.',
    },
    {
      termino: 'Frecuencia de contacto',
      significado:
        'Número y ritmo de interacciones con el cliente durante el proceso de seguimiento comercial.',
    },
    {
      termino: 'Informe comercial',
      significado:
        'Documento que recopila datos sobre el seguimiento de propuestas, incluyendo indicadores como respuestas, reuniones y cierres.',
    },
    {
      termino: 'Modelo colaborativo',
      significado:
        'Enfoque de negociación que busca construir relaciones duraderas basadas en confianza y cooperación.',
    },
    {
      termino: 'Modelo distributivo',
      significado:
        'Enfoque de negociación competitivo donde cada parte busca maximizar su beneficio individual.',
    },
    {
      termino: 'Persuasión',
      significado:
        'Capacidad de influir en las decisiones del cliente mediante argumentos, emociones o técnicas estratégicas.',
    },
    {
      termino: 'Propuesta comercial',
      significado:
        'Documento estructurado que presenta una oferta de productos o servicios, destacando beneficios, condiciones y llamado a la acción.',
    },
    {
      termino: '<em>Script</em> comercial',
      significado:
        'Guion estructurado que guía la interacción entre vendedor y cliente, facilitando la presentación de la oferta y el manejo de objeciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Docsity. (s.f.). Tema 8: <em>La comunicación comercial.</em> Apuntes de Investigación Empresarial. ',
      link:
        'https://www.docsity.com/es/docs/tema-8-la-comunicacion-comercial-la-comunicacion-comercial/3402209/',
    },
    {
      referencia:
        'Domínguez Casas, Á. M. (2017). <em>Los programas de fidelización online: un estudio desde el engagement marketing y las comunidades de marca </em>[Tesis doctoral, Universidad de Valladolid]. ',
      link:
        'https://www.academia.edu/85655717/Los_elementos_de_la_negociaci%C3%B3n_c%C3%B3mo_intervienen_dentro_de_las_etapas',
    },
    {
      referencia:
        'Miranda Plata, P. A. (2020). <em>Creación e implementación de formatos para el seguimiento de los procesos del área comercial.</em> Universidad Santo Tomás. ',
      link:
        'https://repository.usta.edu.co/server/api/core/bitstreams/e621c052-d5e3-4a71-a432-c15eef450ce2/content',
    },
    {
      referencia:
        'Niño Sierra, D. F. (s.f.).<em> Fidelización del cliente.</em> Fundación Universitaria UNIEMPRESARIAL.',
      link:
        'https://bibliotecadigital.ccb.org.co/server/api/core/bitstreams/a4b5d64d-a649-4170-8d61-6b8b400e6dbd/content',
    },
    {
      referencia:
        'Salcedo, J. (2021).<em> Estrategias y táctica de negociación.</em> Universidad San Marcos. ',
      link:
        'https://repositorio.usam.ac.cr/xmlui/bitstream/handle/11506/1771/LEC HAB BLA 0003 2021.pdf?sequence=1',
    },
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Ríos',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
