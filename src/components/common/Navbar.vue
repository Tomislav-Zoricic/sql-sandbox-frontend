<template lang="html">
<nav class="navbar ">
  <div class="navbar-brand">
    <router-link class="nav-item" :to="{ name: 'Home' }">
      SQL Sandbox
    </router-link>
  </div>

  <div id="menu" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" :to="{ name: 'ProfessorDashboard' }">
        Dashboard
      </router-link>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Students</a>
        <div class="navbar-dropdown ">
          <router-link class="navbar-item" :to="{ name: 'StudentsList' }">
            Students
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'CreateStudent' }">
            Create Student
          </router-link>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Exams</a>
        <div class="navbar-dropdown ">
          <router-link class="navbar-item" :to="{ name: 'ExamsList' }">
            Exams
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'CreateExam' }">
            Create Exam
          </router-link>
        </div>
      </div>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Databases</a>
        <div class="navbar-dropdown ">
          <router-link class="navbar-item" :to="{ name: 'DatabasesList' }">
            Databases
          </router-link>
          <router-link class="navbar-item" :to="{ name: 'CreateDatabase' }">
            Create Database
          </router-link>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary">
              <span class="icon">
                <i class="fa fa-user-circle"></i>
              </span>
              <span>Tomislav Zoricic</span>
            </a>
          </p>
          <p class="control">
            <a class="button">
              <span class="icon">
                <i class="fa fa-sign-out"></i>
              </span>
              <span>Log out</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'professor-navbar'
}
</script>

<style lang="css">
</style>
