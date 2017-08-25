<template lang="html">
  <b-navbar toggleable type="inverse" variant="success">

   <b-nav-toggle target="nav_collapse"></b-nav-toggle>

   <b-link class="navbar-brand" :to="{ name: 'Home' }">
     <span>BootstrapVue</span>
   </b-link>

   <b-collapse is-nav id="nav_collapse">

     <b-nav is-nav-bar>
       <b-nav-item :to="{ name: 'Students' }">Student</b-nav-item>
       <b-nav-item :to="{ name: 'Databases' }">Databases</b-nav-item>
       <b-nav-item :to="{ name: 'Tests' }">Tests</b-nav-item>
     </b-nav>

     <b-nav is-nav-bar class="ml-auto">
       <b-nav-item-dropdown right>
         <!-- Using text slot -->
         <template slot="text">
           <span style="font-weight: bold;">User</span>
         </template>

         <b-dropdown-item to="#">Profile</b-dropdown-item>
         <b-dropdown-item to="#">Signout</b-dropdown-item>
       </b-nav-item-dropdown>

     </b-nav>
   </b-collapse>
 </b-navbar>
</template>

<script>
export default {
  name: 'student-navbar'
}
</script>

<style lang="css">
</style>
