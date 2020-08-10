import React from 'react'

import { Container, ScrollViewTeacherList } from './styles'
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

const Favorites: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

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

export default Favorites
