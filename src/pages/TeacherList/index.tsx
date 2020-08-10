/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from 'react'

import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import PageHeader from '../../components/PageHeader'

import {
  Container,
  ScrollViewTeacherList,
  SearchForm,
  Label,
  Input,
  InputGroup,
  InputBlock,
  SubmitButton,
  SubmitButtonText,
} from './styles'

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import api from '../../services/api'

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id
          },
        )

        setFavorites(favoritedTeachersIds)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      },
    })

    setIsFilterVisible(false)
    setTeachers(response.data)
  }

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholderTextColor="#c1bccc"
              placeholder="Qual é a matéria?"
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual horário?"
                />
              </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>

      <ScrollViewTeacherList
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          )
        })}
      </ScrollViewTeacherList>
    </Container>
  )
}

export default TeacherList
