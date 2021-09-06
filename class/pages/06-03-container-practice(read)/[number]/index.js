import {useRouter} from 'next/router'
import {useQuery, gql} from '@apollo/client'
import BoardRead from '../../../src/components/units/quiz/read(06-03)/BoardRead.container'

//gpl안에서는 #이 주석

export default function DynamicBoardRead(){

   
    return<BoardRead />
}