<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-3
      .col-8.col-lg-4.mb-lg-0.mb-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/sintesis/img01.png", class="img-fluid")
      .col-12.col-lg-8.mb-lg-3.mb-0(data-aos="fade-left")
        .row.justify-content-center.align-items-center.mb-2
          .col-12.col-lg-9.mb-0
            p.mb-0 El componente formativo “Negociación de propuestas comerciales” brinda al aprendiz las herramientas necesarias para estructurar, presentar y dar seguimiento a propuestas comerciales de manera estratégica. A través del estudio de la comunicación comercial, se analizan los elementos clave del proceso comunicativo, las interferencias que pueden afectar su efectividad y el uso de herramientas digitales para mejorar la transmisión del mensaje. En la unidad de negociación estratégica, se abordan modelos de negociación, técnicas de anclaje y persuasión, así como el desarrollo de scripts comerciales que facilitan la interacción con el cliente.
          .col-12.col-lg-3.d-none.d-lg-block.mb-0
            figure
              img(src="@/assets/curso/sintesis/img02.svg", class="img-fluid")  
      p.mb-0 El componente también profundiza en el seguimiento comercial, explorando técnicas, herramientas digitales, protocolos de contacto y elaboración de informes que permiten mantener relaciones comerciales activas y orientadas al cierre. Finalmente, se estudian los programas de fidelización, sus objetivos, beneficios para la empresa, tipos y estrategias, reconociendo su papel en la sostenibilidad de las relaciones con los clientes. Este recorrido temático permite al aprendiz comprender y aplicar los fundamentos de la negociación comercial en contextos reales, fortaleciendo su capacidad para generar propuestas efectivas y duraderas.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
