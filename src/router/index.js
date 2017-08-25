import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/notFound/NotFound'

import ProfessorDashboard from '@/components/professor/dashboard/Dashboard'

import DatabasesIndex from '@/components/professor/databases/Index'
import Database from '@/components/professor/databases/Database'
import DatabasesList from '@/components/professor/databases/list/List'
import CreateDatabase from '@/components/professor/databases/CreateDatabase'

import StudentsIndex from '@/components/professor/students/Index'
import Student from '@/components/professor/students/Student'
import StudentsList from '@/components/professor/students/list/List'
import CreateStudent from '@/components/professor/students/CreateStudent'

import TestsIndex from '@/components/professor/tests/Index'
import TestsList from '@/components/professor/tests/List'
import Test from '@/components/professor/tests/test/Test'
import CreateTest from '@/components/professor/tests/createTest/Index'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/professor',
      name: 'ProfessorDashboard',
      component: ProfessorDashboard
    },
    {
      path: '/professor/databases',
      name: 'DatabasesIndex',
      component: DatabasesIndex,
      children: [{
        path: ':id/details',
        name: 'Database',
        component: Database
      },
      {
        path: 'all',
        name: 'DatabasesList',
        component: DatabasesList
      },
        {
          path: 'create',
          name: 'CreateDatabase',
          component: CreateDatabase
      }]
    },

    // NOTE Once students part of the app becomes active,
    // this Test / Tests should be renamed in order to remove ambiguity
    // from students Test (active test) and students tests history.
    {
      path: '/professor/tests',
      name: 'TestsIndex',
      component: TestsIndex,
      children: [{
        path: ':id/details',
        name: 'Test',
        component: Test
      },
      {
        path: 'all',
        name: 'TestsList',
        component: TestsList
      },
      {
        path: 'create',
        name: 'CreateTest',
        component: CreateTest
      }]
    },

    {
      path: '/professor/students',
      name: 'Students',
      component: StudentsIndex,
      children: [{
        path: ':id/details',
        name: 'Student',
        component: Student
      },
      {
        path: 'all',
        name: 'StudentsList',
        component: StudentsList
      },
        {
          path: 'create',
          name: 'CreateStudent',
          component: CreateStudent
      }]
    },

    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
