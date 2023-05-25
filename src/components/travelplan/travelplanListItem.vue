<template>
    <tr class="text-center">
      <th><router-link :to="'/travelplan/view/' + article.articleNo" style="background-color: transparent; color: #000; text-decoration-line: none">{{article.location}}</router-link></th>
      <th>{{article.userId}}</th>
      <th>{{article.hit}}</th>
      <th>{{article.registerTime}}</th>
    </tr>
  </template>
  
  
  
  
  
  <script>
  export default {
    name: "TravelPlanListItem",
    props:{
      article : Object
    }
  };
  </script>
  
  <style></style>
  
  
  <style scoped>
tr{
  font-family: 'Nixgon, sans-serif';
  opacity: 80%;
  font-size: 17px;
  font-weight: 600;
}
</style>
  
  
  
  
  
  
  
  
  
  