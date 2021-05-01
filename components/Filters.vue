<template>
   <div class="flex flex-col bg-white p-4 mt-4">
  <p>Jag ar:</p>
      <form class=" text-PrimaryGreen">
  <input type="radio" id="males" name="gender" value="male">
  <label for="male">Male</label><br>
  <input type="radio" id="females" name="gender" value="female">
  <label for="female">Female</label><br>
  <input type="radio" id="othesr" name="gender" value="other">
  <label for="other">Other</label>

  <br>  

  <p>Please select your age:</p>
  <input type="radio" id="age1" name="age" value="30">
  <label for="age1">0 - 30</label><br>
  <input type="radio" id="age2" name="age" value="60">
  <label for="age2">31 - 60</label><br>  
  <input type="radio" id="age3" name="age" value="100">
  <label for="age3">61 - 100</label>
 
  <br> 
    <p>asd</p>
  <input type="radio" id="male" name="gender" value="male">
  <label for="males">Male</label><br>
  <input type="radio" id="female" name="gender" value="female">
  <label for="females">Female</label><br>
  <input type="radio" id="other" name="gender" value="other">
  <label for="others">Other</label>

       
</form>
    <button class="my-3 px-5 ml-auto rounded-md bg-PrimaryGreen">spara</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>