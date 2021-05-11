<script>
import CustomText from '@/components/CustomText'

export default {
  name: 'Home',
  components: {
    CustomText
  }
}
</script>

<template>
  <div class="Home">
    <div class="timeline">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        cupiditate nesciunt mollitia nemo eaque, quaerat rerum quod accusantium
        amet minus earum vel qui adipisci a eos atque libero quas
        exercitationem!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Home {
  max-width: 605px;
  margin-left: auto;
  margin-right: auto;

  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 295px;
    grid-gap: 30px;
  }
}

.sidebar {
  display: none;

  @media (--t) {
    display: block;
  }
}
</style>
