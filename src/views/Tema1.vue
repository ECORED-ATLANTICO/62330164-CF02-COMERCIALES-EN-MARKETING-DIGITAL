<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comunicación comercial

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema1/img01.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p.mb-3(data-aos="fade-left") Toda propuesta comercial comienza con una conversación, y toda conversación efectiva requiere una comunicación bien pensada. En esta unidad, se abrirá la puerta al fascinante mundo de la comunicación comercial: ese proceso estratégico que permite a las empresas conectar con sus clientes, transmitir valor y generar confianza. 
          .tarjeta.p-4.bg01(data-aos="fade-left")
            p.mb-0 A través del estudio de sus elementos fundamentales, las interferencias que pueden distorsionar el mensaje y las herramientas digitales que amplifican su alcance, el aprendiz descubrirá cómo una buena comunicación no solo informa, sino persuade.
    
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.1 Concepto


    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4.tarjeta(data-aos="fade-left")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema1/img02.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
            .px-4
              p.mb-0 La comunicación comercial puede definirse como el conjunto de acciones, mensajes y estrategias que utilizan las empresas para interactuar con clientes, socios, proveedores y otros actores del mercado, con el fin de promover productos, servicios o propuestas de valor. No se limita a la publicidad o a la venta directa, sino que abarca todos los canales y medios a través de los cuales una organización transmite información que impacta la percepción de su marca y la decisión de compra.

   
    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_2 1.2 Concepto

    p.mb-5 La comunicación comercial es el eje que articula la relación entre empresa y cliente, y su efectividad depende de la correcta integración de varios elementos esenciales. Según Fernández Valiñas (2023), el proceso comunicativo incluye:

    //- Subtitulo
    .row.justify-content-center.align-items-center.mb-4
      .row.align-items-center.justify-content-star.mb-1.ps-2
        .div.mb-3(data-aos="fade-left")
          h3.subtitle.position-relative Elementos del proceso comunicativo comercial
            img.image(src='@/assets/curso/temas/tema1/img16.svg', alt='Imagen decorativa')



    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-md-8.col-lg-4.order-2.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img03.png', alt='imagen decorativa')
          .col-12.col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
            .custom-slider
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.bg03.p-4.align-items-center.img-topright
                  img(src='@/assets/curso/temas/tema1/img04.svg' alt='AvatarTop').w-auto
                  h5.mb-4 Emisor
                  p.mb-0 La empresa o persona que transmite el mensaje.

                .tarjeta.bg03.p-4.align-items-center.img-topright
                  img(src='@/assets/curso/temas/tema1/img05.svg' alt='AvatarTop').w-auto
                  h5.mb-4 Mensaje
                  p.mb-0 La propuesta comercial, la información sobre el producto/servicio o el valor diferencial.

                .tarjeta.bg03.p-4.align-items-center.img-topright
                  img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop').w-auto
                  h5.mb-4 Canal
                  p.mb-0 El medio de difusión (correo electrónico, redes sociales, reuniones presenciales, videollamadas, publicidad, etc.). 
                
                .tarjeta.bg03.p-4.align-items-center.img-topright
                  img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop').w-auto
                  h5.mb-4 Receptor
                  p.mb-0 El cliente, consumidor, aliado o stakeholder que recibe el mensaje.
                
                .tarjeta.bg03.p-4.align-items-center.img-topright
                  img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop').w-auto
                  h5.mb-4 Retroalimentación
                  p.mb-0 Las respuestas, dudas, objeciones o aceptación que manifiesta el receptor.

    //- Col1 y Col9
    .container.mb-5
      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img07.svg', alt='imagen decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          p.mb-0 En el contexto comercial, estos elementos deben alinearse estratégicamente para garantizar que el mensaje sea claro, persuasivo y relevante. La correcta articulación de estos elementos no solo mejora la comprensión del mensaje, sino que también fortalece la percepción de profesionalismo y empatía por parte del emisor. En entornos digitales, la comunicación comercial debe ser visualmente atractiva, emocionalmente conectada y técnicamente precisa.


    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
               p.mb-0 
                b Ejemplo empresarial. 
                | Una empresa de implementos deportivos que desea vender a un centro de CrossFit debe adaptar su lenguaje técnico al nivel de conocimiento del cliente, evitando jergas innecesarias y utilizando canales adecuados como presentaciones interactivas o correos personalizados. El mensaje debe destacar beneficios concretos, como la durabilidad de los productos o su adaptabilidad al entrenamiento funcional. Además, el canal debe ser coherente con los hábitos del receptor: si el cliente utiliza redes sociales como principal medio de contacto, la propuesta puede incluir un video corto en Instagram o una presentación en Genially.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img17.png', alt='imagen decorativa').w-auto.img17


    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_3 1.3 Interferencias

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema1/img06.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p.mb-3(data-aos="fade-left") En el proceso de comunicación comercial, las interferencias representan obstáculos que pueden distorsionar el mensaje, dificultar su comprensión o generar interpretaciones erróneas. 
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-6.mb-lg-0.mb-3
            .bloque-texto-b.color-secundario-10
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según Berlo (2020), estas interferencias pueden ser físicas, psicológicas, semánticas o tecnológicas, y afectan tanto al emisor como al receptor. 
                i.fas.fa-quote-right
          .col-12.col-lg-2.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema1/img08.svg" alt='Imagen decorativa').p-xl-3
          .col-12.col-lg-4
            p.mb-0 En el contexto empresarial, reconocer y gestionar estas barreras es esencial para garantizar que la propuesta comercial llegue con claridad y persuasión.
      

    //- Col8 y Col3
    .container.mb-4
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8.mb-4.mb-lg-0
               p.mb-0 
                b Ejemplo empresarial. 
                | Si una empresa de implementos deportivos envía una propuesta a un centro de CrossFit utilizando un lenguaje excesivamente técnico, puede generar confusión en el receptor. Esta sería una barrera semántica. Si el canal elegido es un correo electrónico que llega a la bandeja de spam, se trata de una interferencia tecnológica. Además, si el receptor está saturado de información o tiene prejuicios frente a la marca, se enfrentan barreras psicológicas.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img09.png', alt='imagen decorativa').w-auto.img09


    //- Col1 y Col9
    .row.align-items-center(data-aos="fade-left").justify-content-center
      .col-12.col-md-12.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema1/img10.svg', alt='imagen decorativa')
      .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
        p.mb-0 Identificar estas interferencias permite ajustar el mensaje, elegir el canal adecuado y adaptar el lenguaje al perfil del cliente. En entornos digitales, esto implica revisar la accesibilidad del contenido, la claridad visual y la pertinencia del tono comunicativo.

    separador


    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 1.4 Herramientas digitales


    .container.tarjeta.color-primario-10.rounded-0.p-lg-0.p-3.mb-4(data-aos="fade-left")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3.p-0
          figure.p-0
            img(src="@/assets/curso/temas/tema1/img11.png", class="img-fluid").p-0
        .col-12.col-lg-7.p-3
          p.mb-0 Las herramientas digitales han transformado la forma en que las empresas comunican sus propuestas comerciales, permitiendo presentaciones más dinámicas, interactivas y personalizadas. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.mb-lg-0.mb-3.mb-lg-0
        .bloque-texto-b.color-secundario-10
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Kotler y Keller (2022), el uso de recursos digitales no solo mejora la estética del mensaje, sino que también facilita la segmentación, el seguimiento y la adaptación del contenido a diferentes públicos.
            i.fas.fa-quote-right
      .col-12.col-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/temas/tema1/img08.svg" alt='Imagen decorativa')
      .col-12.col-lg-4
        p.mb-0 Entre las herramientas más utilizadas se encuentran Canva, Genially, PowerPoint y plataformas de CRM como HubSpot o Salesforce. Estas permiten diseñar propuestas visuales, incluir elementos multimedia, automatizar envíos y realizar seguimiento en tiempo real. 
      
    .col-12.col-lg-10(data-aos="fade-left").mx-auto.mb-5
        .tarjeta.p-4.bg01(data-aos="fade-left")
          p.mb-0 Además, el uso de herramientas digitales permite medir el impacto de la propuesta: cuántas veces fue vista, qué secciones generaron más interés y si el cliente interactuó con el contenido. Esto aporta datos valiosos para ajustar futuras comunicaciones y mejorar la efectividad comercial.
    


    //- Col10 e Imagen
    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10.mx-auto
        //- Figura
        .titulo-sexto.mb-4
          h5 Figura 1. 
            span Herramientas digitales para la comunicación comercial
        ImagenInfografica.color-acento-botones.d-none.d-lg-block
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')
              figcaption 
                b Fuente. 
                | Adaptado de Kotler & Keller, 2022.

          .tarjeta.color-acento-botones.p-4(x="28%" y="81.7%" numero="")
            span 01
            p 
              b Canva: 
              | diseño gráfico intuitivo, plantillas personalizables. Creación de propuestas visuales con identidad de marca.

          .tarjeta.color-acento-botones.p-4(x="14%" y="43.7%" numero="")
            span 02
            p 
              b Genially: 
              | presentaciones interactivas, integración multimedia. Propuestas con videos, enlaces y animaciones.

          .tarjeta.color-acento-botones.p-4(x="37%" y="15.5%" numero="")
            span 03
            p 
              b PowerPoint: 
              | presentación estructurada, fácil de compartir. Propuestas formales para reuniones o envíos por correo.

          .tarjeta.color-acento-botones.p-4(x="71.7%" y="19.8%" numero="")
            span 04
            p 
              b HubSpot CRM:
              | seguimiento de clientes, automatización de correos. Envío y monitoreo de propuestas personalizadas.
          
          .tarjeta.color-acento-botones.p-4(x="83.8%" y="57%" numero="")
            span 05
            p 
              b Google Slides: 
              | colaboración en línea, acceso multiplataforma. Propuestas colaborativas en equipos de ventas.
        
        figure.d-block.d-lg-none
          img(src='@/assets/curso/temas/tema1/img12m.png', alt='Texto que describa la imagen')

      
   


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
