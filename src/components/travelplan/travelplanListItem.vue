<template>
    <tr class="text-center">
      <th><router-link :to="'/travelplanview/' + article.articleNo" style="background-color: transparent; color: #000; text-decoration-line: none">{{article.location}}</router-link></th>
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
  
  
  
  
  
  
  
  
  
  
  
  