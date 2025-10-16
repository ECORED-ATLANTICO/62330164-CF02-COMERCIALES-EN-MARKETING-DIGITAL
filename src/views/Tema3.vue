<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguimiento

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/img01.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p.mb-3(data-aos="fade-left") Una propuesta comercial no termina cuando se envía: comienza realmente cuando se da seguimiento. Esta unidad aborda el conjunto de estrategias y herramientas que permiten mantener el contacto con el cliente, evaluar su interés, resolver dudas y facilitar la toma de decisiones. El seguimiento comercial es clave para convertir propuestas en acuerdos, y requiere tanto habilidades comunicativas como dominio de herramientas digitales.
          .tarjeta.p-4.bg05(data-aos="fade-left")
            p.mb-0 El aprendiz explorará técnicas efectivas de seguimiento, herramientas tecnológicas que optimizan el proceso, protocolos de contacto que garantizan profesionalismo y la elaboración de informes que permiten medir resultados. Esta unidad busca fortalecer la capacidad de mantener relaciones comerciales activas, oportunas y orientadas al cierre exitoso.
    
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_1 3.1 Técnicas de seguimiento

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/img02.svg" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p Las técnicas de seguimiento comercial permiten mantener el interés del cliente después de recibir una propuesta. 
        .bloque-texto-b.color-secundario-10
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Jobber y Lancaster (2019), estas técnicas incluyen el seguimiento telefónico, el correo electrónico personalizado, el envío de contenido adicional y la programación de reuniones; el objetivo es mantener la propuesta viva en la mente del cliente sin generar presión excesiva.
            i.fas.fa-quote-right

    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8
               p.mb-0 
                b Ejemplo empresarial. 
                | Una empresa de implementos deportivos que envía una propuesta a un centro de <em>CrossFit</em> puede realizar una llamada tres días después para preguntar si el cliente tuvo oportunidad de revisarla, también puede enviar un video demostrativo del producto o una infografía con beneficios adicionales. Estas acciones refuerzan el valor de la propuesta y demuestran interés genuino.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img03.png', alt='imagen decorativa').w-auto.img09

    .mb-5.tarjeta.color-acento-botones.p-2.px-4
      p.mb-0 
        b El seguimiento debe ser oportuno, respetuoso y adaptado al estilo de comunicación del cliente, la clave está en generar confianza y mantener el diálogo abierto.
    
    //- Col10 e Imagen
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down")
      .col-12.col-lg-8.mx-auto
        //- Figura
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
            span Técnicas de seguimiento comercial
        ImagenInfografica.color-acento-botones.d-none.d-lg-block.img-infografica-2
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema3/img04.svg', alt='Texto que describa la imagen')
              figcaption 
                b Fuente. 
                | Adaptado de Jobber & Lancaster, 2019.

          .tarjeta.color-acento-botones.p-4(x="21%" y="76.7%" numero="")
            span 02
            .row.align-items-center
              .col-4
                figure
                img(src='@/assets/curso/temas/tema3/img15.svg', alt='Texto que describa la imagen')
              .col-8
                p 
                  b Correo personalizado 
                p Refuerza el mensaje, permite adjuntar contenido. 
                  b Ejemplo: 
                  | envío de catálogo digital con beneficios adicionales.
          
          .tarjeta.color-acento-botones.p-4(x="4.9%" y="43.8%" numero="")
            span 01
            .row.align-items-center
              .col-4
                figure
                img(src='@/assets/curso/temas/tema3/img14.svg', alt='Texto que describa la imagen')
              .col-8
                p 
                  b Llamada telefónica 
                p Contacto directo, permite resolver dudas. 
                  b Ejemplo: 
                  | “¿Tuviste oportunidad de revisar la propuesta?”.

          .tarjeta.color-acento-botones.p-4(x="77.9%" y="76.7%" numero="")
            span 03
            .row.align-items-center
              .col-4
                figure
                img(src='@/assets/curso/temas/tema3/img16.svg', alt='Texto que describa la imagen')
              .col-8
                p 
                  b Reunión de seguimiento 
                p Espacio para aclarar dudas y negociar detalles. 
                  b Ejemplo: 
                  | agenda virtual para revisar condiciones comerciales.

          .tarjeta.color-acento-botones.p-4(x="95%" y="43.8%" numero="")
            span 04
            .row.align-items-center
              .col-4
                figure
                img(src='@/assets/curso/temas/tema3/img17.svg', alt='Texto que describa la imagen')
              .col-8
                p 
                  b Contenido adicional 
                p Aporta valor, mantiene el interés. 
                  b Ejemplo: 
                  | video de uso del producto en entrenamiento funcional.
        
        figure.d-block.d-lg-none
          img(src='@/assets/curso/temas/tema3/img04m.svg', alt='Texto que describa la imagen')

      
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_2 3.2 Herramientas de seguimiento


    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/img05.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p Las herramientas digitales permiten automatizar, organizar y personalizar el seguimiento comercial.
        .bloque-texto-b.color-secundario-10
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Kotler y Keller (2022), los sistemas CRM <em>(Customer Relationship Management)</em> como HubSpot, Salesforce o Zoho ayudan a registrar interacciones, programar recordatorios y segmentar clientes según su nivel de interés.
            i.fas.fa-quote-right


    //- Col8 y Col3v
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8
               p.mb-0 
                b Ejemplo empresarial. 
                | Una empresa puede usar HubSpot para programar correos automáticos que se envían si el cliente no responde en tres días, también puede registrar notas de llamadas, establecer alertas para próximas acciones y visualizar el historial completo de contacto; esto permite un seguimiento más estratégico y menos improvisado.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img06.png', alt='imagen decorativa').w-auto.img09


    //- Col1 y Col9
    .row.align-items-center(data-aos="fade-left").justify-content-center.mb-5
      .col-12.col-md-12.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img07.svg', alt='imagen decorativa')
      .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
        p.mb-0 Además de los CRM, herramientas como Trello, Google Calendar o WhatsApp Business también pueden apoyar el proceso, especialmente en equipos pequeños o emprendimientos.

    
    
    .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 3.
            span Herramientas digitales para el seguimiento comercial
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
                  td.text-center HubSpot CRM
                  td 
                    ul.bullets
                      li Automatización.
                      li Registro de interacciones.
                      li Segmentación.
                  td Seguimiento personalizado por etapas del cliente.
                
                tr
                  td.text-center Salesforce
                  td 
                    ul.bullets
                      li Gestión avanzada de clientes.
                      li Integración con ventas.
                  td Seguimiento en grandes equipos comerciales.
                
                tr
                  td.text-center Zoho CRM
                  td 
                    ul.bullets
                      li Accesible.
                      li Personalizable.
                      li Informes detallados.
                  td Seguimiento en pymes y emprendimientos.

                tr
                  td.text-center Trello
                  td 
                    ul.bullets
                      li Organización visual de tareas y contactos.
                  td Seguimiento manual por tarjetas de cliente.

                tr
                  td.text-center WhatsApp Business
                  td 
                    ul.bullets
                      li Comunicación directa.
                      li Etiquetas.
                      li Respuestas rápidas.
                  td Seguimiento informal y ágil con clientes frecuentes.


    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_3 3.3	Protocolos

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema3/img08.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p Los protocolos de contacto establecen normas y buenas prácticas para comunicarse con el cliente durante el seguimiento. 
        .bloque-texto-b.color-secundario-10
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Cardona (2020), estos protocolos incluyen la frecuencia de contacto, el tono del mensaje, la personalización y el respeto por los tiempos del cliente. Un buen protocolo evita la saturación y promueve una relación profesional.
            i.fas.fa-quote-right

    //- Col1 y Col9
    .row.align-items-center(data-aos="fade-left").justify-content-center.mb-5
      .col-12.col-md-12.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img09.svg', alt='imagen decorativa')
      .col-12.col-md-12.col-lg-7.mb-4.mb-lg-0
        p.mb-0 
          b Por ejemplo, 
          | si un cliente no responde a la primera propuesta, el protocolo puede indicar un segundo contacto a los tres días, un tercero a la semana y luego una pausa de seguimiento. El tono debe ser cordial, claro y enfocado en aportar valor. Además, cada mensaje debe personalizarse: usar el nombre del cliente, referirse a su necesidad específica y ofrecer soluciones concretas.
      .col-12.col-md-12.col-lg-2.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img18.svg', alt='imagen decorativa').mx-auto
    
    .row.mb-5
      .col-12.col-lg-8.justify-content-center.mx-auto.tarjeta.color-acento-contenido.p-2.px-4
        p.mb-0.text-center
          b A continuación, algunos elementos que un protocolo de contacto comercial debería tener:

    .row.mb-5
      .col-12.col-lg-8.justify-content-center.mx-auto
        figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img11.svg', alt='imagen decorativa')


    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_3_4 3.4	Informes


    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-5.tarjeta(data-aos="fade-right")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
            .px-4
              p.mb-0 La elaboración de informes permite evaluar el impacto del seguimiento comercial y tomar decisiones informadas. Según Jobber y Lancaster (2019), un informe de seguimiento debe incluir datos como número de contactos realizados, respuestas obtenidas, nivel de interés del cliente y acciones futuras. Estos informes pueden ser semanales, mensuales o por campaña.


    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8
               p.mb-0 
                b Ejemplo empresarial. 
                | Una empresa puede elaborar un informe que indique que, de 10 propuestas enviadas, 6 recibieron respuesta, 3 agendaron reunión y 2 cerraron compra. Esta información permite ajustar estrategias, identificar clientes potenciales y mejorar la eficiencia del equipo comercial.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema3/img13.png', alt='imagen decorativa').w-auto.img09


    .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-10(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 4.
            span Estructura básica de un informe de seguimiento comercial
          .tabla-a.mb-0(data-aos="fade-right")
            table
              caption 
                p.mb-0
                  b Fuente: 
                  | Adaptado de Jobber & Lancaster (2019).
              thead
                tr
                  th Indicador
                  th Descripción
                  th Ejemplo aplicado
              tbody
                tr
                  td.text-center Propuestas enviadas
                  td Total de propuestas entregadas.
                  td 10 propuestas en la semana.
                
                tr
                  td.text-center Respuestas obtenidas
                  td Número de clientes que respondieron.
                  td 6 respuestas.

                tr
                  td.text-center Reuniones agendadas
                  td Contactos que solicitaron reunión.
                  td 3 reuniones.
                tr
                  td.text-center Cierres comerciales
                  td Propuestas que se convirtieron en ventas.
                  td 2 cierres.
                tr
                  td.text-center Acciones futuras
                  td Próximos pasos definidos.
                  td Enviar cotización adicional, preparar demo.







</template>

<script>
export default {
  name: 'Tema3',
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
