<script>
  export let date;

  let formattedDate;
  if (date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    formattedDate = new Date(date).toLocaleDateString('en-US', options);
  }
</script>

{formattedDate}
