<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Negociación

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/img01.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p.mb-3(data-aos="fade-left") Negociar es mucho más que cerrar un trato; es construir acuerdos que generen valor para ambas partes. En esta unidad, el aprendiz explorará los fundamentos de la negociación comercial, comprendiendo sus modelos, técnicas persuasivas y herramientas discursivas. La negociación estratégica implica entender al cliente, anticipar sus necesidades y utilizar recursos comunicativos que faciliten el consenso sin perder la coherencia comercial.
          .tarjeta.p-4.bg01(data-aos="fade-left")
            p.mb-0 A través de ejemplos empresariales y herramientas prácticas, esta unidad busca que el aprendiz desarrolle habilidades para negociar propuestas comerciales de forma ética, efectiva y adaptada a distintos contextos. Desde el uso de técnicas de anclaje hasta la construcción de scripts persuasivos, cada contenido está orientado a fortalecer la capacidad de influir positivamente en la toma de decisiones del cliente.
    
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_1 2.1 Concepto

    .bloque-texto-g.color-primario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La negociación puede definirse como un proceso dinámico y estructurado mediante el cual dos o más partes con intereses en común, pero también con diferencias, interactúan para llegar a un acuerdo que genere valor para todos los involucrados. En el contexto comercial, se centra en cerrar propuestas de productos o servicios que satisfagan tanto las necesidades del cliente como los objetivos de la empresa.

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_2 2.2 Modelo

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      p.mb-4(data-aos="fade-left") Los modelos de negociación ofrecen marcos teóricos que permiten comprender cómo se desarrollan los acuerdos entre partes con intereses distintos. 
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/img03.svg" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.mb-lg-0.mb-3
            .bloque-texto-b.color-secundario-10
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según Fisher, Ury y Patton (2011), existen tres modelos principales: distributivo, integrativo y colaborativo. Cada uno responde a una lógica distinta y se aplica según el contexto comercial.
                i.fas.fa-quote-right
          .col-12.col-lg-2.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema2/img14.svg" alt='Imagen decorativa').p-xl-3
          .col-12.col-lg-4
            p.mb-0 El modelo distributivo se basa en la competencia: las partes negocian para obtener el mayor beneficio posible, como en una negociación de precios entre proveedor y cliente. 
    
    .tarjeta.p-4.bg01(data-aos="fade-left").mb-5
      p.mb-0 El modelo integrativo busca beneficios mutuos, promoviendo soluciones que satisfagan a ambas partes; por ejemplo, una empresa de implementos deportivos que ofrece descuentos a un centro de CrossFit a cambio de visibilidad en redes sociales. El modelo colaborativo va más allá, construyendo relaciones a largo plazo basadas en confianza y cooperación.

    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 1.
            span Modelos de negociación y sus características
          .tabla-a.mb-0(data-aos="fade-right")
            table
              caption 
                p.mb-0
                  b Fuente: 
                  | Adaptado de Fisher, Ury & Patton, 2011.
              thead
                tr
                  th Modelo
                  th Características principales
                  th Ejemplo aplicado
              tbody
                tr
                  td.text-center Distributivo
                  td 
                    ul.bullets
                      li Competencia.
                      li Beneficio individual.
                      li Enfoque en precio.

                  td Negociación de descuento puntual por volumen.
                
                tr
                  td.text-center Integrativo
                  td 
                    ul.bullets
                      li Beneficio mutuo.
                      li Solución conjunta. 
                      li Enfoque en valor.

                  td Propuesta con beneficios cruzados (descuento + visibilidad).
                
                tr
                  td.text-center Colaborativo
                  td 
                    ul.bullets
                      li Relación a largo plazo.
                      li Confianza.
                      li Cooperación continua.
                  td Alianza estratégica entre proveedor y centro deportivo.

    separador


    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_3 2.3	Técnicas de anclaje


    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4.tarjeta(data-aos="fade-in")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
            .px-4
              p.mb-0 Las técnicas de anclaje y persuasión son herramientas psicológicas que influyen en la percepción del cliente durante la negociación. El anclaje consiste en presentar una primera cifra o propuesta que sirva como punto de referencia, condicionando las decisiones posteriores (Kahneman, 2011). Por ejemplo, si una empresa ofrece inicialmente un paquete premium de $1.200.000, cualquier oferta posterior parecerá más accesible en comparación.


    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/img05.svg" alt='Imagen decorativa')
      .col-12.col-lg-10(data-aos="fade-left")
          .tarjeta.p-4.bg01(data-aos="fade-left")
            p.mb-0 La persuasión, por su parte, se basa en principios como la reciprocidad, la escasez, la autoridad y la coherencia (Cialdini, 2021). Una propuesta comercial puede incluir testimonios de clientes satisfechos (autoridad), promociones limitadas (escasez) o beneficios exclusivos por fidelidad (reciprocidad). Estas técnicas deben aplicarse con ética y claridad, evitando manipulaciones o promesas engañosas.
    

    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Técnicas de anclaje y persuasión en propuestas comerciales
            img.image(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')


    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img06.png', alt='imagen decorativa')
          .col-12.col-lg-8.mb-4.mb-lg-0
            .custom-slider.color-primario
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema2/img07.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Anclaje
                  p Primera cifra como referencia, condiciona percepción.
                  p 
                    b Ejemplo aplicado: 
                    | oferta inicial alta para destacar valor de la siguiente.
                
                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema2/img08.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Reciprocridad
                  p Ofrecer algo para generar respuesta positiva.
                  p 
                    b Ejemplo aplicado: 
                    | regalo por primera compra.
                
                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema2/img09.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Escasez
                  p Limitación de tiempo o unidades disponibles.
                  p 
                    b Ejemplo aplicado: 
                    | “solo por hoy: 10 kits disponibles”.

                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema2/img10.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Autoridad
                  p Uso de expertos, testimonios, certificaciones.
                  p 
                    b Ejemplo aplicado: 
                    | “recomendado por entrenadores certificados”

                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema2/img11.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Coherencia
                  p Mensaje alineado con valores del cliente.
                  p 
                    b Ejemplo aplicado: 
                    | propuesta que refleja compromiso con sostenibilidad. 


    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_2_4 2.4 Desarrollo <em>Scripts</em>


    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema2/img12.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p El <em>script</em> es una herramienta discursiva que guía la interacción entre el vendedor y el cliente, asegurando que el mensaje sea claro, persuasivo y adaptado al contexto. 
        .bloque-texto-b.color-secundario-10
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Cardona (2020), un buen <em>script</em> debe incluir saludo, presentación de la oferta, beneficios, manejo de objeciones y cierre. Aunque debe tener estructura, también debe permitir flexibilidad para responder a las necesidades del cliente.
            i.fas.fa-quote-right


    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-5.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8
               p.mb-0 
                b Por ejemplo, 
                | un <em>script</em> para presentar implementos deportivos a un centro de <em>CrossFit</em> podría comenzar con una pregunta que conecte emocionalmente: “¿Qué tipo de equipamiento necesitan para mejorar la experiencia de sus atletas?” Luego, se presenta la oferta destacando beneficios como resistencia, diseño ergonómico y garantía. Finalmente, se propone una acción concreta: “¿Le gustaría que le enviemos una cotización personalizada?”
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema2/img13.png', alt='imagen decorativa').w-auto.img09

    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 2.
            span Estructura de un <em>script</em> comercial
          .tabla-a.mb-0(data-aos="fade-right")
            table
              caption 
                p.mb-0
                  b Fuente: 
                  | Adaptado de Cardona, 2020.
              thead
                tr
                  th Sección
                  th Propósito
                  th Ejemplo aplicado
              tbody
                tr
                  td.text-center Saludo
                  td Generar cercanía y disposición.
                  td “Buenos días, gracias por atendernos…”.
                tr
                  td.text-center Diagnóstico
                  td Identificar necesidades del cliente.
                  td “¿Qué tipo de equipamiento buscan para sus rutinas?”.
                tr
                  td.text-center Presentación
                  td Exponer la oferta y sus beneficios.
                  td “Nuestros kits incluyen barras, discos y accesorios…”.
                tr
                  td.text-center Objeciones
                  td Anticipar y responder dudas o resistencias.
                  td “Entendemos que el presupuesto es clave, por eso…”.
                tr
                  td.text-center Cierre
                  td Proponer acción concreta o seguimiento.
                  td “¿Le gustaría recibir una propuesta formal esta semana?”.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
