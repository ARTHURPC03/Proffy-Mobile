import React from 'react'

import PageHeader from '../../components/PageHeader'

import { Container, ScrollViewTeacherList } from './styles'
import TeacherItem from '../../components/TeacherItem'

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />

      <ScrollViewTeacherList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollViewTeacherList>
    </Container>
  )
}

export default TeacherList
