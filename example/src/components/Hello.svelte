<script lang="ts">
  export let txt = "I'm Svelte!";
  export let counter = 0;
</script>

<div>
  <h1>{txt}</h1>
  <p>Counter: {counter}</p>
</div>

<style>
  div {
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    padding: 2rem;
  }

  h1 {
    color: #fff;
    text-align: center;
    font-size: 4rem;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    color: #333;
  }
</style>