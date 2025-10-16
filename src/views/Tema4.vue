<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Programas de fidelización


    .bloque-texto-g.color-primario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Fidelizar no es solo retener clientes, sino construir relaciones duraderas basadas en confianza, valor y experiencia, en un entorno comercial cada vez más competitivo, los programas de fidelización permiten diferenciarse, generar lealtad y aumentar el valor del cliente a largo plazo. 

    //- Col1 y Col9
    .container.mb-5
      .row.align-items-center(data-aos="fade-left").justify-content-center
        .col-12.col-md-12.col-lg-1.mb-4.mb-lg-0.d-none.d-lg-block
          figure
            img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img16.svg', alt='imagen decorativa')
        .col-12.col-md-12.col-lg-9.mb-4.mb-lg-0
          p.mb-0 En esta unidad, el aprendiz explorará el concepto de fidelización desde una perspectiva estratégica, comprendiendo sus objetivos, beneficios, tipos y formas de implementación. 


    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8
               p.mb-0 A través de ejemplos empresariales y recursos prácticos, esta unidad busca que el aprendiz desarrolle una visión integral de la fidelización como parte esencial de la propuesta comercial, entendiendo que vender una vez no es suficiente: lo importante es que el cliente quiera volver.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img02.png', alt='imagen decorativa').w-auto.img09

    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_1 4.1 Concepto

    //- banner con tarjeta
    .row.justify-content-center.align-items-center.mb-4.tarjeta(data-aos="fade-right")
      .col-lg-12.mb-2
        div.tarjeta-horz.mb-3
          img(src='@/assets/curso/temas/tema4/img03.png', alt='Imagen decorativa')
          div.texto-tarjeta.bg-white
            .px-4
              p.mb-0 Los programas de fidelización son un conjunto de estrategias y acciones diseñadas por una empresa para mantener y fortalecer la relación con sus clientes actuales, incentivando la recompra, el uso frecuente de los servicios y la recomendación de la marca. En lugar de enfocarse únicamente en atraer nuevos clientes, se busca que quienes ya han confiado en la empresa se conviertan en clientes recurrentes, satisfechos y embajadores de la marca.


    separador

    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_2 4.2 Objetivos


    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema4/img04.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p.mb-3(data-aos="fade-left") Los programas de fidelización tienen como objetivo principal fortalecer la relación entre la empresa y sus clientes, incentivando la recompra, el compromiso y la recomendación. Según Reichheld (2003), fidelizar clientes puede ser hasta cinco veces más rentable que captar nuevos, ya que los clientes recurrentes tienden a comprar más, confiar más y generar menos costos operativos.


    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10.mx-auto
        p
          b En el contexto comercial, los objetivos específicos de un programa de fidelización incluyen: 


    .row.justify-content-center.align-items-center
        .col-12.col-lg-10
          .tarjeta.bg06.p-4.mb-5
            SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-4.order-2.order-lg-1.mb-0
                  h5 Aumentar la frecuencia de compra
                  p Incentivar compras repetidas.
                  p.mb-0 
                    b Ejemplo: 
                    | descuento por compras mensuales.
                .col-12.col-md-8.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img17.png', class="w-auto")
             
              .row.justify-content-center.align-items-center
                .col-12.col-lg-4.order-2.order-lg-1.mb-0
                  h5 Mejorar la satisfacción del cliente
                  p Generar experiencias positivas.
                  p.mb-0 
                    b Ejemplo: 
                    | atención personalizada postventa.
                .col-12.col-md-8.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img18.png', class="w-auto")
              .row.justify-content-center.align-items-center
                .col-12.col-lg-4.order-2.order-lg-1.mb-0
                  h5 Generar diferenciación frente a la competencia
                  p Ofrecer beneficios únicos. 
                  p.mb-0
                    b Ejemplo: 
                    | acceso exclusivo a productos nuevos
                .col-12.col-md-8.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img19.png', class="w-auto")
             
              .row.justify-content-center.align-items-center
                .col-12.col-lg-4.order-2.order-lg-1.mb-0
                  h5 Construir una comunidad alrededor de la marca
                  p Crear vínculos emocionales con la marca.
                  p.mb-0 
                    b Ejemplo: 
                    | eventos para clientes frecuentes.
                .col-12.col-md-8.col-lg-7.order-1.order-lg-2.mb-lg-0.mb-5
                  figure
                    img(src='@/assets/curso/temas/tema4/img20.png', class="w-auto")


    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_3 4.3	Beneficios


    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema4/img21.svg" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p Los beneficios de implementar programas de fidelización van más allá del aumento en ventas
        .bloque-texto-b.color-secundario-10
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Kumar y Reinartz (2016), las empresas que fidelizan clientes logran mayor estabilidad financiera, mejor reputación y mayor capacidad de innovación, ya que conocen mejor a sus clientes y pueden anticipar sus necesidades.
            i.fas.fa-quote-right


    .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 5.
            span  Beneficios empresariales de la fidelización
          .tabla-a.mb-0(data-aos="fade-right")
            table
              caption 
                p.mb-0
                  b Fuente: 
                  | Adaptado de Kumar & Reinartz, 2016.
              thead
                tr
                  th Beneficio
                  th Características principales
                  th Ejemplo aplicado
              tbody
                tr
                  td.text-center Estabilidad financiera
                  td 
                    ul.bullets
                      li Ingresos recurrentes.
                      li Menor dependencia de nuevos clientes.
                  td Compras mensuales aseguradas por centros afiliados.
                
                tr
                  td.text-center Mejora de reputación
                  td 
                    ul.bullets
                      li Clientes satisfechos recomiendan la marca.
                  td Testimonios positivos en redes sociales.
                
                tr
                  td.text-center Innovación orientada al cliente
                  td 
                    ul.bullets
                      li Conocimiento profundo de necesidades.
                  td Desarrollo de productos según feedback de clientes.

                tr
                  td.text-center Reducción de costos
                  td 
                    ul.bullets
                      li Menor inversión en captación.
                  td Menos campañas de adquisición, más retención.


    separador


    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_4 4.4 Tipos

    figure
      img(src="@/assets/curso/temas/tema4/img06.png" alt='Imagen decorativa')


    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      p.mb-4(data-aos="fade-left") Los modelos de negociación ofrecen marcos teóricos que permiten comprender cómo se desarrollan los acuerdos entre partes con intereses distintos. 
      .col-12(data-aos="fade-left")
        .row.justify-content-center.align-items-center
          
          .col-12.col-lg-4
            p.mb-0 Existen diversos tipos de programas de fidelización, cada uno con características particulares que responden a diferentes perfiles de cliente.
          .col-12.col-lg-1.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema4/img16.svg" alt='Imagen decorativa')
        
          .col-12.col-lg-7.mb-lg-0.mb-3
            .bloque-texto-b.color-secundario-10
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0.ps-3 Según Gómez Suárez (2021), los más comunes son: programas por puntos, membresías, recompensas por experiencia y programas híbridos.
                i.fas.fa-quote-right
          
    //- Col8 (Slider) y Col4
    .container(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-5
          .col-12.col-md-8.col-lg-4.order-2.order-lg-1.mb-4.mb-lg-0(data-aos="fade-left")
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img07.png', alt='imagen decorativa')
          .col-12.col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
            .custom-slider.color-primario
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema4/img08.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Por puntos
                  p El cliente acumula puntos por cada compra y los canjea por productos o descuentos.
                  p 
                    b Ejemplo: 
                    | 1 punto por cada $10.000 en compras.

                
                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema4/img09.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Membresias
                  p El cliente paga una cuota para acceder a beneficios exclusivos. 
                  p 
                    b Ejemplo:
                    | membresía mensual con 15 % de descuento.
                
                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema4/img10.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Recompensas por experiencias
                  p Se ofrecen beneficios no materiales, como acceso a eventos o contenido exclusivo. 
                  p 
                    b Ejemplo: 
                    | invitación a evento de lanzamiento de nuevos productos.

                .tarjeta.p-4.align-items-center.bg09.text-center
                  img(src='@/assets/curso/temas/tema4/img11.svg' alt='AvatarTop').w-auto.mx-auto.mb-3
                  h5.mb-4 Híbridos
                  p Combinan varios elementos anteriores. 
                  p 
                    b Ejemplo: 
                    | Programa que incluye descuentos, puntos y asesoría.


    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8
               p.mb-0 
                b Ejemplo empresarial. 
                | Una empresa de implementos deportivos puede ofrecer un programa por puntos a entrenadores independientes, mientras que a centros de <em>CrossFit</em> les ofrece membresías con descuentos y asesoría personalizada.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img12.png', alt='imagen decorativa').w-auto.img09


    separador



    //- Titulo
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_4_5 4.5	Estrategias de fidelización

    //- Col3 - Col9
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/temas/tema4/img13.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p Las estrategias de fidelización son acciones concretas que permiten implementar y mantener los programas de forma efectiva. 
        .bloque-texto-b.color-secundario-10
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0.ps-3 Según Kotler y Keller (2022), estas estrategias incluyen la personalización de la experiencia, la comunicación constante, la entrega de valor sostenido y el reconocimiento del cliente.
            i.fas.fa-quote-right

    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg02.justify-content-center.p-4.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-8
               p.mb-0 
                b Por ejemplo, 
                | una empresa puede enviar mensajes personalizados en fechas especiales, ofrecer contenido educativo sobre entrenamiento funcional o reconocer públicamente a sus clientes más fieles. Estas acciones generan conexión emocional y refuerzan la percepción de cercanía.
            .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img14.png', alt='imagen decorativa').w-auto.img09

    .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-10(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 6.
            span Estrategias de fidelización comercial
          .tabla-a.mb-0(data-aos="fade-right")
            table
              caption 
                p.mb-0
                  b Fuente: 
                  | Adaptado de Kotler & Keller, 2022.
              thead
                tr
                  th Estrategia
                  th Características principales
                  th Ejemplo aplicado
              tbody
                tr
                  td.text-center Personalización
                  td Adaptar la experiencia al perfil del cliente.
                  td Mensajes personalizados en fechas especiales.
                tr
                  td.text-center Comunicación constante
                  td Mantener contacto regular y relevante.
                  td Newsletter mensual con novedades y consejos.
                tr
                  td.text-center Valor sostenido
                  td Ofrecer beneficios continuos, no solo iniciales.
                  td Acceso a contenido exclusivo cada mes.
                tr
                  td.text-center Reconocimiento
                  td Agradecer y destacar la lealtad del cliente.
                  td “Cliente del mes” en redes sociales.
               


    //- Col8 y Col3
    .container.mb-5
      .row.align-items-center(data-aos="fade-left")
        .col-12.col-lg-10.bg07.justify-content-center.p-5.tarjeta.mx-auto.position-relative
          .row.align-items-center
            .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img15.png', alt='imagen decorativa').w-auto.position-absolute
            .col-12.col-md-12.col-lg-8
                TarjetaAudio.color-primario.mb-3.p-4(
                  texto="Estrategias de fidelización"
                  :audio="require('@/assets/curso/audio/audio.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                

</template>

<script>
export default {
  name: 'Tema4',
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
