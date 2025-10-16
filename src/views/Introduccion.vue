<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-3.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/img01.png" alt='Imagen decorativa')
      .col-12.col-lg-9(data-aos="fade-left")
        p.mb-3.mb-lg-3(data-aos="fade-left") El componente formativo <strong>“Negociación de propuestas comerciales”</strong> tiene como propósito fortalecer las competencias del aprendiz en la estructuración, presentación y seguimiento de propuestas comerciales en entornos digitales. A partir del desarrollo de habilidades comunicativas, técnicas de negociación, estrategias de fidelización y uso de herramientas digitales, se busca que el aprendiz pueda diseñar ofertas comerciales persuasivas, éticas y adaptadas a las necesidades del cliente.
    
    .tarjeta.p-4.mb-5.bg01(data-aos="fade-left")
        p.mb-0 Este proceso formativo se articula con el segundo resultado de aprendizaje “Negociar propuesta comercial de acuerdo con protocolos de seguimiento, técnicas de comunicación, persuasión y ventas”. Para ello, se abordan cuatro unidades temáticas que permiten comprender y aplicar los fundamentos de la comunicación comercial, los modelos de negociación, las técnicas de seguimiento y los programas de fidelización. Cada unidad está diseñada para integrar teoría y práctica, mediante ejemplos empresariales y recursos digitales que enriquecen la experiencia de aprendizaje.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
